"use client";

import { VoiceJournalWidget } from "./VoiceJournalWidget";
import { QuickStatsWidget } from "./QuickStatsWidget";
import { TestsSnapshotSection } from "./TestsSnapshotSection";
import { EngagementGrid } from "./EngagementGrid";
import { MoodTimeline } from "./MoodTimeline";
import { GrowthMomentum } from "./GrowthMomentum";
import type { ActivitySummary } from "@/app/actions/activity";
import type { TestSnapshotItem } from "@/app/actions/mirror";

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
  testSnapshots: TestSnapshotItem[];
}

export function MirrorGrid({ profile: _profile, journals, stats, activity, testSnapshots }: MirrorGridProps) {
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

      {/* Full snapshot of all tests (with category filter) */}
      <div className="border-t border-border pt-6">
        <TestsSnapshotSection snapshots={testSnapshots} />
      </div>

      {/* Voice / mood journal */}
      <section className="border-t border-border pt-6" aria-label="Journal">
        <VoiceJournalWidget
          lastEntry={journals[0] as any}
          recentJournals={journals as any[]}
        />
      </section>

      {/* Engagement heatmap (full width) */}
      <section className="border-t border-border pt-6" aria-label="Activity engagement">
        <EngagementGrid daily={activity.daily} />
      </section>

      {/* Two column grid: Mood Timeline + Growth Momentum */}
      <section
        className="grid grid-cols-1 gap-6 lg:grid-cols-2 border-t border-border pt-6"
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
