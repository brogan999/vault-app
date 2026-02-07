"use client";

import { useState, useCallback, useRef, useMemo, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { getProductById } from "@/lib/products";
import { getTestDefinition } from "@/lib/tests";
import type { Answer } from "@/lib/tests/types";
import { submitTestAnswers } from "@/app/actions/tests";
import { getCurrentUserPreferences } from "@/app/actions/settings";
import { TestShell } from "@/components/features/test/TestShell";
import { TestProgress } from "@/components/features/test/TestProgress";
import { TestQuestion } from "@/components/features/test/TestQuestion";
import type { TestQuestionRef } from "@/components/features/test/TestQuestion";
import { TestNavigation } from "@/components/features/test/TestNavigation";
import { toast } from "sonner";

const QUESTIONS_PER_PAGE_DEFAULT = 6;

/** Esoteric tests that use birth data; pre-fill from Settings when available. */
const ESOTERIC_BIRTH_DATA_TEST_IDS = ["birth-chart", "vedic", "human-design", "chinese-zodiac", "life-path", "mayan"] as const;
const BIRTH_DATA_QUESTION_IDS: Record<string, { dateId: string; timeId?: string; cityId?: string; countryId?: string }> = {
  "birth-chart": { dateId: "bc-date", timeId: "bc-time", cityId: "bc-city", countryId: "bc-country" },
  vedic: { dateId: "v-date", timeId: "v-time", cityId: "v-city", countryId: "v-country" },
  "human-design": { dateId: "hd-date", timeId: "hd-time", cityId: "hd-city", countryId: "hd-country" },
  "chinese-zodiac": { dateId: "cz-date" },
  "life-path": { dateId: "lp-date" },
  mayan: { dateId: "mayan-date" },
};

interface QuestionsPageProps {
  params: Promise<{ testId: string }>;
}

export default function QuestionsPage({ params }: QuestionsPageProps) {
  const { testId } = use(params);
  const router = useRouter();

  const product = getProductById(testId);
  const testDef = getTestDefinition(testId);

  const questionsPerPage =
    testDef?.questionsPerPage ?? QUESTIONS_PER_PAGE_DEFAULT;
  const rawQuestions = testDef?.questions ?? [];
  // Randomize item order per user (psychometric standard)
  const questions = useMemo(() => {
    const q = [...rawQuestions];
    for (let i = q.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [q[i], q[j]] = [q[j], q[i]];
    }
    return q;
  }, [testId]);
  const pageCount = Math.ceil(questions.length / questionsPerPage);

  const [pageIndex, setPageIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<string, number | string>>(new Map());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questionBlockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const questionRefs = useRef<(TestQuestionRef | null)[]>([]);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  const questionStartTimes = useRef<Map<string, number>>(new Map());
  const responseTimeMsMap = useRef<Map<string, number>>(new Map());
  const birthDataPrefillDone = useRef(false);

  // Pre-fill birth data from Settings when user has saved data (collect once, reuse across esoteric tests)
  useEffect(() => {
    if (!ESOTERIC_BIRTH_DATA_TEST_IDS.includes(testId as (typeof ESOTERIC_BIRTH_DATA_TEST_IDS)[number]) || birthDataPrefillDone.current) return;
    birthDataPrefillDone.current = true;
    getCurrentUserPreferences().then((prefs) => {
      if (!prefs?.birthDate) return;
      const mapping = BIRTH_DATA_QUESTION_IDS[testId];
      if (!mapping) return;
      setAnswers((prev) => {
        const next = new Map(prev);
        if (mapping.dateId && prefs.birthDate) next.set(mapping.dateId, prefs.birthDate);
        if (mapping.timeId && prefs.birthTime != null) next.set(mapping.timeId, prefs.birthTime);
        if (mapping.cityId && prefs.birthLocationName) next.set(mapping.cityId, prefs.birthLocationName);
        return next;
      });
    });
  }, [testId]);

  const questionsOnPage = useMemo(() => {
    const start = pageIndex * questionsPerPage;
    return questions.slice(start, start + questionsPerPage);
  }, [questions, pageIndex, questionsPerPage]);

  const answeredCount = answers.size;
  const canGoNext = questionsOnPage.every((q) => {
    const v = answers.get(q.id);
    return v !== undefined && v !== "";
  });

  const handleAnswer = useCallback(
    (questionId: string, value: number | string) => {
      const start = questionStartTimes.current.get(questionId);
      if (typeof start === "number") {
        responseTimeMsMap.current.set(questionId, Math.round(Date.now() - start));
      }
      setAnswers((prev) => {
        const next = new Map(prev);
        next.set(questionId, value);
        return next;
      });

      const currentIdx = questionsOnPage.findIndex((q) => q.id === questionId);
      if (currentIdx < 0) return;

      const nextIdx = currentIdx + 1;
      const reducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (nextIdx < questionsOnPage.length) {
        const nextBlock = questionBlockRefs.current[nextIdx];
        const nextQuestionRef = questionRefs.current[nextIdx];
        if (nextBlock) {
          nextBlock.scrollIntoView({
            behavior: reducedMotion ? "auto" : "smooth",
            block: "start",
          });
          requestAnimationFrame(() => {
            setTimeout(() => {
              nextQuestionRef?.focusFirstOption();
            }, 100);
          });
        }
      } else {
        nextButtonRef.current?.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
          block: "nearest",
        });
        requestAnimationFrame(() => {
          setTimeout(() => {
            nextButtonRef.current?.focus();
          }, 100);
        });
      }
    },
    [questionsOnPage]
  );

  const handleBack = useCallback(() => {
    setPageIndex((i) => Math.max(0, i - 1));
  }, []);

  const handleNext = useCallback(() => {
    if (canGoNext) {
      setPageIndex((i) => Math.min(pageCount - 1, i + 1));
    }
  }, [canGoNext, pageCount]);

  const handleSubmit = useCallback(async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const answerArray: Answer[] = questions
        .map((q, presentedOrder) => {
          const value = answers.get(q.id);
          if (value === undefined) return null;
          return {
            questionId: q.id,
            value,
            presentedOrder,
            responseTimeMs: responseTimeMsMap.current.get(q.id) ?? undefined,
          } satisfies Answer;
        })
        .filter((a): a is NonNullable<typeof a> => a !== null);

      const result = await submitTestAnswers(testId, answerArray);
      if (result.guestId) {
        document.cookie = `vault_guest_id=${result.guestId}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
      }
      toast.success("Assessment complete!");
      router.push(`/test/${testId}/results/${result.attemptId}`);
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Failed to submit assessment"
      );
      setIsSubmitting(false);
    }
  }, [answers, isSubmitting, questions, router, testId]);

  useEffect(() => {
    questionBlockRefs.current = questionBlockRefs.current.slice(
      0,
      questionsOnPage.length
    );
    questionRefs.current = questionRefs.current.slice(0, questionsOnPage.length);
    const now = Date.now();
    questionsOnPage.forEach((q) => questionStartTimes.current.set(q.id, now));
  }, [questionsOnPage]);

  useEffect(() => {
    if (questionsOnPage.length === 0) return;
    questionBlockRefs.current[0]?.scrollIntoView({
      behavior: "auto",
      block: "start",
    });
    const t = setTimeout(() => {
      questionRefs.current[0]?.focusFirstOption();
    }, 150);
    return () => clearTimeout(t);
  }, [pageIndex, questionsOnPage.length]);

  if (!product || !testDef) {
    return (
      <TestShell>
        <div className="text-center py-20">
          <h1 className="text-xl font-semibold text-foreground">
            Test not found
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            This assessment does not exist or has been removed.
          </p>
        </div>
      </TestShell>
    );
  }

  return (
    <TestShell>
      <TestProgress
        current={pageIndex * questionsPerPage}
        total={questions.length}
        testTitle={product.title}
        pageIndex={pageIndex}
        pageCount={pageCount}
        answeredCount={answeredCount}
      />

      <div className="flex flex-col gap-10">
        {questionsOnPage.map((q, i) => (
          <div
            key={q.id}
            ref={(el) => {
              questionBlockRefs.current[i] = el;
            }}
            className="scroll-mt-4 rounded-xl border border-border/60 bg-card p-6"
          >
            <TestQuestion
              ref={(r) => {
                questionRefs.current[i] = r;
              }}
              question={q}
              value={answers.get(q.id)}
              onChange={(value) => handleAnswer(q.id, value)}
              variant="inline"
            />
          </div>
        ))}
      </div>

      <TestNavigation
        ref={nextButtonRef}
        currentIndex={pageIndex}
        total={pageCount}
        canGoNext={canGoNext}
        isSubmitting={isSubmitting}
        onBack={handleBack}
        onNext={handleNext}
        onSubmit={handleSubmit}
      />
    </TestShell>
  );
}
