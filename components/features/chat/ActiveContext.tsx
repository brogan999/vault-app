"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Paperclip, Plus } from "lucide-react";

interface ActiveContextProps {
  sources?: string[];
  onAddDocument?: () => void;
  referenceCount?: number;
}

export function ActiveContext({
  sources = [],
  onAddDocument,
  referenceCount = 0,
}: ActiveContextProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Active Context</CardTitle>
        <CardDescription>
          {sources.length > 0
            ? "The AI is referencing these sources"
            : referenceCount > 0
            ? `${referenceCount} document${referenceCount !== 1 ? "s" : ""} queued for next message`
            : "Add documents to give the AI context about you"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {sources.length > 0 ? (
          sources.map((source, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-2 border rounded text-sm"
            >
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span className="truncate">{source}</span>
            </div>
          ))
        ) : (
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground">
              Upload personality tests, journal entries, or other data in the Vault, then attach them here so the AI can reference them.
            </p>
            {onAddDocument && (
              <Button
                variant="outline"
                size="sm"
                className="w-full gap-2"
                onClick={onAddDocument}
              >
                <Paperclip className="h-3.5 w-3.5" />
                Attach Document
              </Button>
            )}
          </div>
        )}

        {sources.length > 0 && onAddDocument && (
          <Button
            variant="ghost"
            size="sm"
            className="w-full gap-2 mt-2"
            onClick={onAddDocument}
          >
            <Plus className="h-3.5 w-3.5" />
            Add More
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
