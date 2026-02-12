import { getTranslations } from "next-intl/server";
import { getDashboardData } from "@/app/actions/dashboard";
import { getActivitySummary } from "@/app/actions/activity";
import { getMirrorTestSnapshots } from "@/app/actions/mirror";
import { MirrorGrid } from "@/components/features/mirror/MirrorGrid";
import { PageHeader } from "@/components/layout/PageHeader";
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
      <PageHeader
        title={t("greeting")}
        description={t("description")}
        actions={
          <Button asChild variant="outline" size="sm" className="shrink-0 gap-2 rounded-xl">
            <Link href="/store">
              <ShoppingBag className="h-4 w-4" />
              {t("upgradeCta")}
            </Link>
          </Button>
        }
      >
        <p className="text-muted-foreground text-sm">
          {t("upgradeCtaDescription")}
        </p>
      </PageHeader>

      <div className="border-t border-border pt-8" />
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
