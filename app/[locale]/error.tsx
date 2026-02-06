"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("errors");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="max-w-md w-full">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-destructive" />
            <CardTitle>{t("somethingWentWrong")}</CardTitle>
          </div>
          <CardDescription>
            {t("unexpectedError")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error.message && (
            <p className="text-sm text-muted-foreground">{error.message}</p>
          )}
          <div className="flex gap-2">
            <Button onClick={reset}>{t("tryAgain")}</Button>
            <Button variant="outline" onClick={() => window.location.href = "/"}>
              {t("goHome")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
