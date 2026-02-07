import { getTranslations } from "next-intl/server";
import { getDashboardData } from "@/app/actions/dashboard";
import { getActivitySummary } from "@/app/actions/activity";
import { getMirrorTestSnapshots } from "@/app/actions/mirror";
import { MirrorGrid } from "@/components/features/mirror/MirrorGrid";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export default async function MirrorPage() {
  const [t, data, activity, testSnapshots] = await Promise.all([
    getTranslations("mirror"),
    getDashboardData(),
    getActivitySummary(),
    getMirrorTestSnapshots(),
  ]);

  return (
    <>
      {/* Header + upgrade CTA */}
      <header className="mb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground font-serif lg:text-3xl text-balance">
              {t("greeting")}
            </h1>
            <p className="text-muted-foreground mt-1 leading-relaxed">
              {t("description")}
            </p>
          </div>
          <Button asChild variant="outline" size="sm" className="shrink-0 gap-2 rounded-xl">
            <Link href="/store">
              <ShoppingBag className="h-4 w-4" />
              {t("upgradeCta")}
            </Link>
          </Button>
        </div>
        <p className="text-muted-foreground mt-2 text-sm">
          {t("upgradeCtaDescription")}
        </p>
      </header>

      <MirrorGrid
        profile={data.profile}
        journals={data.journals}
        stats={data.stats}
        activity={activity}
        testSnapshots={testSnapshots}
      />
    </>
  );
}
