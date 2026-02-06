"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { usePrivacyStore } from "@/store/privacy-store";
import { useThemeStore } from "@/store/theme-store";
import { getCurrentUserPreferences, togglePrivacyShield, updateThemePreference, updatePersonaPreference } from "@/app/actions/settings";
import { getPsychProfile, upsertPsychProfile, type Big5Scores, type AstrologyMeta } from "@/app/actions/profile";
import { getCheckinPreferences, updateCheckinPreferences } from "@/app/actions/checkins";
import { toast } from "sonner";
import { UserButton } from "@clerk/nextjs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const colorPalettes = [
  { value: "neutral", label: "Neutral" },
  { value: "muddy", label: "Muddy" },
  { value: "neon", label: "Neon" },
  { value: "jewel", label: "Jewel" },
  { value: "pastel", label: "Pastel" },
];

const BIG5_TRAITS = [
  { key: "openness", label: "Openness" },
  { key: "conscientiousness", label: "Conscientiousness" },
  { key: "extraversion", label: "Extraversion" },
  { key: "agreeableness", label: "Agreeableness" },
  { key: "neuroticism", label: "Neuroticism" },
] as const;

export default function SettingsPage() {
  const { privacyShieldEnabled, setPrivacyShield } = usePrivacyStore();
  const { theme, palette, setTheme, setPalette } = useThemeStore();
  const [isUpdating, setIsUpdating] = useState(false);
  const [profileLoading, setProfileLoading] = useState(true);
  const [big5, setBig5] = useState<Big5Scores>({});
  const [astrology, setAstrology] = useState<AstrologyMeta>({});
  const [iqScore, setIqScore] = useState<string>("");
  const [profileSaving, setProfileSaving] = useState(false);
  const [personaPreference, setPersonaPreference] = useState<string>("balanced");
  const [checkinEnabled, setCheckinEnabled] = useState(false);
  const [checkinCadence, setCheckinCadence] = useState("weekly");
  const [checkinTime, setCheckinTime] = useState("09:00");
  const [checkinTimezone, setCheckinTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone || "America/New_York"
  );
  const [checkinSaving, setCheckinSaving] = useState(false);

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
    getPsychProfile().then((p) => {
      setProfileLoading(false);
      if (p?.big5Scores && typeof p.big5Scores === "object") {
        setBig5(p.big5Scores as Big5Scores);
      }
      if (p?.astrologyMeta && typeof p.astrologyMeta === "object") {
        setAstrology(p.astrologyMeta as AstrologyMeta);
      }
      if (p?.iqScore != null) setIqScore(String(p.iqScore));
    });
  }, []);

  useEffect(() => {
    getCurrentUserPreferences().then((prefs) => {
      if (prefs?.personaPreference) setPersonaPreference(prefs.personaPreference);
    });
  }, []);

  const handlePrivacyShieldToggle = async (enabled: boolean) => {
    setIsUpdating(true);
    try {
      await togglePrivacyShield(enabled);
      setPrivacyShield(enabled);
      toast.success(
        enabled ? "Privacy Shield enabled" : "Privacy Shield disabled"
      );
    } catch (error) {
      console.error("Error updating privacy shield:", error);
      toast.error("Failed to update privacy shield");
    } finally {
      setIsUpdating(false);
    }
  };

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
      toast.success("AI persona updated");
    } catch (error) {
      console.error("Error updating persona:", error);
      toast.error("Failed to update persona");
    }
  };

  const handleSaveProfile = async () => {
    setProfileSaving(true);
    try {
      await upsertPsychProfile({
        big5Scores: Object.keys(big5).length ? big5 : null,
        astrologyMeta: Object.keys(astrology).length ? astrology : null,
        iqScore: iqScore.trim() ? parseInt(iqScore, 10) || null : null,
      });
      toast.success("Personality profile saved");
    } catch (error) {
      console.error("Error saving profile:", error);
      toast.error("Failed to save profile");
    } finally {
      setProfileSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account and preferences
        </p>
      </div>

      {/* AI Persona */}
      <Card>
        <CardHeader>
          <CardTitle>AI Persona</CardTitle>
          <CardDescription>
            How the AI responds in Chat: balanced, direct coach, or empathetic therapist
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-2">
            {[
              { value: "balanced", label: "Balanced" },
              { value: "coach", label: "Direct Coach" },
              { value: "therapist", label: "Empathetic Therapist" },
            ].map((opt) => (
              <Button
                key={opt.value}
                variant={personaPreference === opt.value ? "default" : "outline"}
                onClick={() => handlePersonaChange(opt.value)}
                className="flex-1"
              >
                {opt.label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Privacy Shield */}
      <Card>
        <CardHeader>
          <CardTitle>Privacy Shield</CardTitle>
          <CardDescription>
            When enabled, your chat conversations will not be logged or stored
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <Label htmlFor="privacy-shield">Enable Privacy Shield</Label>
            <Switch
              id="privacy-shield"
              checked={privacyShieldEnabled}
              onCheckedChange={handlePrivacyShieldToggle}
              disabled={isUpdating}
            />
          </div>
        </CardContent>
      </Card>

      {/* Personality Profile */}
      <Card>
        <CardHeader>
          <CardTitle>Personality Profile</CardTitle>
          <CardDescription>
            Big 5 scores (0–100), astrology, and IQ. Used by the Mirror and Chat.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {profileLoading ? (
            <p className="text-sm text-muted-foreground">Loading…</p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {BIG5_TRAITS.map(({ key, label }) => (
                  <div key={key} className="space-y-2">
                    <Label htmlFor={`big5-${key}`}>{label}</Label>
                    <Input
                      id={`big5-${key}`}
                      type="number"
                      min={0}
                      max={100}
                      placeholder="0–100"
                      value={big5[key] ?? ""}
                      onChange={(e) =>
                        setBig5((prev) => ({
                          ...prev,
                          [key]: e.target.value ? parseInt(e.target.value, 10) : undefined,
                        }))
                      }
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="astrology-sun">Sun sign</Label>
                  <Input
                    id="astrology-sun"
                    placeholder="e.g. scorpio"
                    value={astrology.sun ?? ""}
                    onChange={(e) =>
                      setAstrology((prev) => ({ ...prev, sun: e.target.value || undefined }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="astrology-moon">Moon sign</Label>
                  <Input
                    id="astrology-moon"
                    placeholder="e.g. aries"
                    value={astrology.moon ?? ""}
                    onChange={(e) =>
                      setAstrology((prev) => ({ ...prev, moon: e.target.value || undefined }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="astrology-rising">Rising sign</Label>
                  <Input
                    id="astrology-rising"
                    placeholder="e.g. gemini"
                    value={astrology.rising ?? ""}
                    onChange={(e) =>
                      setAstrology((prev) => ({ ...prev, rising: e.target.value || undefined }))
                    }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="iq-score">IQ score (optional)</Label>
                <Input
                  id="iq-score"
                  type="number"
                  min={0}
                  max={200}
                  placeholder="Optional"
                  value={iqScore}
                  onChange={(e) => setIqScore(e.target.value)}
                />
              </div>
              <Button onClick={handleSaveProfile} disabled={profileSaving}>
                {profileSaving ? "Saving…" : "Save profile"}
              </Button>
            </>
          )}
        </CardContent>
      </Card>

      {/* Theme Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Customize the look and feel of the app</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Theme</Label>
            <div className="flex gap-2">
              <Button
                variant={theme === "light" ? "default" : "outline"}
                onClick={() => handleThemeChange("light")}
              >
                Light
              </Button>
              <Button
                variant={theme === "dark" ? "default" : "outline"}
                onClick={() => handleThemeChange("dark")}
              >
                Dark
              </Button>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label>Color Palette</Label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {colorPalettes.map((p) => (
                <Button
                  key={p.value}
                  variant={palette === p.value ? "default" : "outline"}
                  onClick={() => handlePaletteChange(p.value)}
                  className="w-full"
                >
                  {p.label}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Proactive Check-ins */}
      <Card>
        <CardHeader>
          <CardTitle>Proactive Check-ins</CardTitle>
          <CardDescription>
            Let the AI initiate conversations on a schedule to track your growth
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="checkin-enabled">Enable check-ins</Label>
            <Switch
              id="checkin-enabled"
              checked={checkinEnabled}
              onCheckedChange={setCheckinEnabled}
            />
          </div>
          {checkinEnabled && (
            <>
              <div className="space-y-2">
                <Label>Frequency</Label>
                <Select value={checkinCadence} onValueChange={setCheckinCadence}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="biweekly">Every 2 weeks</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="checkin-time">Preferred time</Label>
                <Input
                  id="checkin-time"
                  type="time"
                  value={checkinTime}
                  onChange={(e) => setCheckinTime(e.target.value)}
                />
              </div>
            </>
          )}
          <Button
            onClick={async () => {
              setCheckinSaving(true);
              try {
                await updateCheckinPreferences({
                  enabled: checkinEnabled,
                  cadence: checkinCadence,
                  preferredTime: checkinTime,
                  timezone: checkinTimezone,
                });
                toast.success("Check-in preferences saved");
              } catch {
                toast.error("Failed to save preferences");
              } finally {
                setCheckinSaving(false);
              }
            }}
            disabled={checkinSaving}
          >
            {checkinSaving ? "Saving..." : "Save check-in preferences"}
          </Button>
        </CardContent>
      </Card>

      {/* Account Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>Manage your account settings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <UserButton />
            <div>
              <p className="text-sm font-medium">Account Management</p>
              <p className="text-xs text-muted-foreground">
                Click above to manage your account
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}