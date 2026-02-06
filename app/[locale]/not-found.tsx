import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotFound() {
  const t = useTranslations("errors");
  const tCommon = useTranslations("common");

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>{t("pageNotFound")}</CardTitle>
          <CardDescription>
            {t("pageNotFoundDescription")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href="/">{tCommon("goHome")}</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
