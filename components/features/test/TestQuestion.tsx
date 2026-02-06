"use client";

import { cn } from "@/lib/utils";
import type { Question, QuestionOption } from "@/lib/tests/types";

interface TestQuestionProps {
  question: Question;
  value: number | string | undefined;
  onChange: (value: number | string) => void;
}

export function TestQuestion({ question, value, onChange }: TestQuestionProps) {
  switch (question.type) {
    case "likert-5":
    case "likert-7":
      return <LikertQuestion question={question} value={value} onChange={onChange} />;
    case "multiple-choice":
    case "correct-answer":
      return <MultipleChoiceQuestion question={question} value={value} onChange={onChange} />;
    case "forced-choice":
      return <ForcedChoiceQuestion question={question} value={value} onChange={onChange} />;
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

/* --- Likert Scale --- */

function LikertQuestion({ question, value, onChange }: TestQuestionProps) {
  const options = question.options ?? [];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold leading-relaxed text-foreground md:text-xl">
        {question.text}
      </h2>
      <div className="flex flex-col gap-3">
        {options.map((opt) => (
          <LikertOption
            key={String(opt.value)}
            option={opt}
            selected={value === opt.value}
            onSelect={() => onChange(opt.value)}
          />
        ))}
      </div>
    </div>
  );
}

function LikertOption({
  option,
  selected,
  onSelect,
}: {
  option: QuestionOption;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
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
}

/* --- Multiple Choice --- */

function MultipleChoiceQuestion({ question, value, onChange }: TestQuestionProps) {
  const options = question.options ?? [];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold leading-relaxed text-foreground md:text-xl">
        {question.text}
      </h2>
      <div className="flex flex-col gap-3">
        {options.map((opt) => (
          <button
            key={String(opt.value)}
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

/* --- Forced Choice (binary A/B) --- */

function ForcedChoiceQuestion({ question, value, onChange }: TestQuestionProps) {
  const options = question.options ?? [];

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold leading-relaxed text-foreground md:text-xl">
        {question.text}
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((opt) => (
          <button
            key={String(opt.value)}
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

/* --- Text Input --- */

function TextInputQuestion({ question, value, onChange }: TestQuestionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold leading-relaxed text-foreground md:text-xl">
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
      <h2 className="text-lg font-semibold leading-relaxed text-foreground md:text-xl">
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
      <h2 className="text-lg font-semibold leading-relaxed text-foreground md:text-xl">
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
