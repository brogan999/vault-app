import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Deep Personality",
  description:
    "Learn how Deep Personality collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 lg:px-8 lg:py-16">
        <h1 className="text-3xl font-extrabold text-foreground font-serif lg:text-4xl mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: February 5, 2026
        </p>

        <div className="prose-legal space-y-8 text-foreground text-sm leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              1. Introduction
            </h2>
            <p className="text-muted-foreground mb-3">
              Deep Personality (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the App&rdquo;) is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you use
              our personality assessment application.
            </p>
            <p className="text-muted-foreground">
              We comply with the Personal Information Protection and Electronic
              Documents Act (PIPEDA) and applicable Canadian privacy laws.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              2. Information We Collect
            </h2>

            <h3 className="text-sm font-bold text-foreground mb-2 mt-4">
              Account Information
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li>Email address (for authentication)</li>
              <li>Account creation date</li>
            </ul>

            <h3 className="text-sm font-bold text-foreground mb-2">
              Assessment Data
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li>Your responses to personality assessment questions</li>
              <li>Calculated personality trait scores (Big Five, HEXACO, PID-5-SF)</li>
              <li>Dark Triad trait scores (Narcissism, Machiavellianism, Psychopathy)</li>
              <li>Mental health screening scores (GAD-7, PHQ-9, ACE, PCL-5, DSM-5 Social Anxiety, RMS bipolar screening)</li>
              <li>Substance use screening (AUDIT-C alcohol screening, DAST-10 drug screening) — optional, you may skip these questions</li>
              <li>Eating disorder screening (SCOFF) — with crisis resources provided if concerns detected</li>
              <li>Life satisfaction and relationship preference responses</li>
              <li>AI-generated personality analyses</li>
            </ul>

            <h3 className="text-sm font-bold text-foreground mb-2">
              Technical Information
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li>IP address (for security and audit purposes)</li>
              <li>Browser user agent</li>
              <li>Access timestamps</li>
            </ul>

            <div className="rounded-xl bg-muted/50 p-4 border border-border">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                Sensitive Data Notice
              </p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Assessment data includes psychological, mental health, substance
                use, and eating disorder information which is considered highly
                sensitive personal information under PIPEDA. We apply additional
                safeguards to protect this data, including opt-in consent for
                substance use screening, crisis resources when eating disorder
                concerns are detected, encryption at rest and in transit for all
                sensitive data, and no sharing with employers, insurers, or third
                parties (except service providers).
              </p>
            </div>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              3. How We Use Your Information
            </h2>
            <p className="text-muted-foreground mb-2">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Generate your personality profile and analyses</li>
              <li>Store your results so you can access them later</li>
              <li>Enable profile sharing features (only when you choose to share)</li>
              <li>Compare profiles with saved partners (at your request)</li>
              <li>Maintain audit logs for security and compliance</li>
              <li>Improve and maintain the App</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              4. Data Storage and Security
            </h2>
            <p className="text-muted-foreground mb-2">
              Your data is stored securely using Supabase, which provides:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-3">
              <li>Encryption at rest for all stored data</li>
              <li>Encryption in transit (TLS/SSL)</li>
              <li>Row-level security policies to ensure you can only access your own data</li>
              <li>Regular security updates and monitoring</li>
            </ul>
            <p className="text-muted-foreground">
              The App is hosted on Vercel with enterprise-grade security
              measures.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              5. International Data Transfers
            </h2>
            <p className="text-muted-foreground mb-3">
              <strong>Server Location: United States</strong>
            </p>
            <p className="text-muted-foreground mb-3">
              Deep Personality Inc. is based in British Columbia, Canada. However,
              our servers and infrastructure are located in the United States.
              When you use our service, your data is transferred to and processed
              in the United States.
            </p>
            <p className="text-muted-foreground mb-2">
              Our service providers include:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-3">
              <li>Supabase (database hosting) — United States</li>
              <li>Vercel (application hosting) — United States</li>
              <li>OpenAI (AI analysis) — United States</li>
              <li>Anthropic (AI analysis) — United States</li>
            </ul>
            <p className="text-muted-foreground">
              Under PIPEDA, we remain accountable for your personal information
              when it is transferred to third parties. We ensure our service
              providers maintain comparable levels of data protection through
              contractual obligations (Data Processing Agreements).
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              6. Data Sharing
            </h2>
            <p className="text-muted-foreground mb-3 font-semibold">
              We do not sell, rent, or trade your personal information to third
              parties.
            </p>
            <p className="text-muted-foreground mb-2">
              Your data may be shared:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>
                <strong>By your choice:</strong> When you create a share link,
                anyone with that link can view the shared profile
              </li>
              <li>
                <strong>Service providers:</strong> With Supabase (database),
                Vercel (hosting), and OpenAI (AI analysis) as necessary to
                provide the service
              </li>
              <li>
                <strong>Legal requirements:</strong> If required by law or to
                protect our legal rights
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              7. Data Retention
            </h2>
            <p className="text-muted-foreground mb-2">
              We retain your data until you delete your account. Upon account
              deletion:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>All your profiles and assessment data are permanently deleted</li>
              <li>All saved partner profiles are deleted</li>
              <li>All share links you created are deleted</li>
              <li>
                Audit logs are anonymized (user ID removed) but retained for up
                to 1 year for security purposes
              </li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              8. Your Rights (PIPEDA — Canada)
            </h2>
            <p className="text-muted-foreground mb-2">
              Under Canadian privacy law, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-3">
              <li>
                <strong>Access:</strong> View all personal information we hold
                about you
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate
                information
              </li>
              <li>
                <strong>Deletion:</strong> Request permanent deletion of your
                data
              </li>
              <li>
                <strong>Withdraw consent:</strong> Stop using the App at any time
              </li>
            </ul>
            <p className="text-muted-foreground">
              <strong>To exercise your rights:</strong> You can delete your
              account and all associated data directly from the App dashboard.
              For other requests, please contact us.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              9. Your Rights (CCPA/CPRA — California)
            </h2>
            <p className="text-muted-foreground mb-2">
              If you are a California resident, the California Consumer Privacy
              Act (CCPA) and California Privacy Rights Act (CPRA) provide you
              with additional rights:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-3">
              <li>
                <strong>Right to Know:</strong> You may request disclosure of the
                categories and specific pieces of personal information we have
                collected
              </li>
              <li>
                <strong>Right to Delete:</strong> You may request deletion of
                your personal information
              </li>
              <li>
                <strong>Right to Correct:</strong> You may request correction of
                inaccurate personal information
              </li>
              <li>
                <strong>Right to Opt-Out of Sale:</strong> We do not sell your
                personal information
              </li>
              <li>
                <strong>Right to Non-Discrimination:</strong> We will not
                discriminate against you for exercising your privacy rights
              </li>
            </ul>
            <p className="text-muted-foreground">
              <strong>Notice:</strong> We do not sell, share, or use your
              personal information for targeted advertising. We do not have
              actual knowledge that we sell or share the personal information of
              consumers under 16 years of age.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              10. Geographic Availability
            </h2>
            <p className="text-muted-foreground mb-3">
              This service is available to users in Canada and the United States.
            </p>
            <p className="text-muted-foreground">
              <strong>European Union Notice:</strong> This service is not
              available to residents of the European Union, European Economic
              Area, or United Kingdom. We do not process personal data of
              EU/EEA/UK residents and access from these regions is blocked. If
              you believe you have accessed this service from a restricted
              region, please contact us.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              11. Cookies and Tracking
            </h2>
            <p className="text-muted-foreground">
              We use essential cookies for authentication and session management.
              We do not use advertising cookies or third-party tracking.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              12. Children&apos;s Privacy
            </h2>
            <p className="text-muted-foreground mb-3">
              This App is intended for adults (18 years of age or older) only. We
              do not knowingly collect personal information from children under
              18.
            </p>
            <p className="text-muted-foreground">
              In compliance with the U.S. Children&apos;s Online Privacy Protection
              Act (COPPA), we do not knowingly collect, use, or disclose personal
              information from children under 13. If we become aware that we have
              collected personal information from a child under 13, we will take
              steps to delete that information promptly.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              13. Changes to This Policy
            </h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify
              you of significant changes by posting a notice in the App. Your
              continued use of the App after changes constitutes acceptance of
              the updated policy.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              14. Contact Us
            </h2>
            <p className="text-muted-foreground mb-3">
              If you have questions about this Privacy Policy or wish to exercise
              your privacy rights, please contact us at{" "}
              <a
                href="mailto:support@deeppersonality.app"
                className="text-primary underline underline-offset-2 hover:opacity-80"
              >
                support@deeppersonality.app
              </a>
              .
            </p>
            <p className="text-muted-foreground">
              You also have the right to file a complaint with the Office of the
              Privacy Commissioner of Canada if you believe your privacy rights
              have been violated.
            </p>
          </section>
        </div>
    </main>
  );
}
