"use client";

import { useState, useCallback, useRef, useMemo, useEffect } from "react";
import { useRouter } from "@/i18n/navigation";
import { getProductById } from "@/lib/products";
import { getTestDefinition } from "@/lib/tests";
import type { Answer } from "@/lib/tests/types";
import { submitTestAnswers, savePostTestInfo, getUserTestResults } from "@/app/actions/tests";
import { TestShell } from "@/components/features/test/TestShell";
import { TestProgress } from "@/components/features/test/TestProgress";
import { TestQuestion } from "@/components/features/test/TestQuestion";
import type { TestQuestionRef } from "@/components/features/test/TestQuestion";
import { TestNavigation } from "@/components/features/test/TestNavigation";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, ClipboardCheck, BarChart3, Rocket } from "lucide-react";

const QUESTIONS_PER_PAGE_DEFAULT = 6;

interface MbtiTestPageProps {
  testId: string;
}

export function MbtiTestPage({ testId }: MbtiTestPageProps) {
  const router = useRouter();
  const t = useTranslations("test.collect");
  const tTest = useTranslations("test");
  const tIntro = useTranslations("test.intro");

  const product = getProductById(testId);
  const testDef = getTestDefinition(testId);

  const questionsPerPage =
    testDef?.questionsPerPage ?? QUESTIONS_PER_PAGE_DEFAULT;
  const rawQuestions = testDef?.questions ?? [];

  // Only show email/gender collect form on first test (0 completed) or if not signed up
  useEffect(() => {
    getUserTestResults()
      .then((rows) => setCompletedTestCount(rows.length))
      .catch(() => setCompletedTestCount(0));
  }, []);

  // Shuffle questions client-side only to avoid hydration mismatch (Math.random
  // produces different results on server vs client). We initialise with the raw
  // order and shuffle once after mount.
  const [questions, setQuestions] = useState(rawQuestions);
  const shuffledRef = useRef(false);
  useEffect(() => {
    if (shuffledRef.current) return;
    shuffledRef.current = true;
    const q = [...rawQuestions];
    for (let i = q.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [q[i], q[j]] = [q[j], q[i]];
    }
    setQuestions(q);
  }, [testId]);

  const pageCount = Math.ceil(questions.length / questionsPerPage);

  const [pageIndex, setPageIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<string, number | string>>(
    new Map()
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [collectEmail, setCollectEmail] = useState("");
  const [collectGender, setCollectGender] = useState("");
  const [collectMarketing, setCollectMarketing] = useState(false);
  /** Only show email/gender form on first test (0 completed so far). null = loading. */
  const [completedTestCount, setCompletedTestCount] = useState<number | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const questionBlockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const questionRefs = useRef<(TestQuestionRef | null)[]>([]);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  const questionStartTimes = useRef<Map<string, number>>(new Map());
  const responseTimeMsMap = useRef<Map<string, number>>(new Map());

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
        responseTimeMsMap.current.set(
          questionId,
          Math.round(Date.now() - start)
        );
      }
      setAnswers((prev) => {
        const next = new Map(prev);
        next.set(questionId, value);
        return next;
      });

      const currentIdx = questionsOnPage.findIndex(
        (q) => q.id === questionId
      );
      if (currentIdx < 0) return;

      const nextIdx = currentIdx + 1;
      // Only advance the active index forward, never backwards (so re-answering
      // an earlier question doesn't re-fade questions already reached).
      setActiveIndex((prev) => Math.max(prev, nextIdx));

      const reducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (nextIdx < questionsOnPage.length) {
        const nextBlock = questionBlockRefs.current[nextIdx];
        const nextQuestionRef = questionRefs.current[nextIdx];
        if (nextBlock) {
          // Scroll so the answer circles of the next question are comfortably
          // visible. We position the top of the question card ~30% from the
          // top of the viewport so the question text and circles are in the
          // natural reading zone.
          const rect = nextBlock.getBoundingClientRect();
          const targetY =
            rect.top + window.scrollY - window.innerHeight * 0.3;
          window.scrollTo({
            top: Math.max(0, targetY),
            behavior: reducedMotion ? "auto" : "smooth",
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
      const saveResult = await savePostTestInfo(testId, result.attemptId, {
        email: collectEmail.trim() || undefined,
        gender: collectGender.trim() || undefined,
        marketingOptIn: collectMarketing,
      });
      if (saveResult?.error) {
        toast.error(saveResult.error);
        setIsSubmitting(false);
        return;
      }
      if (saveResult?.redirectUrl) {
        router.push(saveResult.redirectUrl);
      }
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Failed to submit assessment"
      );
      setIsSubmitting(false);
    }
  }, [
    answers,
    isSubmitting,
    questions,
    testId,
    collectEmail,
    collectGender,
    collectMarketing,
  ]);

  useEffect(() => {
    questionBlockRefs.current = questionBlockRefs.current.slice(
      0,
      questionsOnPage.length
    );
    questionRefs.current = questionRefs.current.slice(
      0,
      questionsOnPage.length
    );
    const now = Date.now();
    questionsOnPage.forEach((q) => questionStartTimes.current.set(q.id, now));
  }, [questionsOnPage]);

  useEffect(() => {
    if (questionsOnPage.length === 0) return;
    setActiveIndex(0);

    // On the first page, don't auto-scroll — let the user see the intro header
    // and scroll naturally to the questions. On subsequent pages, scroll to the
    // first question so they don't have to scroll past already-answered content.
    if (pageIndex > 0) {
      const firstBlock = questionBlockRefs.current[0];
      if (firstBlock) {
        const rect = firstBlock.getBoundingClientRect();
        const targetY =
          rect.top + window.scrollY - window.innerHeight * 0.3;
        window.scrollTo({ top: Math.max(0, targetY), behavior: "auto" });
      }
    }

    const timer = setTimeout(() => {
      questionRefs.current[0]?.focusFirstOption();
    }, 150);
    return () => clearTimeout(timer);
  }, [pageIndex, questionsOnPage.length]);

  if (!product || !testDef) {
    return (
      <TestShell>
        <div className="text-center py-20">
          <h1 className="text-xl font-semibold text-foreground">
            {tTest("testNotFound")}
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            {tTest("testNotFoundDescription")}
          </p>
        </div>
      </TestShell>
    );
  }

  const steps = [
    { number: 1, title: tIntro("step1Title"), description: tIntro("step1Description"), icon: ClipboardCheck, labelColor: "text-primary", titleColor: "text-foreground", descColor: "text-muted-foreground", bgColor: "bg-primary/10", borderColor: "border-primary/30" },
    { number: 2, title: tIntro("step2Title"), description: tIntro("step2Description"), icon: BarChart3, labelColor: "text-muted-foreground", titleColor: "text-foreground", descColor: "text-muted-foreground", bgColor: "bg-muted", borderColor: "border-border" },
    { number: 3, title: tIntro("step3Title"), description: tIntro("step3Description"), icon: Rocket, labelColor: "text-muted-foreground", titleColor: "text-foreground", descColor: "text-muted-foreground", bgColor: "bg-muted", borderColor: "border-border" },
  ];

  return (
    <TestShell>
      {/* ── Intro header ── */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-serif text-foreground tracking-tight sm:text-5xl">
          {tTest("freePersonalityTest")}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground tracking-wide">
          {tTest("nerisTypeExplorer")}
        </p>
      </div>

      {/* ── Three steps ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`relative rounded-xl border ${step.borderColor} ${step.bgColor} p-5`}
          >
            <span className={`inline-block text-xs font-bold uppercase tracking-wider ${step.labelColor} mb-2`}>
              Step {step.number}
            </span>
            <h2 className={`text-base font-semibold mb-1 ${step.titleColor}`}>
              {step.title}
            </h2>
            <p className={`text-sm leading-relaxed ${step.descColor}`}>
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* ── Progress bar ── */}
      <TestProgress
        current={pageIndex * questionsPerPage}
        total={questions.length}
        testTitle={product.title}
        pageIndex={pageIndex}
        pageCount={pageCount}
        answeredCount={answeredCount}
      />

      {/* ── Questions ── */}
      <div className="flex flex-col gap-16">
        {questionsOnPage.map((q, i) => {
          const isActive = i === activeIndex;
          const isAnswered = answers.has(q.id);
          const isFaded = !isActive && !isAnswered;
          return (
            <div
              key={q.id}
              ref={(el) => {
                questionBlockRefs.current[i] = el;
              }}
              className={cn(
                "scroll-mt-4 rounded-2xl border border-border/60 bg-card p-8 transition-opacity duration-500",
                isFaded ? "opacity-35" : "opacity-100"
              )}
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
          );
        })}
      </div>

      {/* ── Optional email/gender form only on first test (0 completed) or if not signed up ── */}
      {pageIndex === pageCount - 1 && completedTestCount === 0 && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="mt-16 rounded-2xl border border-border/60 bg-card p-6 space-y-6"
        >
          <div className="space-y-2">
            <Label
              htmlFor="collect-email"
              className="font-medium text-foreground"
            >
              {t("emailLabel")}
            </Label>
            <p className="text-sm text-muted-foreground">{t("emailHint")}</p>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="collect-email"
                type="email"
                placeholder={t("emailPlaceholder")}
                value={collectEmail}
                onChange={(e) => setCollectEmail(e.target.value)}
                className="pl-9 rounded-xl border-input"
              />
            </div>
            <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
              <input
                type="checkbox"
                checked={collectMarketing}
                onChange={(e) => setCollectMarketing(e.target.checked)}
                className="rounded border-input"
              />
              {t("marketingLabel")}
            </label>
          </div>
          <div className="space-y-2">
            <Label className="font-medium text-foreground">
              {t("genderLabel")}
            </Label>
            <p className="text-sm text-muted-foreground">{t("genderHint")}</p>
            <div className="flex flex-col gap-2">
              {(["male", "female", "other"] as const).map((value) => (
                <label
                  key={value}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={value}
                    checked={collectGender === value}
                    onChange={() => setCollectGender(value)}
                    className="text-primary"
                  />
                  <span className="text-sm text-foreground">{t(value)}</span>
                </label>
              ))}
            </div>
          </div>
        </form>
      )}

      {!canGoNext && (
        <p className="mt-6 text-center text-sm text-primary" role="status">
          {t("answerAllToContinue")}
        </p>
      )}
      {/* ── Navigation ── */}
      <TestNavigation
        ref={nextButtonRef}
        currentIndex={pageIndex}
        total={pageCount}
        canGoNext={canGoNext}
        isSubmitting={isSubmitting}
        onBack={handleBack}
        onNext={handleNext}
        onSubmit={handleSubmit}
        submitLabel={t("seeResults")}
      />

      {/* Extra breathing room so the last questions can scroll into the 30%
          viewport offset. Without this, the footer blocks the scroll target. */}
      <div className="h-[60vh]" aria-hidden="true" />
    </TestShell>
  );
}
