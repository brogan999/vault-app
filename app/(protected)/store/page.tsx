"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { createOneOffPurchase, getUserPurchases } from "@/app/actions/payments";
import { toast } from "sonner";
import { Sparkles, Star, CheckCircle, Package } from "lucide-react";

const products = [
  {
    id: "prod_deep_vedic",
    name: "Deep Dive Vedic Astrology Analysis",
    description: "Comprehensive analysis of your Vedic astrology chart with detailed insights into planetary periods, dashas, and karmic patterns.",
    price: "$49",
    priceId: process.env.NEXT_PUBLIC_STRIPE_DEEP_VEDIC_PRICE_ID || "price_placeholder",
    icon: Sparkles,
  },
  {
    id: "prod_schema_analysis",
    name: "Schema Activation Analysis",
    description: "Deep analysis of your personality schemas and activation patterns based on your Big 5, journal entries, and chat history.",
    price: "$39",
    priceId: process.env.NEXT_PUBLIC_STRIPE_SCHEMA_PRICE_ID || "price_placeholder",
    icon: Star,
  },
];

interface PurchaseRecord {
  id: string;
  priceId: string;
  productName: string;
  amountPaid: number;
  status: string;
  createdAt: string;
}

export default function StorePage() {
  return (
    <Suspense>
      <StoreContent />
    </Suspense>
  );
}

function StoreContent() {
  const [loading, setLoading] = useState<string | null>(null);
  const [purchases, setPurchases] = useState<PurchaseRecord[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      toast.success("Purchase successful! Your analysis will be available soon.");
    }
    if (searchParams.get("canceled") === "true") {
      toast("Purchase canceled.");
    }
  }, [searchParams]);

  useEffect(() => {
    getUserPurchases()
      .then((data) => setPurchases(data as PurchaseRecord[]))
      .catch(() => {});
  }, []);

  const isPurchased = (priceId: string) =>
    purchases.some((p) => p.priceId === priceId && p.status === "completed");

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
          One-off deep-dive analyses powered by your Vault data
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product) => {
          const owned = isPurchased(product.priceId);
          const Icon = product.icon;
          return (
            <Card key={product.id} className={owned ? "border-primary/30" : ""}>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                </div>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{product.price}</span>
                  {owned ? (
                    <Badge variant="secondary" className="gap-1">
                      <CheckCircle className="h-3.5 w-3.5" />
                      Purchased
                    </Badge>
                  ) : (
                    <Button
                      onClick={() => handlePurchase(product.id, product.priceId)}
                      disabled={loading === product.id}
                    >
                      {loading === product.id ? "Processing..." : "Purchase"}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Purchase History */}
      {purchases.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Purchase History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {purchases.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between py-2 border-b last:border-0"
                >
                  <div>
                    <p className="font-medium text-sm">{p.productName}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(p.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">
                      ${(p.amountPaid / 100).toFixed(2)}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {p.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            Pro Subscription
          </CardTitle>
          <CardDescription>
            Get unlimited access to all features with a Pro plan
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
