import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Anima",
  description:
    "Read the Terms of Service for Anima, the AI-powered personality assessment platform.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 lg:px-8 lg:py-16">
        <h1 className="text-3xl font-extrabold text-foreground font-serif lg:text-4xl mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: February 11, 2026
        </p>
        <div className="prose-legal space-y-8 text-foreground text-sm leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground">
              By accessing and using Anima (&ldquo;the App&rdquo;), operated
              by Bald Labs, Inc (&ldquo;Company&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), you
              agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;).
              If you do not agree with any part of these Terms, please do not use
              the App.
            </p>
            <p className="text-muted-foreground mt-3 text-xs">
              If you are a consumer in the European Union, United Kingdom, or another jurisdiction that grants mandatory consumer rights, nothing in these Terms affects those statutory rights (including the right to bring a claim in your country of residence where applicable).
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              2. Description of the Service
            </h2>
            <p className="text-muted-foreground mb-3">
              Anima is a consumer personality and self-discovery platform. The
              App provides personality assessments (such as Big Five, MBTI,
              Enneagram, DISC), intelligence evaluations (IQ, Emotional
              Intelligence), strengths assessments, astrology-based reports (natal
              chart, Vedic, Chinese Zodiac, Mayan), numerology (Life Path), Human
              Design, career aptitude tools, an AI chat companion (&ldquo;Mirror&rdquo;),
              voice and text journaling, and a personal data vault to store and
              review your results.
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              Consumer Information Product
            </p>
            <p className="text-muted-foreground">
              Anima is a consumer information product for personal
              entertainment, self-reflection, and education. It is comparable to
              services like 16Personalities, genetic ancestry platforms, or
              fitness tracking applications. We provide data and interpretations
              for personal use only.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              3. Not Professional Advice
            </h2>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              Important Disclaimer
            </p>
            <p className="text-muted-foreground mb-3">
              The App is <strong>not</strong> a medical, psychological,
              psychiatric, or therapeutic service. Use of the App does not create
              any professional-client relationship. The Company does not employ or
              contract with licensed psychologists, psychiatrists, or mental
              health professionals to provide this service.
            </p>
            <p className="text-muted-foreground mb-2 font-semibold">
              The App is NOT:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-3">
              <li>Medical or psychological advice</li>
              <li>A clinical diagnostic tool for any condition</li>
              <li>A substitute for professional mental health care</li>
              <li>A replacement for consultation with qualified healthcare providers</li>
            </ul>
            <p className="text-muted-foreground">
              All scores, analyses, and AI-generated interpretations are based on
              self-reported responses and established frameworks. They are
              intended for personal reflection only. If you are experiencing
              mental health concerns, please consult a licensed professional.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              4. Eligibility
            </h2>
            <p className="text-muted-foreground">
              You must be at least 18 years of age to create an account and use
              the App. By using the App, you represent and warrant that you meet
              this age requirement and have the legal capacity to enter into these
              Terms.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              5. Account Registration
            </h2>
            <p className="text-muted-foreground mb-3">
              You may need to create an account to access certain features. You
              are responsible for maintaining the confidentiality of your account
              credentials and for all activity that occurs under your account. You
              agree to notify us immediately of any unauthorized use.
            </p>
            <p className="text-muted-foreground">
              We may suspend or terminate your account at our discretion if we
              believe you have violated these Terms or are engaging in fraudulent
              or harmful activity.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              6. AI-Generated Content
            </h2>
            <p className="text-muted-foreground mb-2">
              The App uses artificial intelligence (including large language
              models) to generate personality analyses, chat responses, journal
              reflections, and other insights. You acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-3">
              <li>AI-generated content is produced by language models and has not been reviewed by a licensed professional</li>
              <li>Outputs may be inaccurate, incomplete, or inconsistent</li>
              <li>Different users with identical inputs may receive different results</li>
              <li>AI-generated content is provided &ldquo;as-is&rdquo; without guarantee of accuracy or fitness for any purpose</li>
            </ul>
            <p className="text-muted-foreground">
              You should not rely on AI-generated content for important life
              decisions, medical choices, or professional guidance.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              7. Payments, Subscriptions, and Refunds
            </h2>
            <p className="text-muted-foreground mb-3">
              Certain features of the App require payment, including premium
              reports, assessment bundles, message credit packs, and the Pro
              subscription plan. All payments are processed securely through
              Stripe.
            </p>
            <p className="text-muted-foreground mb-3">
              <strong>Subscriptions:</strong> Pro subscriptions renew
              automatically at the end of each billing period (monthly or annual).
              You may cancel at any time from your account settings; cancellation
              takes effect at the end of the current billing period.
            </p>
            <p className="text-muted-foreground">
              <strong>Refunds:</strong> Due to the digital nature of our products,
              all sales are final once the content has been delivered or accessed.
              If you experience a technical issue preventing delivery, please
              contact us at{" "}
              <a
                href="mailto:support@theanima.ai"
                className="text-primary underline underline-offset-2 hover:opacity-80"
              >
                support@theanima.ai
              </a>
              . If you are a consumer in the EEA or UK, your statutory rights (including any right to withdraw from a distance contract within the applicable period) remain unaffected.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              8. User Conduct
            </h2>
            <p className="text-muted-foreground mb-2">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Use the App for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to the App or its systems</li>
              <li>Use the results to diagnose yourself or others with any medical or psychological condition</li>
              <li>Scrape, reverse-engineer, or reproduce any portion of the App</li>
              <li>Share your account credentials with third parties</li>
              <li>Misrepresent your identity or impersonate another person</li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              9. Intellectual Property
            </h2>
            <p className="text-muted-foreground mb-3">
              All content, features, and functionality of the App — including
              text, graphics, logos, assessments, algorithms, and AI models — are
              owned by Bald Labs, Inc or its licensors and are protected by
              U.S. and international intellectual property laws.
            </p>
            <p className="text-muted-foreground">
              You retain ownership of the data you provide (e.g., assessment
              responses, journal entries). By using the App, you grant us a
              limited license to process your data solely for the purpose of
              providing the service.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              10. Assumption of Risk
            </h2>
            <p className="text-muted-foreground mb-2">
              By using this service, you acknowledge and accept that:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-3">
              <li>Personality assessment involves inherent uncertainty</li>
              <li>Self-report data has known limitations</li>
              <li>You may encounter information about yourself that is unexpected or uncomfortable</li>
              <li>Psychological self-reflection can occasionally trigger emotional responses</li>
              <li>You are solely responsible for how you interpret and use your results</li>
            </ul>
            <p className="text-muted-foreground">
              You voluntarily assume all risks associated with using this service.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              11. Limitation of Liability
            </h2>
            <p className="text-muted-foreground mb-3">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, Bald Labs, Inc
              AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS,
              DATA, USE, OR GOODWILL, ARISING FROM YOUR USE OF OR INABILITY TO
              USE THE APP.
            </p>
            <p className="text-muted-foreground">
              IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID TO
              US IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE
              CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              12. Indemnification
            </h2>
            <p className="text-muted-foreground mb-2">
              You agree to indemnify, defend, and hold harmless Bald Labs, Inc,
              its officers, directors, employees, and agents from any claims,
              damages, losses, or expenses (including reasonable attorneys&apos;
              fees) arising from:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Your use of the App</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Any claim that your use of results caused harm to yourself or others</li>
            </ul>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              13. Privacy
            </h2>
            <p className="text-muted-foreground">
              Your use of the App is also governed by our{" "}
              <Link href="/privacy" className="text-primary underline underline-offset-2 hover:opacity-80">
                Privacy Policy
              </Link>
              , which describes how we collect, use, and protect your personal
              information.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              14. Modifications to Terms
            </h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms at any time. We will
              notify you of material changes by posting a notice in the App or
              sending an email to the address associated with your account.
              Continued use of the App after changes are posted constitutes
              acceptance of the modified Terms.
            </p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              15. Termination
            </h2>
            <p className="text-muted-foreground">
              We may terminate or suspend your access to the App at any time, with
              or without cause, and with or without notice. Upon termination, your
              right to use the App ceases immediately. Sections that by their
              nature should survive termination (including limitation of liability,
              indemnification, and dispute resolution) shall survive.
            </p>
          </section>

          {/* 16 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              16. Dispute Resolution
            </h2>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              Arbitration Agreement — Please Read Carefully
            </p>
            <p className="text-muted-foreground mb-3">
              Any dispute, controversy, or claim arising out of or relating to
              these Terms or the App shall be resolved through binding arbitration
              administered by JAMS in accordance with its Streamlined Arbitration
              Rules and Procedures. The arbitration shall take place in San
              Francisco, California.
            </p>
            <p className="text-muted-foreground mb-3">
              By using this service, you agree that the Federal Arbitration Act
              governs the interpretation and enforcement of this arbitration
              provision, and you waive your right to a jury trial.
            </p>
            <p className="text-muted-foreground mb-3">
              <strong>Class Action Waiver:</strong> You agree to waive any right
              to participate in class action lawsuits, class-wide arbitration, or
              any consolidated or representative proceedings against Bald Labs, Inc.
              All claims must be brought in your individual capacity.
            </p>
            <p className="text-muted-foreground mb-3">
              <strong>Exceptions:</strong> This arbitration agreement does not
              apply to: (a) disputes that qualify for small claims court in your
              jurisdiction; (b) claims for injunctive relief to prevent
              unauthorized use of intellectual property; or (c) complaints filed
              with government agencies that may seek relief on your behalf.
            </p>
            <p className="text-muted-foreground">
              <strong>Costs:</strong> Each party shall bear its own costs and
              attorneys&apos; fees. If any portion of this arbitration clause is
              found unenforceable, the remaining portions shall remain in effect.
            </p>
          </section>

          {/* 17 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              17. Governing Law
            </h2>
            <p className="text-muted-foreground">
              These Terms shall be governed by and construed in accordance with
              the laws of the State of Delaware, without regard to its conflict of
              law principles. For matters not subject to arbitration, you consent
              to the exclusive jurisdiction of the state and federal courts
              located in San Francisco, California.
            </p>
          </section>

          {/* 18 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              18. Severability
            </h2>
            <p className="text-muted-foreground">
              If any provision of these Terms is found to be invalid, illegal, or
              unenforceable by a court of competent jurisdiction, such invalidity
              shall not affect the validity of the remaining provisions, which
              shall remain in full force and effect. The invalid provision shall
              be modified to the minimum extent necessary to make it valid and
              enforceable while preserving the parties&apos; original intent.
            </p>
          </section>

          {/* 19 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              19. Entire Agreement
            </h2>
            <p className="text-muted-foreground">
              These Terms, together with our Privacy Policy, constitute the entire
              agreement between you and Bald Labs, Inc regarding your use of the
              App and supersede all prior agreements, understandings, and
              representations.
            </p>
          </section>

          {/* 20 */}
          <section>
            <h2 className="text-lg font-bold font-serif text-foreground mb-3">
              20. Contact
            </h2>
            <p className="text-muted-foreground mb-2">
              If you have questions about these Terms of Service, please contact
              us at:
            </p>
            <p className="text-muted-foreground">
              <strong>Bald Labs, Inc</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:support@theanima.ai"
                className="text-primary underline underline-offset-2 hover:opacity-80"
              >
                support@theanima.ai
              </a>
            </p>
          </section>
        </div>
    </main>
  );
}
