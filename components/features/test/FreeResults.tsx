"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { TestScores, TestInterpretation } from "@/lib/tests/types";

interface FreeResultsProps {
  testTitle: string;
  scores: TestScores;
  interpretation: TestInterpretation | null;
  /** Optional: from post-test collect; used for avatar in results header */
  gender?: string | null;
}

export function FreeResults({ testTitle, scores, interpretation, gender }: FreeResultsProps) {
  const interp = interpretation ?? { summary: "", dimensionDetails: [], tips: [] };
  const hasTypeAndDimensions = scores?.typeCode && (scores.dimensions?.length ?? 0) > 0;
  const avatarInitial = gender
    ? gender.toLowerCase() === "male"
      ? "M"
      : gender.toLowerCase() === "female"
        ? "F"
        : "O"
    : null;

  return (
    <div className="space-y-6">
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-3">
          {avatarInitial && (
            <Avatar className="h-12 w-12 rounded-full border-2 border-primary/20">
              <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                {avatarInitial}
              </AvatarFallback>
            </Avatar>
          )}
          <h1 className="text-2xl font-medium font-serif text-foreground md:text-3xl">
            Your Results
          </h1>
        </div>
        <p className="text-sm text-muted-foreground">{testTitle}</p>
        {!hasTypeAndDimensions && scores?.typeLabel && (
          <div className="inline-flex items-center gap-2">
            <Badge variant="secondary" className="px-4 py-1.5 text-base font-semibold rounded-xl">
              {scores.typeLabel}
            </Badge>
          </div>
        )}
        {scores?.overall !== undefined && !hasTypeAndDimensions && (
          <p className="text-4xl font-medium font-serif text-primary">{scores.overall}%</p>
        )}
      </div>

      {/* Continuous scores first for type-based tests (psychometric standard) */}
      {(scores.dimensions?.length ?? 0) > 0 && (
        <Card className="border-0 rounded-2xl">
        <CardHeader className="pb-2">
          <h2 className="text-sm font-semibold text-foreground">
            {hasTypeAndDimensions ? "Your spectrum (continuous scores)" : "Dimension Scores"}
          </h2>
        </CardHeader>
        <CardContent className="space-y-4">
          {(scores.dimensions ?? []).map((dim) => (
            <div key={dim.dimensionId} className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">{dim.label}</span>
                <span className="text-muted-foreground">{dim.score}%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
                  style={{ width: `${dim.score}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground">{dim.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
      )}

      {/* Type/category after continuous scores */}
      {hasTypeAndDimensions && scores?.typeLabel && (
        <div className="text-center">
          <p className="text-xs text-muted-foreground mb-1">Your type</p>
          <Badge variant="secondary" className="px-4 py-1.5 text-base font-semibold rounded-xl">
            {scores.typeLabel}
          </Badge>
        </div>
      )}

      {/* Summary */}
      <Card className="border-0 rounded-2xl">
        <CardHeader className="pb-2">
          <h2 className="text-sm font-semibold text-foreground">Summary</h2>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {interp.summary || "Your results have been saved."}
          </p>
        </CardContent>
      </Card>

      {interp.dimensionDetails.length > 0 && (
        <Card className="border-0 rounded-2xl">
          <CardHeader className="pb-2">
            <h2 className="text-sm font-semibold text-foreground">Key Insights</h2>
          </CardHeader>
          <CardContent className="space-y-3">
            {interp.dimensionDetails.slice(0, 3).map((detail) => (
              <p key={detail.dimensionId} className="text-sm leading-relaxed text-muted-foreground">
                {detail.text}
              </p>
            ))}
            {interp.dimensionDetails.length > 3 && (
              <p className="text-xs italic text-muted-foreground/70">
                + {interp.dimensionDetails.length - 3} more insights available in the premium report
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {interp.tips && interp.tips.length > 0 && (
        <Card className="border-0 rounded-2xl">
          <CardHeader className="pb-2">
            <h2 className="text-sm font-semibold text-foreground">Growth Tip</h2>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {interp.tips[0]}
            </p>
            {interp.tips.length > 1 && (
              <p className="mt-2 text-xs italic text-muted-foreground/70">
                + {interp.tips.length - 1} more recommendations in the premium report
              </p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
