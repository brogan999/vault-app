"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface DailyBriefWidgetProps {
  brief?: string;
}

export function DailyBriefWidget({ brief }: DailyBriefWidgetProps) {
  const defaultBrief =
    "Your daily brief will appear here once you've uploaded some data and started journaling.";

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          <CardTitle>Daily Brief</CardTitle>
        </div>
        <CardDescription>Cosmic Weather vs Baseline Mood</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {brief || defaultBrief}
        </p>
      </CardContent>
    </Card>
  );
}