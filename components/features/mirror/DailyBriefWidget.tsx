"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCw } from "lucide-react";
import { generateDailyBrief } from "@/app/actions/daily-brief";

export function DailyBriefWidget() {
  const [brief, setBrief] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchBrief = (forceRefresh = false) => {
    const setter = forceRefresh ? setRefreshing : setLoading;
    setter(true);
    generateDailyBrief()
      .then((b) => setBrief(b))
      .catch(() => {})
      .finally(() => setter(false));
  };

  useEffect(() => {
    fetchBrief();
  }, []);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            <CardTitle>Daily Brief</CardTitle>
          </div>
          {brief && (
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={() => fetchBrief(true)}
              disabled={refreshing}
            >
              <RefreshCw
                className={`h-3.5 w-3.5 ${refreshing ? "animate-spin" : ""}`}
              />
            </Button>
          )}
        </div>
        <CardDescription>Your personalized daily insight</CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-2">
            <div className="h-3 bg-muted rounded animate-pulse w-full" />
            <div className="h-3 bg-muted rounded animate-pulse w-4/5" />
            <div className="h-3 bg-muted rounded animate-pulse w-3/5" />
          </div>
        ) : brief ? (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {brief}
          </p>
        ) : (
          <p className="text-sm text-muted-foreground">
            Upload some data and start journaling to get your personalized daily brief.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
