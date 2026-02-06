"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

interface ActiveContextProps {
  sources?: string[];
}

export function ActiveContext({ sources = [] }: ActiveContextProps) {
  if (sources.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Active Context</CardTitle>
          <CardDescription>No sources referenced</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Active Context</CardTitle>
        <CardDescription>
          The AI is referencing these sources
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {sources.map((source, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-2 border rounded text-sm"
          >
            <FileText className="h-4 w-4 text-muted-foreground" />
            <span className="truncate">{source}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}