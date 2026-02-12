"use client";

import { forwardRef, useImperativeHandle, useRef, useLayoutEffect } from "react";
import { cn } from "@/lib/utils";
import type { Question, QuestionOption } from "@/lib/tests/types";

export interface TestQuestionRef {
  focusFirstOption: () => void;
}

interface TestQuestionProps {
  question: Question;
  value: number | string | undefined;
  onChange: (value: number | string) => void;
  /** "inline" = horizontal bubbles (16p-style); "stacked" = vertical list. Default "inline" for likert. */
  variant?: "inline" | "stacked";
  /** When true, focus this question on mount so the user can use the keyboard immediately. */
  autoFocus?: boolean;
}

export const TestQuestion = forwardRef<TestQuestionRef | null, TestQuestionProps>(
  function TestQuestion({ question, value, onChange, variant = "inline", autoFocus }, ref) {
    switch (question.type) {
      case "likert-5":
      case "likert-7":
        return (
          <LikertQuestion
            question={question}
            value={value}
            onChange={onChange}
            variant={variant}
            autoFocus={autoFocus}
            ref={ref}
          />
        );
      case "multiple-choice":
      case "correct-answer":
        return (
          <MultipleChoiceQuestion
            question={question}
            value={value}
            onChange={onChange}
            autoFocus={autoFocus}
            ref={ref}
          />
        );
      case "forced-choice":
        return (
          <ForcedChoiceQuestion
            question={question}
            value={value}
            onChange={onChange}
            autoFocus={autoFocus}
            ref={ref}
          />
        );
      case "text-input":
        return <TextInputQuestion question={question} value={value} onChange={onChange} />;
      case "date-input":
        return <DateInputQuestion question={question} value={value} onChange={onChange} />;
      case "number-input":
        return <NumberInputQuestion question={question} value={value} onChange={onChange} />;
      default:
        return <p className="text-destructive">Unknown question type: {question.type}</p>;
    }
  }
);

/* --- Likert Scale --- */

const LikertQuestion = forwardRef<TestQuestionRef, TestQuestionProps & { variant?: "inline" | "stacked"; autoFocus?: boolean }>(
  function LikertQuestion({ question, value, onChange, variant = "inline", autoFocus }, ref) {
    const options = question.options ?? [];
    const firstOptionRef = useRef<HTMLButtonElement>(null);
    const questionWrapperRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      focusFirstOption: () => {
        if (variant === "inline") {
          questionWrapperRef.current?.focus();
        } else {
          firstOptionRef.current?.focus();
        }
      },
    }), [variant]);

    useLayoutEffect(() => {
      if (!autoFocus) return;
      const t = setTimeout(() => {
        if (variant === "inline") {
          questionWrapperRef.current?.focus();
        } else {
          firstOptionRef.current?.focus();
        }
      }, 50);
      return () => clearTimeout(t);
    }, [autoFocus, variant]);

    if (variant === "inline") {
      // 16p style: Agree (left) to Disagree (right); show options reversed so Strongly Agree is left
      const reversed = [...options].reverse();
      const leftLabel = options[options.length - 1]?.label ?? "Agree";
      const rightLabel = options[0]?.label ?? "Disagree";
      const n = reversed.length;
      const handleKeyDown = (e: React.KeyboardEvent) => {
        const num = parseInt(e.key, 10);
        if (!Number.isNaN(num) && num >= 1 && num <= n) {
          e.preventDefault();
          onChange(reversed[num - 1].value);
        }
      };
      return (
        <div
          ref={questionWrapperRef}
          tabIndex={0}
          role="group"
          aria-label={question.text}
          className="space-y-5 min-w-0 overflow-hidden rounded-xl px-2 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          onKeyDownCapture={handleKeyDown}
        >
          <h2 className="text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
            {question.text}
          </h2>
          <div className="flex flex-col gap-2 min-w-0">
            <div className="flex items-center gap-1 sm:gap-3 min-w-0">
              <span className="w-14 shrink-0 text-left text-xs font-medium text-primary sm:w-28 sm:text-base">
                {leftLabel}
              </span>
              <div className="flex flex-1 justify-between gap-0.5 sm:gap-1 min-w-0">
                {reversed.map((opt, i) => {
                  const selected = value === opt.value;
                  const isAgreeSide = n >= 7 ? i <= 2 : i <= 1;
                  const isDisagreeSide = n >= 7 ? i >= 4 : i >= n - 2;
                  const isNeutral = n >= 7 && i === 3;
                  const selectedStyle = selected
                    ? isAgreeSide
                      ? "border-primary bg-primary text-primary-foreground"
                      : isDisagreeSide
                        ? "border-muted-foreground/50 bg-muted text-foreground"
                        : isNeutral
                          ? "border-muted-foreground/50 bg-muted text-foreground"
                          : "border-primary bg-primary text-primary-foreground"
                    : "border-test-bubble-border bg-card hover:border-primary/40 hover:bg-muted/50";
                  const neutralIndex = Math.floor(n / 2);
                  const distanceFromCenter = Math.abs(i - neutralIndex);
                  const maxDistance = Math.floor(n / 2);
                  const scale = maxDistance === 0 ? 1 : 0.88 + (0.12 * distanceFromCenter) / maxDistance;
                  return (
                    <button
                      key={String(opt.value)}
                      ref={i === 0 ? firstOptionRef : undefined}
                      type="button"
                      onClick={() => onChange(opt.value)}
                      aria-label={opt.label}
                      style={{ transform: `scale(${scale})` }}
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background min-[400px]:h-10 min-[400px]:w-10 sm:h-11 sm:w-11 md:h-12 md:w-12",
                        selectedStyle
                      )}
                    >
                      {selected ? (
                        <svg className="h-4 w-4 min-[400px]:h-5 min-[400px]:w-5 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-sm font-medium tabular-nums min-[400px]:text-base sm:text-base md:text-lg">
                          {i + 1}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              <span className="w-14 shrink-0 text-right text-xs font-medium text-muted-foreground sm:w-28 sm:text-base">
                {rightLabel}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5" aria-hidden="true">
              Press 1–{n} to select
            </p>
          </div>
        </div>
      );
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
      const num = parseInt(e.key, 10);
      if (!Number.isNaN(num) && num >= 1 && num <= options.length) {
        e.preventDefault();
        onChange(options[num - 1].value);
      }
    };
    return (
      <div
        className="space-y-6"
        onKeyDownCapture={handleKeyDown}
      >
        <h2 className="text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
          {question.text}
        </h2>
        <div className="flex flex-col gap-3">
          {options.map((opt, i) => (
            <LikertOption
              key={String(opt.value)}
              option={opt}
              selected={value === opt.value}
              onSelect={() => onChange(opt.value)}
              ref={i === 0 ? firstOptionRef : undefined}
            />
          ))}
        </div>
      </div>
    );
  }
);

const LikertOption = forwardRef<
  HTMLButtonElement,
  {
    option: QuestionOption;
    selected: boolean;
    onSelect: () => void;
  }
>(function LikertOption({ option, selected, onSelect }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onSelect}
      className={cn(
        "flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all",
        selected
          ? "border-primary bg-primary/8 text-primary"
          : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-muted/50"
      )}
    >
      <span
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
          selected ? "border-primary bg-primary" : "border-test-bubble-border"
        )}
      >
        {selected && (
          <span className="h-2 w-2 rounded-full bg-primary-foreground" />
        )}
      </span>
      <span>{option.label}</span>
    </button>
  );
});

