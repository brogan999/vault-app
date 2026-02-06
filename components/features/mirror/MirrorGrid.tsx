"use client";

import { useTranslations } from "next-intl";
import { ConstellationWidget } from "./ConstellationWidget";
import { VoiceJournalWidget } from "./VoiceJournalWidget";
import { QuickStatsWidget } from "./QuickStatsWidget";
import { PersonalitySnapshotWidget } from "./PersonalitySnapshotWidget";
import { EngagementGrid } from "./EngagementGrid";
import { MoodTimeline } from "./MoodTimeline";
import { GrowthMomentum } from "./GrowthMomentum";
import type { ActivitySummary } from "@/app/actions/activity";

interface MirrorGridProps {
  profile: { big5Scores?: unknown; astrologyMeta?: unknown } | null;
  journals: unknown[];
  stats: {
    totalDocuments?: number;
    totalJournalEntries?: number;
    totalChatSessions?: number;
    testsCompleted?: number;
  };
  activity: ActivitySummary;
}

export function MirrorGrid({ profile, journals, stats, activity }: MirrorGridProps) {
  const t = useTranslations("mirror");

  return (
    <div className="flex flex-col gap-6">
      {/* Quick Stats */}
      <section aria-label="Quick statistics">
        <QuickStatsWidget
          journals={journals}
          testsCompleted={stats.testsCompleted ?? 0}
          totalJournalEntries={stats.totalJournalEntries ?? 0}
          totalChatSessions={stats.totalChatSessions ?? 0}
          currentStreak={activity.currentStreak ?? 0}
        />
      </section>

      {/* Personality Trait Snapshot Cards */}
      <section aria-label="Big 5 personality snapshot">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
          {t("personalitySnapshot")}
        </h2>
        <p className="text-xs text-muted-foreground mb-3 max-w-xl">
          {t("personalitySnapshotDescription")}
        </p>
        <PersonalitySnapshotWidget
          big5Scores={profile?.big5Scores as Record<string, number> | undefined}
        />
      </section>

      {/* Radar / personality constellation */}
      <section aria-label="Personality details">
        <ConstellationWidget
          big5Scores={profile?.big5Scores as any}
          astrologyMeta={profile?.astrologyMeta}
        />
      </section>

      {/* Voice / mood journal */}
      <section aria-label="Journal">
        <VoiceJournalWidget
          lastEntry={journals[0] as any}
          recentJournals={journals as any[]}
        />
      </section>

      {/* Engagement heatmap (full width) */}
      <section aria-label="Activity engagement">
        <EngagementGrid daily={activity.daily} />
      </section>

      {/* Two column grid: Mood Timeline + Growth Momentum */}
      <section
        className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        aria-label="Mood and growth"
      >
        <MoodTimeline moods={activity.moods} />
        <GrowthMomentum
          currentStreak={activity.currentStreak}
          longestStreak={activity.longestStreak}
          activeThisWeek={activity.activeThisWeek}
          activeThisMonth={activity.activeThisMonth}
        />
      </section>
    </div>
  );
}
