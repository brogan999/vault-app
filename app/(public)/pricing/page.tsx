import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "Basic AI chat",
      "Up to 10 document uploads",
      "Voice journaling (5 entries/month)",
      "Basic dashboard",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For serious self-improvers",
    features: [
      "Unlimited AI chat",
      "Unlimited document uploads",
      "Unlimited voice journaling",
      "Advanced dashboard with all widgets",
      "Priority support",
      "Advanced analytics",
      "Access to The Store",
    ],
    cta: "Upgrade to Pro",
    popular: true,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Pricing</h1>
          <p className="text-xl text-muted-foreground">
            Choose the plan that works for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={tier.popular ? "border-primary border-2" : ""}
            >
              <CardHeader>
                {tier.popular && (
                  <div className="text-xs font-semibold text-primary mb-2">
                    MOST POPULAR
                  </div>
                )}
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && (
                    <span className="text-muted-foreground">{tier.period}</span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="w-full"
                  variant={tier.popular ? "default" : "outline"}
                >
                  <Link href={tier.name === "Free" ? "/sign-up" : "/store"}>
                    {tier.cta}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Also available: One-off purchases in The Store
          </p>
          <Button asChild variant="link">
            <Link href="/store">Browse The Store</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}