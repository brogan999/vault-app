"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createOneOffPurchase } from "@/app/actions/payments";
import { toast } from "sonner";
import { Sparkles, Star } from "lucide-react";

const products = [
  {
    id: "prod_deep_vedic",
    name: "Deep Dive Vedic Astrology Analysis",
    description: "Comprehensive analysis of your Vedic astrology chart with detailed insights",
    price: "$49",
    priceId: process.env.NEXT_PUBLIC_STRIPE_DEEP_VEDIC_PRICE_ID || "price_placeholder",
  },
  {
    id: "prod_schema_analysis",
    name: "Schema Activation Analysis",
    description: "Deep analysis of your personality schemas and activation patterns",
    price: "$39",
    priceId: process.env.NEXT_PUBLIC_STRIPE_SCHEMA_PRICE_ID || "price_placeholder",
  },
];

export default function StorePage() {
  const [loading, setLoading] = useState<string | null>(null);

  const handlePurchase = async (productId: string, priceId: string) => {
    setLoading(productId);
    try {
      const { url } = await createOneOffPurchase(priceId);
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Purchase error:", error);
      toast.error("Failed to initiate purchase");
      setLoading(null);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">The Store</h1>
        <p className="text-muted-foreground">
          Purchase additional analyses and insights
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <CardTitle>{product.name}</CardTitle>
              </div>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold">{product.price}</span>
                </div>
                <Button
                  onClick={() => handlePurchase(product.id, product.priceId)}
                  disabled={loading === product.id}
                >
                  {loading === product.id ? "Processing..." : "Purchase"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            Pro Subscription
          </CardTitle>
          <CardDescription>
            Get unlimited access to all features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <a href="/pricing">View Pricing</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}