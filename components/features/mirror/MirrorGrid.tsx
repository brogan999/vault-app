"use client";

import { useState, useCallback, useEffect } from "react";
import { ConstellationWidget } from "./ConstellationWidget";
import { PulseWidget } from "./PulseWidget";
import { DailyBriefWidget } from "./DailyBriefWidget";
import { VoiceJournalWidget } from "./VoiceJournalWidget";
import { TrendsWidget } from "./TrendsWidget";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

const DEFAULT_ORDER = ["constellation", "trends", "voiceJournal", "pulse", "dailyBrief"] as const;
const STORAGE_KEY = "mirror-widget-order";
const WIDGET_SPAN: Record<string, string> = {
  constellation: "lg:col-span-2",
  trends: "lg:col-span-2",
  voiceJournal: "",
  pulse: "lg:col-span-2",
  dailyBrief: "",
};

type WidgetId = (typeof DEFAULT_ORDER)[number];

interface MirrorGridProps {
  profile: { big5Scores?: unknown; astrologyMeta?: unknown } | null;
  journals: unknown[];
}

export function MirrorGrid({ profile, journals }: MirrorGridProps) {
  const [order, setOrder] = useState<WidgetId[]>(() => {
    if (typeof window === "undefined") return [...DEFAULT_ORDER];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [...DEFAULT_ORDER];
      const parsed = JSON.parse(raw) as string[];
      const valid = parsed.filter((id) =>
        DEFAULT_ORDER.includes(id as WidgetId)
      ) as WidgetId[];
      if (valid.length === DEFAULT_ORDER.length) return valid;
    } catch {
      // ignore
    }
    return [...DEFAULT_ORDER];
  });

  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);

  const persistOrder = useCallback((next: WidgetId[]) => {
    setOrder(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  }, []);

  const handleDragStart = (e: React.DragEvent, id: string) => {
    setDraggedId(id);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDragOver = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (draggedId && draggedId !== id) setDragOverId(id);
  };

  const handleDragLeave = () => {
    setDragOverId(null);
  };

  const handleDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    setDragOverId(null);
    setDraggedId(null);
    const sourceId = e.dataTransfer.getData("text/plain") as WidgetId;
    if (!sourceId || sourceId === targetId) return;
    const idx = order.indexOf(sourceId);
    const targetIdx = order.indexOf(targetId as WidgetId);
    if (idx === -1 || targetIdx === -1) return;
    const next = [...order];
    next.splice(idx, 1);
    next.splice(targetIdx, 0, sourceId);
    persistOrder(next);
  };

  const handleDragEnd = () => {
    setDraggedId(null);
    setDragOverId(null);
  };

  // Hydrate order from localStorage after mount (SSR safe)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as string[];
      const valid = parsed.filter((id) =>
        DEFAULT_ORDER.includes(id as WidgetId)
      ) as WidgetId[];
      if (valid.length === DEFAULT_ORDER.length) setOrder(valid);
    } catch {
      // ignore
    }
  }, []);

  const renderWidget = (id: WidgetId) => {
    const span = WIDGET_SPAN[id] ?? "";
    const isDragging = draggedId === id;
    const isOver = dragOverId === id;

    const content = (
      <>
        <div
          className="absolute left-2 top-2 cursor-grab active:cursor-grabbing rounded p-1 opacity-50 hover:opacity-100 touch-none z-10"
          draggable
          onDragStart={(e) => handleDragStart(e, id)}
          onDragEnd={handleDragEnd}
          title="Drag to reorder"
        >
          <GripVertical className="h-4 w-4" />
        </div>
        {id === "constellation" && (
          <ConstellationWidget
            big5Scores={profile?.big5Scores as any}
            astrologyMeta={profile?.astrologyMeta}
          />
        )}
        {id === "voiceJournal" && (
          <VoiceJournalWidget lastEntry={journals[0] as any} />
        )}
        {id === "pulse" && (
          <PulseWidget
            journals={journals as Array<{ createdAt: string }>}
          />
        )}
        {id === "trends" && <TrendsWidget />}
        {id === "dailyBrief" && <DailyBriefWidget />}
      </>
    );

    return (
      <div
        key={id}
        className={cn(
          "relative transition-colors",
          span,
          isDragging && "opacity-50",
          isOver && "ring-2 ring-primary rounded-lg"
        )}
        onDragOver={(e) => handleDragOver(e, id)}
        onDragLeave={handleDragLeave}
        onDrop={(e) => handleDrop(e, id)}
      >
        {content}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {order.map(renderWidget)}
    </div>
  );
}
