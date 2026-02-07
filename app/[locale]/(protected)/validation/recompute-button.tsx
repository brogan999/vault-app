"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { recomputeValidationMetrics } from "@/app/actions/validation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function RecomputeButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="outline"
      size="sm"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          const result = await recomputeValidationMetrics();
          if (result.ok) {
            toast.success(result.message, {
              description: `Scales computed: ${result.scalesComputed}`,
            });
            router.refresh();
          } else {
            toast.error(result.message);
          }
        });
      }}
    >
      {isPending ? "Computing…" : "Recompute from item data"}
    </Button>
  );
}
