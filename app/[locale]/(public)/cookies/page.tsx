import type { Metadata } from "next";
import { ChangeCookiePreferencesButton } from "@/components/features/consent/ChangeCookiePreferencesButton";

export const metadata: Metadata = {
  title: "Cookie Policy — Anima",
  description:
    "How Anima uses cookies and similar technologies, and how to manage your preferences.",
};

export default function CookiesPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 lg:px-8 lg:py-16">
      <h1 className="text-3xl font-extrabold text-foreground font-serif lg:text-4xl mb-2">
        Cookie Policy
      </h1>
      <p className="text-sm text-muted-foreground mb-10">
        Last updated: February 11, 2026
      </p>
      <div className="prose-legal space-y-8 text-foreground text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-bold font-serif text-foreground mb-3">
            1. What are cookies?
          </h2>
          <p className="text-muted-foreground">
            Cookies are small text files stored on your device when you visit a website. They help the site function (e.g. keeping you logged in), remember preferences, or collect analytics. We use only essential cookies (required for the App to work) and optional analytics cookies (to improve the product). We do not use advertising or cross-site tracking cookies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold font-serif text-foreground mb-3">
            2. How we use cookies
          </h2>
          <p className="text-muted-foreground mb-3">
            In the European Economic Area, UK, and other jurisdictions that require consent for non-essential cookies, we show a cookie banner on your first visit. We only set optional analytics cookies after you choose to accept them. You can change your choice at any time using the link in the footer (&ldquo;Cookie preferences&rdquo; or &ldquo;Cookie Policy&rdquo;).
          </p>
          <p className="text-muted-foreground">
            Essential cookies are always used because the App cannot work without them (e.g. authentication, session, guest test linking).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold font-serif text-foreground mb-3">
            3. Cookie list
          </h2>
          <p className="text-muted-foreground mb-3">
            Below is a list of the main cookies we use. Names may vary slightly depending on the provider and environment.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-muted-foreground border border-border rounded-lg">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left p-3 font-semibold text-foreground">Cookie / category</th>
                  <th className="text-left p-3 font-semibold text-foreground">Purpose</th>
                  <th className="text-left p-3 font-semibold text-foreground">Duration</th>
                  <th className="text-left p-3 font-semibold text-foreground">Essential?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-3">Clerk (e.g. __session, __clerk_db_jwt)</td>
                  <td className="p-3">Authentication and session</td>
                  <td className="p-3">Session or as set by Clerk</td>
                  <td className="p-3">Yes</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">Supabase auth cookies</td>
                  <td className="p-3">Database session / API access</td>
                  <td className="p-3">Session or as set by Supabase</td>
                  <td className="p-3">Yes</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">vault_guest_id</td>
                  <td className="p-3">Link guest assessment attempts before sign-up</td>
                  <td className="p-3">1 year</td>
                  <td className="p-3">Yes (for guest flow)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">preSignupConsent</td>
                  <td className="p-3">Remember assessment consent before sign-up</td>
                  <td className="p-3">24 hours</td>
                  <td className="p-3">Yes (for consent flow)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">vault_cookie_consent</td>
                  <td className="p-3">Store your cookie consent choice (essential only vs all)</td>
                  <td className="p-3">1 year</td>
                  <td className="p-3">Yes (for compliance)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-3">PostHog (e.g. ph_*)</td>
                  <td className="p-3">Product analytics (usage, feature events) to improve the App</td>
                  <td className="p-3">As set by PostHog (typically 1 year)</td>
                  <td className="p-3">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold font-serif text-foreground mb-3">
            4. Managing your preferences
          </h2>
          <p className="text-muted-foreground mb-2">
            You can change your cookie preference at any time:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-3">
            <li>Click the button below to clear your current choice; you will be taken to the home page and the cookie banner will appear again so you can choose &ldquo;Essential only&rdquo; or &ldquo;Accept all&rdquo;.</li>
            <li>If you choose &ldquo;Essential only&rdquo;, we will not load PostHog (or other optional analytics) and will not set analytics cookies.</li>
            <li>You can also disable or delete cookies via your browser settings; note that blocking essential cookies may prevent the App from working correctly.</li>
          </ul>
          <p className="text-muted-foreground mb-3">
            <ChangeCookiePreferencesButton />
          </p>
          <p className="text-muted-foreground">
            For more on how we use personal data, see our{" "}
            <a href="/privacy" className="text-primary underline underline-offset-2 hover:opacity-80">Privacy Policy</a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold font-serif text-foreground mb-3">
            5. Contact
          </h2>
          <p className="text-muted-foreground">
            Questions about cookies or this policy? Contact Personality Co at{" "}
            <a href="mailto:support@theanima.ai" className="text-primary underline underline-offset-2 hover:opacity-80">support@theanima.ai</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
