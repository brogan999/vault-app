import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Brain, Lock, Sparkles } from "lucide-react";

export function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          The Vault
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Your privacy-centric AI companion that truly understands you by integrating
          your fragmented psychological and personal data.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/sign-up">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/pricing">View Pricing</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why The Vault?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 mb-4 text-primary" />
              <CardTitle>Privacy First</CardTitle>
              <CardDescription>
                Zero-knowledge encryption. Your data stays yours, always.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Brain className="h-10 w-10 mb-4 text-primary" />
              <CardTitle>AI That Knows You</CardTitle>
              <CardDescription>
                Integrates Big 5, Astrology, IQ tests, and journals for personalized insights.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Lock className="h-10 w-10 mb-4 text-primary" />
              <CardTitle>Privacy Shield</CardTitle>
              <CardDescription>
                Toggle encryption mode to ensure your sensitive data is never logged.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Sparkles className="h-10 w-10 mb-4 text-primary" />
              <CardTitle>Longitudinal Tracking</CardTitle>
              <CardDescription>
                Track your personality schemas and growth over time.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
        <p className="text-muted-foreground mb-8">
          Join users who are taking control of their psychological data.
        </p>
        <Button asChild size="lg">
          <Link href="/sign-up">Start Your Journey</Link>
        </Button>
      </section>
    </div>
  );
}
