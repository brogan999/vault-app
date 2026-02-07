import { notFound, redirect } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { getProductById } from "@/lib/products";
import { getTestDefinition } from "@/lib/tests";
import { TestShell } from "@/components/features/test/TestShell";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lock } from "lucide-react";

interface TestIntroPageProps {
  params: Promise<{ testId: string }>;
}

export default async function TestIntroPage({ params }: TestIntroPageProps) {
  const { testId } = await params;
  const product = getProductById(testId);
  const testDef = getTestDefinition(testId);

  if (!product || !testDef) {
    notFound();
  }

  if (product.locked) {
    const tTest = await getTranslations("test");
    return (
      <TestShell>
        <Link
          href="/store"
          className="inline-flex items-center gap-1.5 text-base text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          {tTest("backToStore")}
        </Link>
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold font-serif text-foreground">
            {product.title}
          </h1>
          <p className="mt-2 text-muted-foreground">{product.description}</p>
          <Button disabled size="lg" className="gap-2 rounded-xl text-lg px-8 py-6 mt-8">
            <Lock className="h-5 w-5" />
            {tTest("comingSoon")}
          </Button>
        </div>
      </TestShell>
    );
  }

  /* Go straight into the test (16p-style: header + steps + progress + questions, or data entry for astrology). */
  redirect(`/test/${testId}/questions`);
}