/* --- Multiple Choice --- */

const MultipleChoiceQuestion = forwardRef<TestQuestionRef, TestQuestionProps>(
  function MultipleChoiceQuestion({ question, value, onChange, autoFocus }, ref) {
    const options = question.options ?? [];
    const firstOptionRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => ({
      focusFirstOption: () => firstOptionRef.current?.focus(),
    }));
    useLayoutEffect(() => {
      if (autoFocus) {
        const t = setTimeout(() => firstOptionRef.current?.focus(), 50);
        return () => clearTimeout(t);
      }
    }, [autoFocus]);
    const handleKeyDown = (e: React.KeyboardEvent) => {
      const num = parseInt(e.key, 10);
      if (!Number.isNaN(num) && num >= 1 && num <= options.length) {
        e.preventDefault();
        onChange(options[num - 1].value);
      }
    };
    return (
      <div
        className="space-y-6"
        onKeyDownCapture={handleKeyDown}
      >
        <h2 className="text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
          {question.text}
        </h2>
        <div className="flex flex-col gap-3">
          {options.map((opt, i) => (
            <button
              key={String(opt.value)}
              ref={i === 0 ? firstOptionRef : undefined}
              type="button"
              onClick={() => onChange(opt.value)}
              className={cn(
                "rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all",
                value === opt.value
                  ? "border-primary bg-primary/8 text-primary"
                  : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-muted/50"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    );
  }
);

/* --- Forced Choice (binary A/B) --- */

const ForcedChoiceQuestion = forwardRef<TestQuestionRef, TestQuestionProps>(
  function ForcedChoiceQuestion({ question, value, onChange, autoFocus }, ref) {
    const options = question.options ?? [];
    const firstOptionRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => ({
      focusFirstOption: () => firstOptionRef.current?.focus(),
    }));
    useLayoutEffect(() => {
      if (autoFocus) {
        const t = setTimeout(() => firstOptionRef.current?.focus(), 50);
        return () => clearTimeout(t);
      }
    }, [autoFocus]);
    const handleKeyDown = (e: React.KeyboardEvent) => {
      const num = parseInt(e.key, 10);
      if (!Number.isNaN(num) && num >= 1 && num <= options.length) {
        e.preventDefault();
        onChange(options[num - 1].value);
      }
    };
    return (
      <div
        className="space-y-6"
        onKeyDownCapture={handleKeyDown}
      >
        <h2 className="text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
          {question.text}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {options.map((opt, i) => (
            <button
              key={String(opt.value)}
              ref={i === 0 ? firstOptionRef : undefined}
              type="button"
              onClick={() => onChange(opt.value)}
              className={cn(
                "flex items-center gap-3 rounded-xl border px-4 py-4 text-left text-sm font-medium transition-all",
                value === opt.value
                  ? "border-primary bg-primary/8 text-primary"
                  : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-muted/50"
              )}
            >
              <span className="flex-1">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }
);

/* --- Text Input --- */

function TextInputQuestion({ question, value, onChange }: TestQuestionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
        {question.text}
      </h2>
      <input
        type="text"
        value={String(value ?? "")}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        placeholder="Type your answer..."
      />
    </div>
  );
}

/* --- Date Input --- */

function DateInputQuestion({ question, value, onChange }: TestQuestionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
        {question.text}
      </h2>
      <input
        type="date"
        value={String(value ?? "")}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </div>
  );
}

/* --- Number Input --- */

function NumberInputQuestion({ question, value, onChange }: TestQuestionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
        {question.text}
      </h2>
      <input
        type="number"
        value={String(value ?? "")}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        placeholder="Enter a number..."
      />
    </div>
  );
}
