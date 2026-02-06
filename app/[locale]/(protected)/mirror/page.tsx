import { getTranslations } from "next-intl/server";
import { getDashboardData } from "@/app/actions/dashboard";
import { getActivitySummary } from "@/app/actions/activity";
import { MirrorGrid } from "@/components/features/mirror/MirrorGrid";

export default async function MirrorPage() {
  const [t, data, activity] = await Promise.all([
    getTranslations("mirror"),
    getDashboardData(),
    getActivitySummary(),
  ]);

  return (
    <>
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-foreground font-serif lg:text-3xl text-balance">
          {t("greeting")}
        </h1>
        <p className="text-muted-foreground mt-1 leading-relaxed">
          {t("description")}
        </p>
      </header>

      <MirrorGrid
        profile={data.profile}
        journals={data.journals}
        stats={data.stats}
        activity={activity}
      />
    </>
  );
}
