"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cloud, Calendar, FileText, ExternalLink, Loader2 } from "lucide-react";
import {
  getUserIntegrations,
  disconnectIntegration,
  toggleIntegration,
  type IntegrationRecord,
} from "@/app/actions/integrations";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export function IntegrationsPanel() {
  const t = useTranslations("integrations");
  const tCommon = useTranslations("common");

  const PROVIDERS = [
    {
      id: "google_drive",
      label: t("googleDrive"),
      description: t("googleDriveDesc"),
      icon: Cloud,
      authUrl: "/api/integrations/google/auth?provider=google_drive",
    },
    {
      id: "google_calendar",
      label: t("googleCalendar"),
      description: t("googleCalendarDesc"),
      icon: Calendar,
      authUrl: "/api/integrations/google/auth?provider=google_calendar",
    },
    {
      id: "notes",
      label: t("notesApp"),
      description: t("notesAppDesc"),
      icon: FileText,
      authUrl: null as string | null, // not yet available
    },
  ];
  const [integrations, setIntegrations] = useState<IntegrationRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [toggling, setToggling] = useState<string | null>(null);

  useEffect(() => {
    getUserIntegrations()
      .then(setIntegrations)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const getIntegration = (provider: string) =>
    integrations.find((i) => i.provider === provider);

  const handleConnect = (authUrl: string) => {
    window.location.href = authUrl;
  };

  const handleDisconnect = async (provider: string) => {
    setToggling(provider);
    try {
      await disconnectIntegration(provider);
      setIntegrations((prev) => prev.filter((i) => i.provider !== provider));
      toast.success("Integration disconnected");
    } catch {
      toast.error("Failed to disconnect");
    } finally {
      setToggling(null);
    }
  };

  const handleToggle = async (provider: string, enabled: boolean) => {
    setToggling(provider);
    try {
      await toggleIntegration(provider, enabled);
      setIntegrations((prev) =>
        prev.map((i) => (i.provider === provider ? { ...i, enabled } : i))
      );
    } catch {
      toast.error(t("updateFailed"));
    } finally {
      setToggling(null);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Integrations</CardTitle>
        <CardDescription>
          Connect external services to automatically sync your data into Anima
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {PROVIDERS.map((provider) => {
          const integration = getIntegration(provider.id);
          const isConnected = !!integration;
          const Icon = provider.icon;
          const isToggling = toggling === provider.id;

          return (
            <div
              key={provider.id}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3 min-w-0">
                <Icon className="h-5 w-5 shrink-0" />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <Label htmlFor={provider.id}>{provider.label}</Label>
                    {isConnected && (
                      <Badge variant="outline" className="text-[10px]">
                        {t("connected")}
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground truncate">
                    {provider.description}
                  </p>
                  {integration?.lastSyncAt && (
                    <p className="text-[10px] text-muted-foreground">
                      Last synced: {new Date(integration.lastSyncAt).toLocaleString()}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {isConnected ? (
                  <>
                    <Switch
                      id={provider.id}
                      checked={integration.enabled}
                      onCheckedChange={(v) => handleToggle(provider.id, v)}
                      disabled={isToggling}
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDisconnect(provider.id)}
                      disabled={isToggling}
                      className="text-xs text-muted-foreground"
                    >
                      {isToggling ? (
                        <Loader2 className="h-3 w-3 animate-spin" />
                      ) : (
                        t("disconnect")
                      )}
                    </Button>
                  </>
                ) : provider.authUrl ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleConnect(provider.authUrl!)}
                    disabled={loading}
                    className="gap-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                    {t("connect")}
                  </Button>
                ) : (
                  <Badge variant="secondary" className="text-xs">
                    {tCommon("comingSoon")}
                  </Badge>
                )}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
