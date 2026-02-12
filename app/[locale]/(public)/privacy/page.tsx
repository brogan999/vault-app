import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Anima",
  description:
    "Learn how Anima collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 lg:px-8 lg:py-16">
        <h1 className="text-3xl font-extrabold text-foreground font-serif lg:text-4xl mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: February 11, 2026
        </p>
        <div className="prose-legal space-y-8 text-foreground text-sm leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              1. Introduction
            </h2>
            <p className="text-muted-foreground mb-3">
              Anima (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the
              App&rdquo;) is operated by Personality Co. We are committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you use our personality
              assessment and self-discovery platform.
            </p>
            <p className="text-muted-foreground">
              We comply with the California Consumer Privacy Act (CCPA), the
              California Privacy Rights Act (CPRA), the EU General Data Protection Regulation (GDPR), the UK GDPR, and other applicable privacy laws in the United States, European Union, United Kingdom, and elsewhere. Where required by law, we obtain your consent before using non-essential cookies or analytics.
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
              <li>Display name (optional)</li>
              <li>Account creation date</li>
            </ul>

            <h3 className="text-sm font-bold text-foreground mb-2">
              Assessment and Profile Data
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li>Your responses to personality assessments (Big Five, MBTI, Enneagram, DISC, and others)</li>
              <li>Intelligence and strengths assessment responses and scores</li>
              <li>Birth date, time, and location (if you choose to provide them for astrology, numerology, or Human Design features)</li>
              <li>Calculated personality trait scores and type results</li>
              <li>AI-generated personality analyses, chat conversations, and journal reflections</li>
              <li>Voice journal audio recordings (if you use voice journaling)</li>
              <li>Mood check-in data</li>
            </ul>

            <h3 className="text-sm font-bold text-foreground mb-2">
              Payment Information
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li>Payment transactions are processed by Stripe. We do not store your credit card number or full payment details on our servers</li>
              <li>We receive and store transaction metadata (purchase ID, product purchased, amount, date) for record-keeping</li>
            </ul>

            <h3 className="text-sm font-bold text-foreground mb-2">
              Technical Information
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li>IP address (for security and fraud prevention)</li>
              <li>Browser type and device information</li>
              <li>Access timestamps and usage patterns</li>
            </ul>

            <div className="rounded-xl bg-muted/50 p-4 border border-border">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                Sensitive Data Notice
              </p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Some of the data you provide — including personality assessment
                responses, birth details, journal entries, and voice recordings
                — may be considered sensitive personal information under
                California law (CCPA/CPRA). We apply additional safeguards to
                this data, including encryption at rest and in transit. We do not
                sell this data or share it with third parties for advertising
                purposes.
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
              <li>Generate your personality profiles, analyses, and test results</li>
              <li>Power the AI Mirror chat companion with personalized context</li>
              <li>Process and store journal entries (text and voice)</li>
              <li>Store your results in your personal Vault for future reference</li>
              <li>Process payments and manage subscriptions</li>
              <li>Send transactional communications (e.g., purchase confirmations, account notifications)</li>
              <li>Maintain security, prevent fraud, and comply with legal obligations</li>
              <li>Improve and maintain the App</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              4. Data Storage and Security
            </h2>
            <p className="text-muted-foreground mb-2">
              Your data is stored securely using industry-standard practices:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-3">
              <li>Encryption at rest for all stored data (AES-256)</li>
              <li>Encryption in transit (TLS/SSL)</li>
              <li>Row-level security policies ensuring you can only access your own data</li>
              <li>Regular security monitoring and updates</li>
            </ul>
            <p className="text-muted-foreground">
              Our infrastructure is hosted on Vercel and Supabase, both of which
              maintain SOC 2 compliance and enterprise-grade security measures.
              Servers are located in the United States.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              5. Service Providers
            </h2>
            <p className="text-muted-foreground mb-2">
              We use the following third-party service providers to operate the
              App:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-3">
              <li><strong>Supabase</strong> — database and storage (United States)</li>
              <li><strong>Vercel</strong> — application hosting (United States)</li>
              <li><strong>OpenAI</strong> — AI analysis and chat (United States)</li>
              <li><strong>Clerk</strong> — user authentication (United States)</li>
              <li><strong>Stripe</strong> — payment processing (United States)</li>
              <li><strong>PostHog</strong> — product analytics (usage and feature events to improve the App; United States). Where required by law (e.g. EU/UK), we load analytics only after you consent. See our Cookie Policy for details.</li>
            </ul>
            <p className="text-muted-foreground">
              Each service provider processes data only as necessary to provide
              their service and is bound by contractual data protection
              obligations.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              6. Data Sharing
            </h2>
            <p className="text-muted-foreground mb-3 font-semibold">
              We do not sell, rent, or trade your personal information to third
              parties. We do not share your personal information for
              cross-context behavioral advertising.
            </p>
            <p className="text-muted-foreground mb-2">
              Your data may be disclosed in the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>
                <strong>Service providers:</strong> With the third-party providers
                listed above, solely to operate and deliver the App
              </li>
              <li>
                <strong>Legal requirements:</strong> If required by law,
                subpoena, court order, or governmental request, or to protect our
                legal rights, safety, or property
              </li>
              <li>
                <strong>Business transfers:</strong> In connection with a merger,
                acquisition, or sale of assets, in which case your data would
                remain subject to this Privacy Policy
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              7. Data Retention
            </h2>
            <p className="text-muted-foreground mb-2">
              We retain your data for as long as your account is active. Upon
              account deletion:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>All profiles, assessment data, journal entries, and chat history are permanently deleted</li>
              <li>All voice recordings are deleted</li>
              <li>Payment transaction records are retained as required by applicable tax and accounting laws</li>
              <li>Security audit logs are anonymized and retained for up to 1 year</li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              8. Your Rights Under California Law (CCPA / CPRA)
            </h2>
            <p className="text-muted-foreground mb-2">
              If you are a California resident, you have the following rights
              under the California Consumer Privacy Act and California Privacy
              Rights Act:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-3">
              <li>
                <strong>Right to Know:</strong> You may request disclosure of the
                categories and specific pieces of personal information we have
                collected about you
              </li>
              <li>
                <strong>Right to Delete:</strong> You may request permanent
                deletion of your personal information
              </li>
              <li>
                <strong>Right to Correct:</strong> You may request correction of
                inaccurate personal information
              </li>
              <li>
                <strong>Right to Opt-Out of Sale/Sharing:</strong> We do not sell
                or share your personal information for cross-context behavioral
                advertising
              </li>
              <li>
                <strong>Right to Limit Use of Sensitive Personal Information:</strong>{" "}
                You may request that we limit the use and disclosure of your
                sensitive personal information to what is necessary to provide the
                service
              </li>
              <li>
                <strong>Right to Non-Discrimination:</strong> We will not
                discriminate against you for exercising your privacy rights
              </li>
            </ul>
            <p className="text-muted-foreground mb-3">
              <strong>To exercise your rights:</strong> You can export your data from the App (Vault or account settings) and, where we have enabled it, delete your account and associated data from the App settings. For other requests (e.g. access, correction, deletion, or limit use of sensitive information), email us at{" "}
              <a
                href="mailto:support@theanima.ai"
                className="text-primary underline underline-offset-2 hover:opacity-80"
              >
                support@theanima.ai
              </a>
              . We will verify your identity and respond within 45 days as required by California law.
            </p>
            <p className="text-muted-foreground">
              <strong>Authorized agents:</strong> You may designate an authorized
              agent to make a request on your behalf. We may require verification
              of the agent&apos;s authority and your identity.
            </p>
          </section>

          {/* 8.1 EU/UK GDPR */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              Your Rights in the European Economic Area and United Kingdom (GDPR / UK GDPR)
            </h2>
            <p className="text-muted-foreground mb-2">
              If you are in the EEA or UK, we process your personal data on the following bases: performance of our contract with you (account, assessments, vault, AI), consent (where we ask for it, e.g. optional analytics cookies), and our legitimate interests (security, fraud prevention, improving the App) where those interests are not overridden by your rights.
            </p>
            <p className="text-muted-foreground mb-2">
              You have the right to: access your data; have inaccurate data rectified; request erasure (&ldquo;right to be forgotten&rdquo;); restrict processing; data portability (we provide export in the App); object to processing based on legitimate interests; withdraw consent where processing is based on consent; and lodge a complaint with a supervisory authority (e.g. in your country of residence).
            </p>
            <p className="text-muted-foreground">
              To exercise these rights, use the in-app data export or account deletion where available, or contact us at{" "}
              <a href="mailto:support@theanima.ai" className="text-primary underline underline-offset-2 hover:opacity-80">support@theanima.ai</a>. We will respond within one month. You may also contact your local data protection authority if you believe we have not complied with applicable law.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              9. Categories of Personal Information
            </h2>
            <p className="text-muted-foreground mb-2">
              As required by the CCPA, here is a summary of the categories of
              personal information we collect and how they are used:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-muted-foreground border border-border rounded-lg">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left p-3 font-semibold text-foreground">Category</th>
                    <th className="text-left p-3 font-semibold text-foreground">Examples</th>
                    <th className="text-left p-3 font-semibold text-foreground">Sold?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3">Identifiers</td>
                    <td className="p-3">Email address, account ID</td>
                    <td className="p-3">No</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Internet activity</td>
                    <td className="p-3">App usage, pages visited</td>
                    <td className="p-3">No</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Sensitive personal information</td>
                    <td className="p-3">Personality scores, journal entries, birth details, voice recordings</td>
                    <td className="p-3">No</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">Commercial information</td>
                    <td className="p-3">Purchase history, subscription status</td>
                    <td className="p-3">No</td>
                  </tr>
                  <tr>
                    <td className="p-3">Inferences</td>
                    <td className="p-3">AI-generated personality analyses, type classifications</td>
                    <td className="p-3">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              10. Cookies and Tracking
            </h2>
            <p className="text-muted-foreground mb-3">
              We use essential cookies for authentication and session management (e.g. Clerk, Supabase, and our own session and guest identifiers). These are strictly necessary for the App to function and cannot be disabled.
            </p>
            <p className="text-muted-foreground mb-3">
              We use optional analytics cookies (e.g. PostHog) to understand how the App is used and to improve it. In the European Economic Area, UK, and other jurisdictions that require consent for non-essential cookies, we only set these cookies after you accept them via our cookie banner. You can change your preference at any time via the cookie or preference link in the footer.
            </p>
            <p className="text-muted-foreground">
              We do not use advertising cookies, third-party tracking pixels, or cross-site tracking for ads. We do not participate in ad networks or retargeting. For a full list of cookies and how to manage them, see our <a href="/cookies" className="text-primary underline underline-offset-2 hover:opacity-80">Cookie Policy</a>.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              11. Children&apos;s Privacy
            </h2>
            <p className="text-muted-foreground mb-3">
              The App is intended for adults aged 18 and older. We do not
              knowingly collect personal information from anyone under 18.
            </p>
            <p className="text-muted-foreground">
              In compliance with the Children&apos;s Online Privacy Protection Act
              (COPPA), we do not knowingly collect, use, or disclose personal
              information from children under 13. If we become aware that we have
              collected information from a child under 13, we will promptly delete
              it. If you believe a child has provided us with personal
              information, please contact us at{" "}
              <a
                href="mailto:support@theanima.ai"
                className="text-primary underline underline-offset-2 hover:opacity-80"
              >
                support@theanima.ai
              </a>
              .
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              12. Do Not Track
            </h2>
            <p className="text-muted-foreground">
              The App does not track users across third-party websites and
              therefore does not respond to Do Not Track (DNT) signals. As noted
              above, we do not engage in cross-site tracking or behavioral
              advertising.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              13. International Users and Data Transfers
            </h2>
            <p className="text-muted-foreground mb-3">
              The App is operated from and hosted in the United States. If you access the App from outside the United States (including the European Economic Area or UK), your information will be transferred to, stored, and processed in the United States and possibly other countries where our service providers operate.
            </p>
            <p className="text-muted-foreground">
              For users in the EEA and UK, we rely on appropriate safeguards for such transfers (such as the EU Commission adequacy decisions, UK adequacy regulations, or standard contractual clauses where applicable). By using the App, you acknowledge this transfer. If you do not wish your data to be transferred in this way, please do not use the App or contact us to request deletion of your account and data.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              14. Changes to This Policy
            </h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify
              you of material changes by posting a notice in the App or by sending
              an email to the address associated with your account. Your continued
              use of the App after changes are posted constitutes acceptance of
              the updated policy.
            </p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              15. Contact Us
            </h2>
            <p className="text-muted-foreground mb-3">
              If you have questions about this Privacy Policy or wish to exercise
              your privacy rights, please contact us:
            </p>
            <p className="text-muted-foreground mb-3">
              <strong>Personality Co</strong>
              <br />
              For our physical mailing address, please contact support@theanima.ai.
              <br />
              Email:{" "}
              <a
                href="mailto:support@theanima.ai"
                className="text-primary underline underline-offset-2 hover:opacity-80"
              >
                support@theanima.ai
              </a>
            </p>
            <p className="text-muted-foreground">
              If you are a California resident and believe your privacy rights
              have been violated, you may also file a complaint with the
              California Attorney General&apos;s Office at{" "}
              <a
                href="https://oag.ca.gov/contact/consumer-complaint-against-business-or-company"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:opacity-80"
              >
                oag.ca.gov
              </a>
              .
            </p>
          </section>
        </div>
    </main>
  );
}
