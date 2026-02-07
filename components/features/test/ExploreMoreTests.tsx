"use client";

import { Link } from "@/i18n/navigation";
import { products } from "@/lib/products";
import { getTestDefinition } from "@/lib/tests";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ExploreMoreTestsProps {
  /** Exclude this test from the list (e.g. the one they just took). */
  excludeTestId: string;
  /** Optional heading. */
  heading?: string;
  /** Optional subheading. */
  subheading?: string;
  /** Max number of tests to show. Default 6. */
  max?: number;
}

export function ExploreMoreTests({
  excludeTestId,
  heading = "Your results are just the beginning",
  subheading = "Discover more about yourself with our other assessments.",
  max = 6,
}: ExploreMoreTestsProps) {
  const others = products
    .filter((p) => p.id !== excludeTestId && getTestDefinition(p.id))
    .slice(0, max);

  if (others.length === 0) return null;

  return (
    <section className="mt-12">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-foreground font-serif">
          {heading}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">{subheading}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((product) => {
          const Icon = product.icon;
          return (
            <Card
              key={product.id}
              className="border-0 shadow-sm rounded-2xl overflow-hidden transition-shadow hover:shadow-md"
            >
              <CardContent className="p-5 flex flex-col h-full">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl shrink-0"
                  style={{ backgroundColor: product.bgColor }}
                >
                  <Icon className="h-6 w-6" style={{ color: product.color }} />
                </div>
                <h3 className="mt-3 font-semibold text-foreground line-clamp-1">
                  {product.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2 flex-1">
                  {product.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 w-fit gap-1.5 rounded-xl"
                  asChild
                >
                  <Link href={`/test/${product.id}`}>
                    Take test
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className="mt-6 text-center">
        <Button variant="ghost" size="sm" className="rounded-xl" asChild>
          <Link href="/store">View all assessments</Link>
        </Button>
      </div>
    </section>
  );
}
