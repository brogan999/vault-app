"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Waves } from "lucide-react";
import { VoiceRecorder } from "@/components/features/journal/VoiceRecorder";
import Link from "next/link";

interface VoiceJournalWidgetProps {
  lastEntry?: {
    id: string;
    createdAt: string;
  };
}

export function VoiceJournalWidget({ lastEntry }: VoiceJournalWidgetProps) {
  const [showRecorder, setShowRecorder] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Voice Journal</CardTitle>
        <CardDescription>Quick record your thoughts</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {showRecorder ? (
          <div className="space-y-3">
            <VoiceRecorder />
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => setShowRecorder(false)}
            >
              Cancel
            </Button>
          </div>
        ) : (
          <Button
            className="w-full"
            size="lg"
            onClick={() => setShowRecorder(true)}
          >
            <Mic className="h-4 w-4 mr-2" />
            Record Entry
          </Button>
        )}

        {lastEntry && !showRecorder && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Waves className="h-4 w-4" />
              <span>Last entry: {new Date(lastEntry.createdAt).toLocaleDateString()}</span>
            </div>
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link href="/vault">View All Entries</Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
