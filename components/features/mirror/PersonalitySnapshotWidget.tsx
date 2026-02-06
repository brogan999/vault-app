"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Zap, Heart, CloudRain } from "lucide-react";

const traitMeta = [
  {
    key: "openness",
    name: "Openness",
    color: "#8b5cf6",
    bgColor: "rgba(139, 92, 246, 0.08)",
    borderColor: "rgba(139, 92, 246, 0.2)",
    icon: Brain,
    description: "Curious, creative, open to new experiences",
  },
  {
    key: "conscientiousness",
    name: "Conscientiousness",
    color: "#0d9488",
    bgColor: "rgba(13, 148, 136, 0.08)",
    borderColor: "rgba(13, 148, 136, 0.2)",
    icon: Target,
    description: "Organized, dependable, goal-oriented",
  },
  {
    key: "extraversion",
    name: "Extraversion",
    color: "#d97706",
    bgColor: "rgba(217, 119, 6, 0.08)",
    borderColor: "rgba(217, 119, 6, 0.2)",
    icon: Zap,
    description: "Balanced between social and solitary energy",
  },
  {
    key: "agreeableness",
    name: "Agreeableness",
    color: "#16a34a",
    bgColor: "rgba(22, 163, 74, 0.08)",
    borderColor: "rgba(22, 163, 74, 0.2)",
    icon: Heart,
    description: "Cooperative, empathetic, warm-hearted",
  },
  {
    key: "neuroticism",
    name: "Neuroticism",
    color: "#e11d48",
    bgColor: "rgba(225, 29, 72, 0.08)",
    borderColor: "rgba(225, 29, 72, 0.2)",
    icon: CloudRain,
    description: "Emotionally stable, calm under pressure",
  },
];

interface PersonalitySnapshotWidgetProps {
  big5Scores?: Record<string, number>;
}

export function PersonalitySnapshotWidget({
  big5Scores,
}: PersonalitySnapshotWidgetProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {traitMeta.map((trait) => {
        const score = big5Scores?.[trait.key];
        return (
          <Card
            key={trait.name}
            className="border-0 shadow-sm rounded-2xl overflow-hidden"
            style={{ borderLeft: `3px solid ${trait.color}` }}
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{ backgroundColor: trait.bgColor }}
                >
                  <trait.icon
                    className="h-4 w-4"
                    style={{ color: trait.color }}
                  />
                </div>
                <span
                  className="text-2xl font-bold font-serif"
                  style={{ color: trait.color }}
                >
                  {score != null ? score : "–"}
                </span>
              </div>
              <p className="text-sm font-semibold text-foreground">
                {trait.name}
              </p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {trait.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
