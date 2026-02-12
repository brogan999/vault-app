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
  updateBirthData,
} from "@/app/actions/settings";
import { deleteAccount } from "@/app/actions/delete-account";
import {
  getCheckinPreferences,
  updateCheckinPreferences,
} from "@/app/actions/checkins";
import {
  getSubscriptionStatus,
  getSubscriptionDetails,
  getMessageCreditSummaryForUser,
  getUserPurchases,
  createCreditPackCheckout,
} from "@/app/actions/payments";
import { toast } from "sonner";
import { UserButton, useClerk } from "@clerk/nextjs";
import { Link } from "@/i18n/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { cn } from "@/lib/utils";
import { Bot, Compass, Heart, Sun, Moon, CreditCard, MessageCircle, Package, Trash2 } from "lucide-react";
import type { MessageCreditSummary } from "@/lib/credits";
import { PlaceAutocomplete } from "@/components/features/settings/PlaceAutocomplete";
import { getProductById } from "@/lib/products";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  const { theme, setTheme } = useThemeStore();
  const [personaPreference, setPersonaPreference] = useState<string>("balanced");
  const [checkinEnabled, setCheckinEnabled] = useState(false);
  const [checkinCadence, setCheckinCadence] = useState("weekly");
  const [checkinTime, setCheckinTime] = useState("09:00");
  const [checkinTimezone, setCheckinTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone || "America/New_York"
  );
  const [checkinSaving, setCheckinSaving] = useState(false);
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthTimeUnknown, setBirthTimeUnknown] = useState(false);
  const [birthLocation, setBirthLocation] = useState("");
  const [birthLocationLat, setBirthLocationLat] = useState<number | null>(null);
  const [birthLocationLng, setBirthLocationLng] = useState<number | null>(null);
  const [birthDataSaving, setBirthDataSaving] = useState(false);
  const [subscriptionTier, setSubscriptionTier] = useState<string>("free");
  const [subscriptionDetails, setSubscriptionDetails] = useState<{
    plan: string | null;
    status: string | null;
    currentPeriodEnd: string | null;
  } | null>(null);
  const [creditSummary, setCreditSummary] = useState<MessageCreditSummary | null>(null);
  const [purchases, setPurchases] = useState<{ id: string; productName: string; amountPaid: number; createdAt: string; status: string }[]>([]);
  const [topUpLoading, setTopUpLoading] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteConfirmChecked, setDeleteConfirmChecked] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

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
    getSubscriptionStatus().then((s) => setSubscriptionTier(s.tier)).catch(() => {});
    getSubscriptionDetails().then(setSubscriptionDetails).catch(() => {});
    getMessageCreditSummaryForUser().then(setCreditSummary).catch(() => {});
    getUserPurchases().then((data) => setPurchases(data as typeof purchases)).catch(() => {});
  }, []);

  useEffect(() => {
    getCurrentUserPreferences().then((prefs) => {
      if (prefs?.personaPreference)
        setPersonaPreference(prefs.personaPreference);
      if (prefs?.birthDate) setBirthDate(prefs.birthDate);
      if (prefs?.birthTime !== undefined && prefs.birthTime !== null) {
        if (prefs.birthTime === "unknown") setBirthTimeUnknown(true);
        else setBirthTime(prefs.birthTime);
      }
      if (prefs?.birthLocationName) setBirthLocation(prefs.birthLocationName);
      if (prefs?.birthLocationLat != null) setBirthLocationLat(prefs.birthLocationLat);
      if (prefs?.birthLocationLng != null) setBirthLocationLng(prefs.birthLocationLng);
    });
  }, []);

  const handleThemeChange = async (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    const result = await updateThemePreference(newTheme);
    if (!result.success) console.error("Error updating theme:", result.error);
  };

  const handlePersonaChange = async (persona: string) => {
    const previous = personaPreference;
    setPersonaPreference(persona);
    const result = await updatePersonaPreference(persona);
    if (result.success) {
      toast.success(t("aiPersona.personaUpdated"));
    } else {
      setPersonaPreference(previous);
      toast.error(t("aiPersona.personaFailed"));
    }
  };

  return (
    <div className="max-w-[720px] mx-auto">
      <PageHeader title={t("title")} description={t("description")} />

      {/* Settings sections */}
      <div className="flex flex-col gap-6 border-t border-border pt-8">
        {/* AI Persona */}
        <Card className="border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base font-medium font-serif">
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
        <Card className="border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base font-medium font-serif">
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

            {/* Language */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">
                {t("appearance.language")}
              </label>
              <LanguageSwitcher />
            </div>
          </CardContent>
        </Card>

        {/* Birth data (for esoteric frameworks) */}
        <Card className="border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base font-medium font-serif">
              {t("birthData.title")}
            </CardTitle>
            <CardDescription className="leading-relaxed">
              {t("birthData.description")}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="space-y-2">
              <Label htmlFor="birth-date">{t("birthData.date")}</Label>
              <Input
                id="birth-date"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="birth-time">{t("birthData.time")}</Label>
              <div className="flex gap-2 items-center">
                <Input
                  id="birth-time"
                  type="time"
                  value={birthTime}
                  onChange={(e) => setBirthTime(e.target.value)}
                  disabled={birthTimeUnknown}
                  className="rounded-xl"
                />
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    checked={birthTimeUnknown}
                    onChange={(e) => {
                      setBirthTimeUnknown(e.target.checked);
                      if (e.target.checked) setBirthTime("");
                    }}
                    className="rounded"
                  />
                  {t("birthData.timeUnknown")}
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="birth-location">{t("birthData.location")}</Label>
              <PlaceAutocomplete
                id="birth-location"
                value={birthLocation}
                onSelect={({ displayName, lat, lng }) => {
                  setBirthLocation(displayName);
                  setBirthLocationLat(lat);
                  setBirthLocationLng(lng);
                }}
                placeholder="e.g. London, New York"
                className="w-full"
              />
            </div>
            <Button
              className="rounded-xl w-fit"
              size="sm"
              onClick={async () => {
                setBirthDataSaving(true);
                try {
                  const result = await updateBirthData({
                    birthDate: birthDate || null,
                    birthTime: birthTimeUnknown ? "unknown" : (birthTime || null),
                    birthLocationName: birthLocation || null,
                    birthLocationLat: birthLocationLat ?? null,
                    birthLocationLng: birthLocationLng ?? null,
                  });
                  if (!result.success) {
                    toast.error(result.error || t("birthData.saveFailed"));
                    return;
                  }
                  toast.success(t("birthData.saved"));
                  if (result.completedTestIds?.length) {
                    const names = result.completedTestIds.map((id) => getProductById(id)?.title ?? id);
                    toast.success(
                      <span>
                        {t("birthData.completedTestsPrefix", { tests: names.join(", ") })}
                        <Link
                          href="/mirror"
                          className="font-medium underline underline-offset-2 hover:text-primary"
                        >
                          {t("birthData.viewOnMirrorLink")}
                        </Link>
                        .
                      </span>,
                      { duration: 6000 }
                    );
                  }
                } catch {
                  toast.error(t("birthData.saveFailed"));
                } finally {
                  setBirthDataSaving(false);
                }
              }}
              disabled={birthDataSaving}
            >
              {birthDataSaving ? t("checkins.saving") : t("birthData.save")}
            </Button>
          </CardContent>
        </Card>

        {/* Billing & credits */}
        <Card className="border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base font-medium font-serif flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Billing & usage
            </CardTitle>
            <CardDescription className="leading-relaxed">
              Your plan, Mirror message credits, and purchase history.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <div>
              <p className="text-sm font-medium text-foreground">
                Plan: {subscriptionTier === "pro" ? "Pro" : "Free"}
                {subscriptionDetails?.plan === "pro_annual" && " (Annual)"}
                {subscriptionDetails?.plan === "pro_monthly" && " (Monthly)"}
              </p>
              {subscriptionDetails?.status && (
                <p className="text-xs text-muted-foreground capitalize">{subscriptionDetails.status}</p>
              )}
              {subscriptionDetails?.currentPeriodEnd && (
                <p className="text-xs text-muted-foreground">
                  Renewal: {new Date(subscriptionDetails.currentPeriodEnd).toLocaleDateString()}
                </p>
              )}
              {subscriptionTier !== "pro" && (
                <Button asChild size="sm" variant="accent" className="mt-2 rounded-xl">
                  <Link href="/pricing">Upgrade to pro</Link>
                </Button>
              )}
            </div>

            {creditSummary && (
              <div>
                <p className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Mirror messages
                </p>
                {/* Note: "Mirror" is a product name, kept capitalized */}
                {creditSummary.plan === "free" ? (
                  <p className="text-xs text-muted-foreground mt-1">
                    {creditSummary.messagesRemainingToday ?? 0} remaining today (resets midnight UTC)
                  </p>
                ) : (
                  <div className="text-xs text-muted-foreground mt-1 space-y-0.5">
                    <p>{creditSummary.messagesRemaining ?? 0} remaining this month</p>
                    {creditSummary.renewalDate && (
                      <p>Renewal: {new Date(creditSummary.renewalDate).toLocaleDateString()}</p>
                    )}
                    {(creditSummary.rolloverBalance ?? 0) > 0 && (
                      <p>Rollover: {creditSummary.rolloverBalance}</p>
                    )}
                    {(creditSummary.topUpBalance ?? 0) > 0 && (
                      <p>Top-up balance: {creditSummary.topUpBalance}</p>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      className="mt-2 rounded-xl"
                      disabled={topUpLoading}
                      onClick={async () => {
                        setTopUpLoading(true);
                        try {
                          const { url } = await createCreditPackCheckout(100);
                          if (url) window.location.href = url;
                          else toast.error("Top-up not configured");
                        } catch (e) {
                          toast.error(e instanceof Error ? e.message : "Failed to start checkout");
                        } finally {
                          setTopUpLoading(false);
                        }
                      }}
                    >
                      {topUpLoading ? "Loading..." : "Buy more messages (100 for $4.99)"}
                    </Button>
                  </div>
                )}
              </div>
            )}

            {purchases.length > 0 && (
              <div>
                <p className="text-sm font-medium text-foreground flex items-center gap-2 mb-2">
                  <Package className="h-4 w-4" />
                  Recent purchases
                </p>
                {/* Sentence case: "Recent purchases" is already correct */}
                <ul className="space-y-1 text-xs text-muted-foreground">
                  {purchases.slice(0, 10).map((p) => (
                    <li key={p.id} className="flex justify-between">
                      <span>{p.productName}</span>
                      <span>${(p.amountPaid / 100).toFixed(2)} · {new Date(p.createdAt).toLocaleDateString()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Proactive Check-ins */}
        <Card className="border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base font-medium font-serif">
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
                  const result = await updateCheckinPreferences({
                    enabled: checkinEnabled,
                    cadence: checkinCadence,
                    preferredTime: checkinTime,
                    timezone: checkinTimezone,
                  });
                  if (result.success) toast.success(t("checkins.preferencesSaved"));
                  else toast.error(t("checkins.preferencesFailed"));
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
        <Card className="border-0 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base font-medium font-serif">
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

        {/* Delete account */}
        <Card className="border-0 rounded-2xl border-destructive/30 bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-base font-medium font-serif flex items-center gap-2 text-destructive">
              <Trash2 className="h-4 w-4" />
              {t("account.deleteAccount")}
            </CardTitle>
            <CardDescription className="leading-relaxed">
              {t("account.deleteAccountDescription")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="destructive"
              size="sm"
              className="rounded-xl"
              onClick={() => setDeleteDialogOpen(true)}
            >
              {t("account.deleteAccountButton")}
            </Button>
          </CardContent>
        </Card>
      </div>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent showCloseButton={!deleteLoading}>
          <DialogHeader>
            <DialogTitle>{t("account.deleteAccountConfirmTitle")}</DialogTitle>
            <DialogDescription>
              {t("account.deleteAccountConfirmDescription")}
            </DialogDescription>
          </DialogHeader>
          <label className="flex items-start gap-3 cursor-pointer group mt-4">
            <input
              type="checkbox"
              checked={deleteConfirmChecked}
              onChange={(e) => setDeleteConfirmChecked(e.target.checked)}
              disabled={deleteLoading}
              className="mt-1 rounded border-border"
            />
            <span className="text-sm text-muted-foreground">
              {t("account.deleteAccountUnderstand")}
            </span>
          </label>
          <DialogFooter className="gap-2 sm:gap-0 mt-6">
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
              disabled={deleteLoading}
            >
              {t("account.deleteAccountCancel")}
            </Button>
            <Button
              variant="destructive"
              disabled={!deleteConfirmChecked || deleteLoading}
              onClick={async () => {
                setDeleteLoading(true);
                try {
                  const result = await deleteAccount();
                  if (result.success) {
                    toast.success(t("account.deleteAccountSuccess"));
                    window.location.href = "/";
                    return;
                  }
                  toast.error(result.error || t("account.deleteAccountError"));
                } catch {
                  toast.error(t("account.deleteAccountError"));
                } finally {
                  setDeleteLoading(false);
                }
              }}
            >
              {deleteLoading ? "Deleting…" : t("account.deleteAccountButton")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
