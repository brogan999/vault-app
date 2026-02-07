"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
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
}

export const TestQuestion = forwardRef<TestQuestionRef | null, TestQuestionProps>(
  function TestQuestion({ question, value, onChange, variant = "inline" }, ref) {
    switch (question.type) {
      case "likert-5":
      case "likert-7":
        return (
          <LikertQuestion
            question={question}
            value={value}
            onChange={onChange}
            variant={variant}
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
            ref={ref}
          />
        );
      case "forced-choice":
        return (
          <ForcedChoiceQuestion
            question={question}
            value={value}
            onChange={onChange}
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

const LikertQuestion = forwardRef<TestQuestionRef, TestQuestionProps & { variant?: "inline" | "stacked" }>(
  function LikertQuestion({ question, value, onChange, variant = "inline" }, ref) {
    const options = question.options ?? [];
    const firstOptionRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(ref, () => ({
      focusFirstOption: () => {
        firstOptionRef.current?.focus();
      },
    }));

    if (variant === "inline") {
      // 16p style: Agree (left) to Disagree (right); show options reversed so Strongly Agree is left
      const reversed = [...options].reverse();
      const leftLabel = options[options.length - 1]?.label ?? "Agree";
      const rightLabel = options[0]?.label ?? "Disagree";
      const n = reversed.length;
      return (
        <div className="space-y-5">
          <h2 className="text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
            {question.text}
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="w-28 shrink-0 text-left text-sm font-medium text-emerald-600 dark:text-emerald-400 sm:text-base">
                {leftLabel}
              </span>
              <div className="flex flex-1 justify-between gap-1">
                {reversed.map((opt, i) => {
                  const selected = value === opt.value;
                  const isAgreeSide = n >= 7 ? i <= 2 : i <= 1;
                  const isDisagreeSide = n >= 7 ? i >= 4 : i >= n - 2;
                  const isNeutral = n >= 7 && i === 3;
                  const selectedStyle = selected
                    ? isAgreeSide
                      ? "border-emerald-500 bg-emerald-500 text-white"
                      : isDisagreeSide
                        ? "border-violet-500 bg-violet-500 text-white"
                        : isNeutral
                          ? "border-muted-foreground/50 bg-muted text-foreground"
                          : "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card hover:border-primary/40 hover:bg-muted/50";
                  return (
                    <button
                      key={String(opt.value)}
                      ref={i === 0 ? firstOptionRef : undefined}
                      type="button"
                      onClick={() => onChange(opt.value)}
                      aria-label={opt.label}
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 transition-colors sm:h-12 sm:w-12",
                        selectedStyle
                      )}
                    >
                      {selected ? (
                        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : null}
                    </button>
                  );
                })}
              </div>
              <span className="w-28 shrink-0 text-right text-sm font-medium text-violet-600 dark:text-violet-400 sm:text-base">
                {rightLabel}
              </span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
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
          ? "border-primary bg-primary/8 text-primary shadow-sm"
          : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-muted/50"
      )}
    >
      <span
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
          selected ? "border-primary bg-primary" : "border-muted-foreground/30"
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
  function MultipleChoiceQuestion({ question, value, onChange }, ref) {
    const options = question.options ?? [];
    const firstOptionRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => ({
      focusFirstOption: () => firstOptionRef.current?.focus(),
    }));

    return (
      <div className="space-y-6">
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
                  ? "border-primary bg-primary/8 text-primary shadow-sm"
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
  function ForcedChoiceQuestion({ question, value, onChange }, ref) {
    const options = question.options ?? [];
    const firstOptionRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => ({
      focusFirstOption: () => firstOptionRef.current?.focus(),
    }));

    return (
      <div className="space-y-6">
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
                  ? "border-primary bg-primary/8 text-primary shadow-sm"
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
