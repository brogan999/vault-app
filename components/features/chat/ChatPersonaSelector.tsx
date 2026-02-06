"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, Compass, Bot, Heart } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { getCurrentUserPreferences, updatePersonaPreference } from "@/app/actions/settings";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const PERSONA_IDS = ["balanced", "coach", "therapist"] as const;
type PersonaId = (typeof PERSONA_IDS)[number];

const ICONS: Record<PersonaId, typeof Compass> = {
  balanced: Compass,
  coach: Bot,
  therapist: Heart,
};

export function ChatPersonaSelector() {
  const t = useTranslations("settings.aiPersona");
  const [persona, setPersona] = useState<PersonaId>("balanced");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getCurrentUserPreferences().then((prefs) => {
      if (prefs?.personaPreference && PERSONA_IDS.includes(prefs.personaPreference as PersonaId)) {
        setPersona(prefs.personaPreference as PersonaId);
      }
    });
  }, []);

  const labels: Record<PersonaId, string> = {
    balanced: t("balanced"),
    coach: t("directCoach"),
    therapist: t("empatheticTherapist"),
  };

  const handleSelect = async (value: string) => {
    const next = value as PersonaId;
    setPersona(next);
    setOpen(false);
    try {
      await updatePersonaPreference(next);
      toast.success(t("personaUpdated"));
    } catch {
      setPersona(persona);
      toast.error(t("personaFailed"));
    }
  };

  const TriggerIcon = ICONS[persona];

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
            "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label={t("description")}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <TriggerIcon className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span className="max-w-[7rem] truncate sm:max-w-none">{labels[persona]}</span>
          <ChevronDown className="h-3.5 w-3.5 shrink-0 opacity-60" aria-hidden />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={6} className="min-w-[12rem]">
        <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">
          {t("description")}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={persona} onValueChange={handleSelect}>
          {PERSONA_IDS.map((id) => {
            const Icon = ICONS[id];
            return (
              <DropdownMenuRadioItem key={id} value={id} className="gap-2 py-2">
                <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span>{labels[id]}</span>
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
