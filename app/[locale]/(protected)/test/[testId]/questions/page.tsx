"use client";

import { useState, useCallback, use } from "react";
import { useRouter } from "next/navigation";
import { getProductById } from "@/lib/products";
import { getTestDefinition } from "@/lib/tests";
import type { Answer } from "@/lib/tests/types";
import { submitTestAnswers } from "@/app/actions/tests";
import { TestShell } from "@/components/features/test/TestShell";
import { TestProgress } from "@/components/features/test/TestProgress";
import { TestQuestion } from "@/components/features/test/TestQuestion";
import { TestNavigation } from "@/components/features/test/TestNavigation";
import { toast } from "sonner";

interface QuestionsPageProps {
  params: Promise<{ testId: string }>;
}

export default function QuestionsPage({ params }: QuestionsPageProps) {
  const { testId } = use(params);
  const router = useRouter();

  const product = getProductById(testId);
  const testDef = getTestDefinition(testId);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<string, number | string>>(new Map());
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!product || !testDef) {
    return (
      <TestShell>
        <div className="text-center py-20">
          <h1 className="text-xl font-semibold text-foreground">Test not found</h1>
          <p className="text-sm text-muted-foreground mt-2">
            This assessment does not exist or has been removed.
          </p>
        </div>
      </TestShell>
    );
  }

  const questions = testDef.questions;
  const currentQuestion = questions[currentIndex];
  const currentValue = answers.get(currentQuestion.id);
  const canGoNext = currentValue !== undefined && currentValue !== "";

  const handleAnswer = useCallback(
    (value: number | string) => {
      setAnswers((prev) => {
        const next = new Map(prev);
        next.set(currentQuestion.id, value);
        return next;
      });
    },
    [currentQuestion.id],
  );

  const handleBack = useCallback(() => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  }, []);

  const handleNext = useCallback(() => {
    if (canGoNext) {
      setCurrentIndex((i) => Math.min(questions.length - 1, i + 1));
    }
  }, [canGoNext, questions.length]);

  const handleSubmit = useCallback(async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      // Convert map to Answer[]
      const answerArray: Answer[] = Array.from(answers.entries()).map(
        ([questionId, value]) => ({ questionId, value }),
      );

      const { attemptId } = await submitTestAnswers(testId, answerArray);
      toast.success("Assessment complete!");
      router.push(`/test/${testId}/results/${attemptId}`);
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Failed to submit assessment",
      );
      setIsSubmitting(false);
    }
  }, [answers, isSubmitting, router, testId]);

  return (
    <TestShell>
      <TestProgress
        current={currentIndex}
        total={questions.length}
        testTitle={product.title}
      />

      <div className="min-h-[300px]">
        <TestQuestion
          key={currentQuestion.id}
          question={currentQuestion}
          value={currentValue}
          onChange={handleAnswer}
        />
      </div>

      <TestNavigation
        currentIndex={currentIndex}
        total={questions.length}
        canGoNext={canGoNext}
        isSubmitting={isSubmitting}
        onBack={handleBack}
        onNext={handleNext}
        onSubmit={handleSubmit}
      />
    </TestShell>
  );
}
