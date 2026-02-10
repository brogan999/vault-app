"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { saveConsent } from "@/app/actions/consent";
import { toast } from "sonner";

const PRE_SIGNUP_CONSENT_COOKIE = "preSignupConsent";

export function clearPreSignupConsentCookie() {
  if (typeof document === "undefined") return;
  document.cookie = `${PRE_SIGNUP_CONSENT_COOKIE}=; path=/; max-age=0`;
}

export function setPreSignupConsentCookie() {
  if (typeof document === "undefined") return;
  document.cookie = `${PRE_SIGNUP_CONSENT_COOKIE}=1; path=/; max-age=86400`; // 24h
}

export function hasPreSignupConsentCookie(): boolean {
  if (typeof document === "undefined") return false;
  return document.cookie.includes(`${PRE_SIGNUP_CONSENT_COOKIE}=`);
}

interface ConsentDialogProps {
  open: boolean;
  /** When "preSignup", consent is stored in a cookie and onConsented is called instead of saveConsent. */
  mode?: "authenticated" | "preSignup";
  /** Called after user consents in preSignup mode (e.g. redirect to sign-up). */
  onPreSignupConsent?: () => void;
}

function Checkbox({
  checked,
  onCheckedChange,
  id,
}: {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  id: string;
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      id={id}
      onClick={() => onCheckedChange(!checked)}
      className={cn(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors",
        checked
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background hover:border-primary/50"
      )}
    >
      {checked && <Check className="h-3.5 w-3.5" />}
    </button>
  );
}

export function ConsentDialog({
  open,
  mode = "authenticated",
  onPreSignupConsent,
}: ConsentDialogProps) {
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [screeningUnderstood, setScreeningUnderstood] = useState(false);
  const [assessmentConsented, setAssessmentConsented] = useState(false);
  const [saving, setSaving] = useState(false);

  const allChecked = ageConfirmed && screeningUnderstood && assessmentConsented;

  const handleContinue = async () => {
    if (!allChecked) return;
    setSaving(true);
    try {
      if (mode === "preSignup") {
        setPreSignupConsentCookie();
        onPreSignupConsent?.();
        return;
      }
      await saveConsent();
      window.location.reload();
    } catch {
      toast.error("Failed to save consent. Please try again.");
      setSaving(false);
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent
        className="sm:max-w-md rounded-2xl p-0 gap-0 [&>button]:hidden"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="px-6 pt-6 pb-2">
          <DialogHeader className="text-left">
            <DialogTitle className="text-xl font-bold text-foreground font-serif">
              Before you begin
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground mt-1.5">
              This assessment includes psychological screening tools. Please
              confirm the following:
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6 py-4 space-y-4">
          {/* Checkbox 1: Age */}
          <label
            htmlFor="age-confirm"
            className="flex items-start gap-3 cursor-pointer group"
          >
            <Checkbox
              id="age-confirm"
              checked={ageConfirmed}
              onCheckedChange={setAgeConfirmed}
            />
            <span className="text-sm text-foreground leading-relaxed pt-0.5">
              I confirm I am{" "}
              <strong className="font-semibold">18 years or older</strong>
            </span>
          </label>

          {/* Checkbox 2: Screening tool */}
          <label
            htmlFor="screening-confirm"
            className="flex items-start gap-3 cursor-pointer group"
          >
            <Checkbox
              id="screening-confirm"
              checked={screeningUnderstood}
              onCheckedChange={setScreeningUnderstood}
            />
            <span className="text-sm text-foreground leading-relaxed pt-0.5">
              I understand this is a{" "}
              <strong className="font-semibold">
                screening tool, not a clinical diagnosis
              </strong>
              . Results suggest areas to explore with qualified professionals.
            </span>
          </label>

          {/* Checkbox 3: Assessment consent */}
          <label
            htmlFor="assessment-confirm"
            className="flex items-start gap-3 cursor-pointer group"
          >
            <Checkbox
              id="assessment-confirm"
              checked={assessmentConsented}
              onCheckedChange={setAssessmentConsented}
            />
            <span className="text-sm text-foreground leading-relaxed pt-0.5">
              I agree to take self-report assessments about personality and
              preferences, and understand they are for self-reflection, not
              diagnosis.
            </span>
          </label>
        </div>

        <div className="px-6 pb-6 pt-2 space-y-3">
          <Button
            size="lg"
            className="w-full h-12 rounded-xl font-semibold text-base"
            disabled={!allChecked || saving}
            onClick={handleContinue}
          >
            {saving
              ? "Saving..."
              : mode === "preSignup"
                ? "Continue to Sign Up"
                : "Continue to Assessment"}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            By continuing, you agree to our{" "}
            <Link
              href="/terms"
              className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
