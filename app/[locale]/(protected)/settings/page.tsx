"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useThemeStore } from "@/store/theme-store";
import {
  getCurrentUserPreferences,
  updateThemePreference,
  updatePersonaPreference,
} from "@/app/actions/settings";
import {
  getCheckinPreferences,
  updateCheckinPreferences,
} from "@/app/actions/checkins";
import { toast } from "sonner";
import { UserButton, useClerk } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Bot, Compass, Heart, Sun, Moon } from "lucide-react";

function AccountSignOutButton() {
  const { signOut } = useClerk();
  const t = useTranslations("settings.account");
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => signOut({ redirectUrl: "/" })}
    >
      {t("signOut")}
    </Button>
  );
}

export default function SettingsPage() {
  const t = useTranslations("settings");
  const { theme, palette, setTheme, setPalette } = useThemeStore();
  const [personaPreference, setPersonaPreference] = useState<string>("balanced");
  const [checkinEnabled, setCheckinEnabled] = useState(false);
  const [checkinCadence, setCheckinCadence] = useState("weekly");
  const [checkinTime, setCheckinTime] = useState("09:00");
  const [checkinTimezone, setCheckinTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone || "America/New_York"
  );
  const [checkinSaving, setCheckinSaving] = useState(false);

  const colorPalettes = [
    { value: "emerald", label: t("appearance.emerald"), swatch: ["#faf9f6", "#0c8d62", "#1a7a56", "#0d5f42"] },
    { value: "neutral", label: t("appearance.neutral"), swatch: ["#f5f5f4", "#a8a29e", "#57534e", "#292524"] },
    { value: "muddy", label: t("appearance.muddy"), swatch: ["#e7e0d6", "#a39682", "#6b5c4d", "#3d3228"] },
    { value: "neon", label: t("appearance.neon"), swatch: ["#ecfccb", "#84cc16", "#22c55e", "#06b6d4"] },
    { value: "jewel", label: t("appearance.jewel"), swatch: ["#fef3c7", "#f59e0b", "#dc2626", "#7c3aed"] },
    { value: "pastel", label: t("appearance.pastel"), swatch: ["#fce7f3", "#c4b5fd", "#93c5fd", "#a7f3d0"] },
  ];

  const personas = [
    { id: "balanced", label: t("aiPersona.balanced"), description: t("aiPersona.balancedDesc"), icon: Compass },
    { id: "coach", label: t("aiPersona.directCoach"), description: t("aiPersona.directCoachDesc"), icon: Bot },
    { id: "therapist", label: t("aiPersona.empatheticTherapist"), description: t("aiPersona.empatheticTherapistDesc"), icon: Heart },
  ] as const;

  const frequencies = [
    { id: "daily", label: t("checkins.daily") },
    { id: "weekly", label: t("checkins.weekly") },
    { id: "biweekly", label: t("checkins.biweekly") },
    { id: "monthly", label: t("checkins.monthly") },
  ] as const;

  useEffect(() => {
    getCheckinPreferences().then((p) => {
      if (p) {
        setCheckinEnabled(p.enabled);
        setCheckinCadence(p.cadence);
        setCheckinTime(p.preferredTime);
        setCheckinTimezone(p.timezone);
      }
    });
  }, []);

  useEffect(() => {
    getCurrentUserPreferences().then((prefs) => {
      if (prefs?.personaPreference)
        setPersonaPreference(prefs.personaPreference);
    });
  }, []);

  const handleThemeChange = async (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    try {
      await updateThemePreference(`${newTheme}-${palette}`);
    } catch (error) {
      console.error("Error updating theme:", error);
    }
  };

  const handlePaletteChange = async (newPalette: string) => {
    setPalette(newPalette as any);
    try {
      await updateThemePreference(`${theme}-${newPalette}`);
    } catch (error) {
      console.error("Error updating palette:", error);
    }
  };

  const handlePersonaChange = async (persona: string) => {
    setPersonaPreference(persona);
    try {
      await updatePersonaPreference(persona);
      toast.success(t("aiPersona.personaUpdated"));
    } catch (error) {
      console.error("Error updating persona:", error);
      toast.error(t("aiPersona.personaFailed"));
    }
  };

  return (
    <div className="max-w-[720px] mx-auto">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-foreground font-serif lg:text-3xl text-balance">
          {t("title")}
        </h1>
        <p className="text-muted-foreground mt-1 leading-relaxed">
          {t("description")}
        </p>
      </header>

      {/* Settings sections */}
      <div className="flex flex-col gap-6">
        {/* AI Persona */}
        <Card className="border-0 shadow-sm rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base font-bold font-serif">
              {t("aiPersona.title")}
            </CardTitle>
            <CardDescription className="leading-relaxed">
              {t("aiPersona.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {personas.map((persona) => {
                const isActive = personaPreference === persona.id;
                return (
                  <button
                    key={persona.id}
                    type="button"
                    onClick={() => handlePersonaChange(persona.id)}
                    className={cn(
                      "flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-3 text-sm font-semibold transition-all",
                      isActive
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-foreground hover:border-primary/40"
                    )}
                  >
                    <persona.icon className="h-4 w-4 shrink-0" />
                    {persona.label}
                  </button>
                );
              })}
            </div>
            <div className="mt-4">
              <p className="text-xs text-muted-foreground">
                {personas.find((p) => p.id === personaPreference)?.description}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Appearance */}
        <Card className="border-0 shadow-sm rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base font-bold font-serif">
              {t("appearance.title")}
            </CardTitle>
            <CardDescription className="leading-relaxed">
              {t("appearance.description")}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            {/* Theme toggle */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">
                {t("appearance.theme")}
              </label>
              <div className="flex gap-2">
                {[
                  { id: "light" as const, label: t("appearance.light"), icon: Sun },
                  { id: "dark" as const, label: t("appearance.dark"), icon: Moon },
                ].map((themeOption) => {
                  const isActive = theme === themeOption.id;
                  return (
                    <button
                      key={themeOption.id}
                      type="button"
                      onClick={() => handleThemeChange(themeOption.id)}
                      className={cn(
                        "flex items-center gap-2 rounded-xl border-2 px-4 py-2.5 text-sm font-semibold transition-all",
                        isActive
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card text-foreground hover:border-primary/40"
                      )}
                    >
                      <themeOption.icon className="h-4 w-4" />
                      {themeOption.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Color palette */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-3 block">
                {t("appearance.colorPalette")}
              </label>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {colorPalettes.map((p) => {
                  const isActive = palette === p.value;
                  return (
                    <button
                      key={p.value}
                      type="button"
                      onClick={() => handlePaletteChange(p.value)}
                      className={cn(
                        "flex flex-col items-center gap-2 rounded-xl border-2 px-3 py-3 transition-all",
                        isActive
                          ? "border-primary bg-primary/5"
                          : "border-border bg-card hover:border-primary/40"
                      )}
                    >
                      <div className="flex gap-1">
                        {p.swatch.map((color) => (
                          <span
                            key={color}
                            className="block h-5 w-5 rounded-full border border-border/50"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <span
                        className={cn(
                          "text-xs font-semibold",
                          isActive ? "text-primary" : "text-foreground"
                        )}
                      >
                        {p.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            {/* Language */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">
                {t("appearance.language")}
              </label>
              <LanguageSwitcher />
            </div>
          </CardContent>
        </Card>

        {/* Proactive Check-ins */}
        <Card className="border-0 shadow-sm rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base font-bold font-serif">
              {t("checkins.title")}
            </CardTitle>
            <CardDescription className="leading-relaxed">
              {t("checkins.description")}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="checkin-toggle"
                className="text-sm font-medium text-foreground"
              >
                {t("checkins.enableCheckins")}
              </Label>
              <Switch
                id="checkin-toggle"
                checked={checkinEnabled}
                onCheckedChange={setCheckinEnabled}
              />
            </div>

            {checkinEnabled && (
              <>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">
                    {t("checkins.frequency")}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {frequencies.map((f) => {
                      const isActive = checkinCadence === f.id;
                      return (
                        <button
                          key={f.id}
                          type="button"
                          onClick={() => setCheckinCadence(f.id)}
                          className={cn(
                            "rounded-xl border-2 px-3 py-2 text-xs font-semibold transition-all",
                            isActive
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-card text-foreground hover:border-primary/40"
                          )}
                        >
                          {f.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkin-time">{t("checkins.preferredTime")}</Label>
                  <Input
                    id="checkin-time"
                    type="time"
                    value={checkinTime}
                    onChange={(e) => setCheckinTime(e.target.value)}
                    className="rounded-xl"
                  />
                </div>
              </>
            )}

            <Button
              className="rounded-xl w-fit"
              size="sm"
              onClick={async () => {
                setCheckinSaving(true);
                try {
                  await updateCheckinPreferences({
                    enabled: checkinEnabled,
                    cadence: checkinCadence,
                    preferredTime: checkinTime,
                    timezone: checkinTimezone,
                  });
                  toast.success(t("checkins.preferencesSaved"));
                } catch {
                  toast.error(t("checkins.preferencesFailed"));
                } finally {
                  setCheckinSaving(false);
                }
              }}
              disabled={checkinSaving}
            >
              {checkinSaving ? t("checkins.saving") : t("checkins.savePreferences")}
            </Button>
          </CardContent>
        </Card>

        {/* Account */}
        <Card className="border-0 shadow-sm rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base font-bold font-serif">
              {t("account.title")}
            </CardTitle>
            <CardDescription className="leading-relaxed">
              {t("account.description")}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <UserButton />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {t("account.management")}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t("account.avatarHint")}
                </p>
              </div>
            </div>
            <AccountSignOutButton />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
