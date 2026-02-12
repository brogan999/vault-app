"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Zap, Heart, CloudRain } from "lucide-react";

const traitMeta = [
  { key: "openness", name: "Openness", icon: Brain, description: "Curious, creative, open to new experiences" },
  { key: "conscientiousness", name: "Conscientiousness", icon: Target, description: "Organized, dependable, goal-oriented" },
  { key: "extraversion", name: "Extraversion", icon: Zap, description: "Balanced between social and solitary energy" },
  { key: "agreeableness", name: "Agreeableness", icon: Heart, description: "Cooperative, empathetic, warm-hearted" },
  { key: "neuroticism", name: "Neuroticism", icon: CloudRain, description: "Emotionally stable, calm under pressure" },
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
            className="border-0 rounded-2xl overflow-hidden border-l-4 border-l-primary"
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                  <trait.icon className="h-4 w-4 text-foreground" />
                </div>
                <span className="text-2xl font-medium font-serif text-foreground">
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
