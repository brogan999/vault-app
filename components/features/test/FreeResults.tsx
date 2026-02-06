"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { TestScores, TestInterpretation } from "@/lib/tests/types";

interface FreeResultsProps {
  testTitle: string;
  scores: TestScores;
  interpretation: TestInterpretation | null;
}

export function FreeResults({ testTitle, scores, interpretation }: FreeResultsProps) {
  const interp = interpretation ?? { summary: "", dimensionDetails: [], tips: [] };
  return (
    <div className="space-y-6">
      <div className="text-center space-y-3">
        <h1 className="text-2xl font-bold font-serif text-foreground md:text-3xl">
          Your Results
        </h1>
        <p className="text-sm text-muted-foreground">{testTitle}</p>
        {scores?.typeLabel && (
          <div className="inline-flex items-center gap-2">
            <Badge variant="secondary" className="px-4 py-1.5 text-base font-semibold rounded-xl">
              {scores.typeLabel}
            </Badge>
          </div>
        )}
        {scores?.overall !== undefined && (
          <p className="text-4xl font-bold font-serif text-primary">{scores.overall}%</p>
        )}
      </div>

      {/* Summary */}
      <Card className="border-0 shadow-sm rounded-2xl">
        <CardHeader className="pb-2">
          <h2 className="text-sm font-semibold text-foreground">Summary</h2>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {interp.summary || "Your results have been saved."}
          </p>
        </CardContent>
      </Card>

      {/* Dimension scores bar chart */}
      <Card className="border-0 shadow-sm rounded-2xl">
        <CardHeader className="pb-2">
          <h2 className="text-sm font-semibold text-foreground">Dimension Scores</h2>
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

      {interp.dimensionDetails.length > 0 && (
        <Card className="border-0 shadow-sm rounded-2xl">
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
        <Card className="border-0 shadow-sm rounded-2xl">
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
