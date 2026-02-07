"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { DropZone } from "@/components/features/vault/DropZone";
import { FileTree } from "@/components/features/vault/FileTree";
import { DocumentDetail } from "@/components/features/vault/DocumentDetail";
import { VaultStats } from "@/components/features/vault/VaultStats";
import { TestResultsList } from "@/components/features/vault/TestResultsList";
import { Collections } from "@/components/features/vault/Collections";
import { ReportsGrid } from "@/components/features/vault/ReportsGrid";
import { RecentActivity } from "@/components/features/vault/RecentActivity";
import { ExportDataButton } from "@/components/features/vault/ExportDataButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getDocumentDetail, getVaultStats, getVaultRecentActivity } from "@/app/actions/vault";
import type { VaultStatsData } from "@/app/actions/vault";
import type { VaultActivityItem } from "@/app/actions/vault";
import { Link } from "@/i18n/navigation";

/** File types where we open the original file directly instead of showing extracted text */
function shouldOpenDirectly(type: string): boolean {
  return ["pdf", "image"].includes(type);
}

function DiscoverMoreCard({
  testsCompleted,
  testsAvailable,
}: {
  testsCompleted: number;
  testsAvailable: number;
}) {
  const t = useTranslations("vault");
  const pct = testsAvailable > 0 ? Math.round((testsCompleted / testsAvailable) * 100) : 0;
  return (
    <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
      <h3 className="text-lg font-bold font-serif">{t("discoverMore")}</h3>
      <p className="text-sm mt-2 leading-relaxed opacity-90">
        {t("assessmentProgress", { count: testsCompleted, total: testsAvailable })}
      </p>
      <div className="mt-4 flex items-center gap-3">
        <div className="flex-1 h-2 rounded-full bg-primary-foreground/20">
          <div
            className="h-2 rounded-full bg-primary-foreground/80 transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="text-xs font-bold">{pct}%</span>
      </div>
      <Link
        href="/store"
        className="mt-4 w-full block rounded-xl bg-primary-foreground/15 px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/25 transition-colors text-center"
      >
        {t("browseTests")}
      </Link>
    </div>
  );
}

function VaultContent() {
  const t = useTranslations("vault");
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const [vaultStats, setVaultStats] = useState<VaultStatsData | null>(null);
  const [recentActivity, setRecentActivity] = useState<VaultActivityItem[]>([]);

  // Handle ?doc=<id> from chat citations
  useEffect(() => {
    const docId = searchParams.get("doc");
    if (docId) {
      getDocumentDetail(docId).then((doc) => {
        if (doc && doc.fileUrl && shouldOpenDirectly(doc.type)) {
          window.open(doc.fileUrl, "_blank");
          router.replace("/vault");
        } else {
          setSelectedDocId(docId);
        }
      });
    }
  }, [searchParams, router]);

  // Load vault stats and recent activity (real data)
  useEffect(() => {
    getVaultStats().then(setVaultStats);
    getVaultRecentActivity().then(setRecentActivity);
  }, []);

  const handleDocumentOpen = (
    docId: string,
    type: string,
    fileUrl: string | null
  ) => {
    if (fileUrl && shouldOpenDirectly(type)) {
      window.open(fileUrl, "_blank");
    } else {
      setSelectedDocId(docId);
    }
  };

  const handleCloseDetail = () => {
    setSelectedDocId(null);
    const docParam = searchParams.get("doc");
    if (docParam) {
      router.replace("/vault");
    }
  };

  return (
    <>
      {/* Header */}
      <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground font-serif lg:text-3xl text-balance">
            {t("title")}
          </h1>
          <p className="text-muted-foreground mt-1 leading-relaxed">
            {t("description")}
          </p>
        </div>
        <ExportDataButton />
      </header>

      {/* File Upload Zone */}
      <section className="mb-8" aria-label="File upload">
        <DropZone />
      </section>

      {/* Files Browser */}
      <section className="mb-10" aria-label="Your uploaded files">
        <FileTree onDocumentOpen={handleDocumentOpen} />
      </section>

      {/* Divider */}
      <hr className="border-border mb-8" />

      {/* Stats bar */}
      <section className="mb-6" aria-label="Vault statistics">
        <VaultStats data={vaultStats} />
      </section>

      {/* Tabbed content */}
      <Tabs defaultValue="results" className="mb-6">
        <TabsList className="rounded-xl bg-muted/60 p-1 h-auto">
          <TabsTrigger
            value="results"
            className="rounded-lg px-4 py-2 text-sm font-semibold data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm"
          >
            {t("testResults")}
          </TabsTrigger>
          <TabsTrigger
            value="collections"
            className="rounded-lg px-4 py-2 text-sm font-semibold data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm"
          >
            {t("collectionsTab")}
          </TabsTrigger>
          <TabsTrigger
            value="reports"
            className="rounded-lg px-4 py-2 text-sm font-semibold data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm"
          >
            {t("reportsTab")}
          </TabsTrigger>
        </TabsList>

        {/* Test Results tab */}
        <TabsContent value="results" className="mt-4">
          <TestResultsList />
        </TabsContent>

        {/* Collections tab */}
        <TabsContent value="collections" className="mt-4">
          <Collections />
        </TabsContent>

        {/* My Reports tab */}
        <TabsContent value="reports" className="mt-4">
          <ReportsGrid />
        </TabsContent>
      </Tabs>

      {/* Bottom section: Recent Activity + Discover CTA */}
      <section
        className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        aria-label="Activity and discovery"
      >
        <div className="lg:col-span-2">
          <RecentActivity activities={recentActivity} />
        </div>
        <div className="lg:col-span-1">
          {/* Quick action card — uses real completed/total */}
          <DiscoverMoreCard
            testsCompleted={vaultStats?.testsCompleted ?? 0}
            testsAvailable={vaultStats?.testsAvailable ?? 0}
          />
        </div>
      </section>

      <DocumentDetail documentId={selectedDocId} onClose={handleCloseDetail} />
    </>
  );
}

export default function VaultPage() {
  return (
    <Suspense>
      <VaultContent />
    </Suspense>
  );
}
