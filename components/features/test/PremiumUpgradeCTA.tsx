"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, FileText, BarChart3, Lightbulb, Download, Check } from "lucide-react";
import { toast } from "sonner";

interface PremiumUpgradeCTAProps {
  testTitle: string;
  price: string | null;
  isPremium: boolean;
  attemptId: string;
  onPurchase: () => Promise<{ url?: string | null } | void>;
  onDownload: () => Promise<void>;
}

const premiumFeatures = [
  { icon: BarChart3, label: "Detailed dimension breakdown with percentile rankings" },
  { icon: Lightbulb, label: "Personalised interpretation for every dimension" },
  { icon: FileText, label: "Actionable growth recommendations" },
  { icon: Download, label: "Downloadable PDF report" },
];

export function PremiumUpgradeCTA({
  testTitle,
  price,
  isPremium,
  onPurchase,
  onDownload,
}: PremiumUpgradeCTAProps) {
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    setLoading(true);
    try {
      const result = await onPurchase();
      if (result?.url) {
        window.location.href = result.url;
      }
    } catch {
      toast.error("Failed to initiate purchase. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    setLoading(true);
    try {
      await onDownload();
    } catch {
      toast.error("Failed to generate report. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (isPremium) {
    return (
      <Card className="border-0 shadow-sm rounded-2xl bg-primary/5 border-primary/10">
        <CardContent className="p-6 text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Crown className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Premium Report Unlocked</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Your full {testTitle} report is ready to download.
          </p>
          <Button
            onClick={handleDownload}
            disabled={loading}
            className="gap-2 rounded-xl"
          >
            <Download className="h-4 w-4" />
            {loading ? "Generating..." : "Download PDF Report"}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-sm rounded-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
        <div className="flex items-center gap-2 text-primary-foreground">
          <Crown className="h-5 w-5" />
          <h3 className="font-semibold">Unlock Your Full Report</h3>
        </div>
        <p className="mt-1 text-sm text-primary-foreground/80">
          Get the complete {testTitle} analysis with actionable insights.
        </p>
      </div>
      <CardContent className="p-6 space-y-4">
        <ul className="space-y-3">
          {premiumFeatures.map((feature) => (
            <li key={feature.label} className="flex items-start gap-3">
              <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <span className="text-sm text-muted-foreground">{feature.label}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-2">
          <div>
            {price ? (
              <p className="text-2xl font-bold font-serif text-foreground">{price}</p>
            ) : (
              <p className="text-sm font-medium text-primary">Free</p>
            )}
            <p className="text-xs text-muted-foreground">One-time payment</p>
          </div>
          <Button
            onClick={handlePurchase}
            disabled={loading}
            className="gap-2 rounded-xl px-6"
          >
            <Crown className="h-4 w-4" />
            {loading ? "Processing..." : price ? `Upgrade for ${price}` : "Get Full Report"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
