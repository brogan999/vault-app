import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "FAQ — The Vault",
    description:
      "Frequently asked questions about personality tests, The Mirror, esoteric frameworks, pricing, and your data.",
  };
}

/* ------------------------------------------------------------------ */
/*  FAQ data — mirrors the full copy provided                         */
/* ------------------------------------------------------------------ */

interface FaqSection {
  heading: string;
  items: { q: string; a: string }[];
}

const SECTIONS: FaqSection[] = [
  {
    heading: "About the Platform",
    items: [
      {
        q: "What is this platform, exactly?",
        a: "We\u2019re a self-discovery platform that brings together ten different personality and self-understanding frameworks \u2014 four based on modern psychometric science and six drawn from ancient symbolic traditions \u2014 plus an AI companion called The Mirror that weaves your results together into a conversation about you.\n\nThe idea is simple: no single framework captures everything about who you are. But ten of them, held side by side, get a lot closer than any one alone.",
      },
      {
        q: "Why combine scientific tests with things like astrology?",
        a: "Because they do different things. Our psychometric assessments (Big Five, Personality Types, Enneagram, Work Style Profile) measure real psychological constructs with validated question sets. Our esoteric frameworks (Western Astrology, Vedic Astrology, Numerology, Human Design, Chinese Zodiac, Mayan Astrology) offer symbolic languages for self-reflection that billions of people across thousands of years have found meaningful.\n\nWe never blur the line between them. Every result on the platform is clearly labeled so you always know whether you\u2019re looking at a psychometric finding or a symbolic framework. We respect you enough to let you decide what resonates.",
      },
      {
        q: "Do I have to complete all ten frameworks?",
        a: "No. You can take just the assessments that interest you. That said, the platform \u2014 and especially The Mirror \u2014 gets richer with every framework you add. The magic tends to happen when different lenses start telling a coherent story about you that none of them could have told alone.",
      },
      {
        q: "Is this a replacement for therapy?",
        a: "No, and it\u2019s not trying to be. This is a tool for self-discovery and personal growth \u2014 for curiosity, not diagnosis. If you\u2019re experiencing mental health challenges, please work with a qualified professional. We\u2019re a mirror, not a medicine.",
      },
    ],
  },
  {
    heading: "The Psychometric Assessments",
    items: [
      {
        q: "How accurate are your personality tests?",
        a: "We take accuracy seriously. Our psychometric assessments are built using established methodologies: validated question items, 7-point Likert scales, balanced positive and negative keying, attention checks, and reverse scoring to catch inconsistent responses.\n\nWe monitor Cronbach\u2019s alpha (a measure of internal consistency) across all scales, run factor analyses as our respondent base grows, and track test-retest reliability. We aim for the standards expected in professional psychometric instruments \u2014 not because it\u2019s easy, but because you deserve real answers, not personality theater.",
      },
      {
        q: "What\u2019s the Big Five (OCEAN) assessment?",
        a: "The Big Five is the most scientifically validated personality model in existence. It measures five broad dimensions \u2014 Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism \u2014 using items derived from the International Personality Item Pool (IPIP). Our assessment places you on a spectrum for each dimension, with optional facet-level detail within each one.",
      },
      {
        q: "What\u2019s the Personality Type assessment?",
        a: "Based on the tradition of psychological types originated by Carl Jung, this assessment measures four dimensions (Extraversion/Introversion, Sensing/Intuition, Thinking/Feeling, Judging/Perceiving) to arrive at one of 16 personality types. Each type has a unique character name and miniature world in our art style.\n\nImportantly, we show you the spectrum underneath your type. If you\u2019re 51% Thinking and 49% Feeling, you should know that \u2014 because that nuance matters.",
      },
      {
        q: "What\u2019s the Enneagram assessment?",
        a: "The Enneagram describes nine fundamental motivational patterns \u2014 the core desires and fears that drive your behavior. Where the Big Five measures what your personality looks like, the Enneagram goes after why. Our assessment identifies your core type, wing, and lines of growth and stress.\n\nWe\u2019re transparent that the Enneagram\u2019s empirical validation is still evolving compared to the Big Five. We present it as a powerful tool for reflection and self-understanding.",
      },
      {
        q: "What\u2019s the Work Style Profile?",
        a: "Based on the well-established behavioral model measuring Dominance, Influence, Steadiness, and Conscientiousness, this assessment reveals how you collaborate, communicate, and lead in professional settings. It\u2019s practical rather than philosophical \u2014 designed to help you work better with others.",
      },
      {
        q: "My results don\u2019t feel right. What happened?",
        a: "A few possibilities. First, make sure you answered honestly rather than how you think you \u201cshould\u201d answer \u2014 the tests work best when you respond instinctively. Second, consider whether you were distracted, tired, or rushing. Third, personality is complex; sometimes a result that feels wrong at first makes more sense as you sit with it.\n\nIf you\u2019ve taken the assessment thoughtfully and something still feels fundamentally off, you can retake it. Your most recent result will be used. If you think something is genuinely broken, contact us.",
      },
      {
        q: "What if my different frameworks contradict each other?",
        a: "This happens \u2014 and it\u2019s actually one of the most interesting things about using multiple lenses. Your Big Five might show low Extraversion while your birth chart features a prominent Leo placement. Your Enneagram might suggest a core fear around security while your Human Design says you\u2019re built to take risks.\n\nThese aren\u2019t errors. Different frameworks measure different things at different levels. The Big Five captures behavioral tendencies. The Enneagram captures motivations. Astrology offers symbolic language. When they \u201cdisagree,\u201d they\u2019re usually revealing genuine complexity in who you are \u2014 the kind of complexity that a single test would simply flatten.\n\nThe Mirror is particularly good at helping you explore these tensions. Ask it about the contradiction, and it will often find a thread connecting what initially seemed like conflicting data.",
      },
      {
        q: "Can I retake the assessments?",
        a: "Yes. We recommend waiting at least a few weeks between attempts so you can approach the questions fresh. Your most recent results will be used in your profile and by The Mirror.",
      },
      {
        q: "Why 7-point scales instead of agree/disagree?",
        a: "Because personality exists on a spectrum, and binary choices lose too much information. A 7-point scale lets you express nuance \u2014 the difference between \u201cslightly agree\u201d and \u201cstrongly agree\u201d is meaningful, and it makes your results more accurate and reliable.",
      },
    ],
  },
  {
    heading: "The Esoteric Frameworks",
    items: [
      {
        q: "Do you actually believe in astrology?",
        a: "We believe in giving you accurate information and letting you decide what resonates. Our position is that esoteric frameworks offer symbolic languages for self-reflection that many people find genuinely valuable. We calculate every chart with the highest possible precision \u2014 using the Swiss Ephemeris for astronomical calculations \u2014 because if you\u2019re going to explore these frameworks, they should at least be done right.\n\nWe clearly label esoteric frameworks as symbolic rather than empirically validated. We don\u2019t make scientific claims about them, and we don\u2019t pretend they\u2019re something they\u2019re not.",
      },
      {
        q: "Why are my Western and Vedic astrology signs different?",
        a: "Western Astrology uses the Tropical zodiac (based on the seasons), while Vedic Astrology uses the Sidereal zodiac (based on the actual positions of the constellations). Because of the Earth\u2019s axial precession, these two systems have drifted about 24 degrees apart over the centuries. So your Vedic placements are often one sign earlier than your Western ones.\n\nThis isn\u2019t a contradiction \u2014 it\u2019s two different coordinate systems looking at the same sky. Both are calculated correctly.",
      },
      {
        q: "What information do you need for the esoteric frameworks?",
        a: "At minimum, your date of birth. For more detailed results (especially for astrology and Human Design), we\u2019ll ask for your birth time and birth location. The more precise your birth data, the more detailed your charts can be.\n\nIf you don\u2019t know your exact birth time, we can still generate partial profiles \u2014 but some features (like your Rising sign, house placements, and Human Design profile) require a time to calculate accurately.",
      },
      {
        q: "What is Human Design?",
        a: "Human Design is a modern synthesis drawing from astrology, the I Ching, the Kabbalah, the Chakra system, and quantum physics. It produces a detailed blueprint (called a BodyGraph) showing your Type, Strategy, Authority, and much more. It\u2019s the newest framework on our platform and the one that tends to provoke the strongest reactions \u2014 both from people who find it uncannily specific and from skeptics who question its foundations.\n\nWe present it because our users asked for it, and because its specificity makes it a powerful mirror for self-reflection.",
      },
      {
        q: "What is Mayan Astrology?",
        a: "The Tzolkin, the sacred 260-day calendar of the Maya, assigns each day a unique combination of one of 20 day signs and one of 13 tones. Your Galactic Signature \u2014 the sign and tone of your birth day \u2014 is said to reveal your purpose and the energy you carry. It\u2019s perhaps our most unfamiliar framework, and that unfamiliarity is itself valuable.",
      },
    ],
  },
  {
    heading: "The Mirror (AI Chat)",
    items: [
      {
        q: "What is The Mirror?",
        a: "The Mirror is an AI companion that has access to your complete profile across all the frameworks you\u2019ve completed. You can have a conversation with it about yourself \u2014 asking questions about your patterns, your relationships, your career, your growth edges \u2014 and it draws on every score, every sign, and every type to offer perspectives you might not have considered.\n\nIt\u2019s not a therapist. It\u2019s not an oracle. It\u2019s a mirror that talks back.",
      },
      {
        q: "Is The Mirror giving me advice?",
        a: "The Mirror offers perspectives, not prescriptions. It synthesizes insights from your various profiles to help you explore questions about yourself from multiple angles. Think of it as a very well-informed conversation partner who happens to know your Big Five scores, your Enneagram type, your natal chart, and your Human Design strategy all at once.\n\nAs with any AI, use your own judgment. The Mirror is a tool for reflection, not a substitute for professional guidance.",
      },
      {
        q: "Does The Mirror remember our conversations?",
        a: "Yes, within your session. The Mirror maintains context throughout a conversation so it can build on earlier points and go deeper. Your conversation history is tied to your account.",
      },
      {
        q: "Can I share my Mirror conversations?",
        a: "You can export or screenshot your conversations for personal use. Just remember that your Mirror conversations may contain personal reflections \u2014 share thoughtfully.",
      },
    ],
  },
  {
    heading: "Your Account & Data",
    items: [
      {
        q: "What data do you collect?",
        a: "We collect the information you provide (birth data, assessment responses) and standard usage data. We don\u2019t sell your personal data to third parties. Your personality data is yours \u2014 it exists to power your experience on our platform, not to train advertising models.\n\nSee our Privacy Policy for the full details.",
      },
      {
        q: "Can I export or download my profile data?",
        a: "Yes. You can download a complete summary of your results across all frameworks from your account settings. This includes your psychometric scores, esoteric profiles, and any cross-framework insights the platform has generated. Your data is yours.",
      },
      {
        q: "Can I delete my account and data?",
        a: "Yes. You can delete your account at any time from your account settings, and we\u2019ll remove your personal data in accordance with our Privacy Policy and applicable data protection laws.",
      },
      {
        q: "Can I share my results?",
        a: "Yes! Each of your profiles generates a shareable summary that you can send to friends or post on social media. Sharing is entirely optional and always under your control.",
      },
      {
        q: "Is my birth data safe?",
        a: "We treat your birth data with the same care as any other personal information. It\u2019s encrypted in transit and at rest, and it\u2019s never shared with third parties. We understand that birth data can feel particularly personal \u2014 especially when it\u2019s being used for esoteric calculations \u2014 and we take that seriously.",
      },
    ],
  },
  {
    heading: "Pricing & Plans",
    items: [
      {
        q: "What's included for free?",
        a: "All 10 assessments are free to take: you get a limited result summary for each (e.g. Big Five dimension scores, type + short description for Personality Type and Enneagram, Sun/Moon/Rising for Western Astrology, and similar top-level results for the other frameworks). Free users get 10 Mirror messages per day (reset at midnight UTC), mood journaling (5 entries per week), 50MB of Vault storage, and basic shareable result cards.",
      },
      {
        q: "What are premium reports?",
        a: "After taking any assessment, you can purchase a one-time premium report that goes much deeper — full facet breakdowns, wings, full chart, etc. Individual reports range from $9.99 to $19.99. Bundles: All 4 Psychometric $39.99, All 6 Esoteric $69.99, The Complete Portrait (all 10) $99.99. We also offer specialty reports: Career Compass ($29.99), Relationship Blueprint ($29.99), and Annual Self Portrait ($19.99). Reports are yours to keep forever.",
      },
      {
        q: "What does Pro include?",
        a: "Pro includes everything in Free plus all premium reports (current and future), 300 Mirror messages per month (pooled, with rollover up to 100), voice journaling with AI analysis, custom AI persona settings, unlimited journal entries, growth trend reports, 10GB Vault storage, proactive AI check-ins, cross-framework synthesis dashboard, and export all data. Pro is $14.99/month or $119.99/year (save 33%) with a 7-day free trial.",
      },
      {
        q: "What's the difference between buying reports and subscribing to Pro?",
        a: "If you only want to go deep on one or two frameworks, individual reports are the most cost-effective option. Pro gives you all reports plus 300 Mirror messages per month (with optional top-up packs if you need more). If you cancel Pro, you keep any reports you bought individually; reports unlocked only via Pro are no longer accessible until you resubscribe or buy them.",
      },
      {
        q: "Can I cancel my subscription?",
        a: "Yes, at any time. Your access continues through the end of your current billing period. Any individual reports you've purchased remain accessible regardless of your subscription status, and your data stays on the platform whether or not you're a subscriber.",
      },
    ],
  },
  {
    heading: "Troubleshooting",
    items: [
      {
        q: "The page isn\u2019t loading properly",
        a: "Try refreshing the page, clearing your browser cache, or trying a different browser. If you\u2019re on a mobile device, make sure you\u2019re using the latest version of your browser. If the problem persists, let us know \u2014 include what device and browser you\u2019re using.",
      },
      {
        q: "My chart/calculation looks wrong",
        a: "If an esoteric calculation looks off, first double-check that your birth data is entered correctly \u2014 especially the birth time and location. Even small differences can shift chart calculations significantly. If your birth data is correct and something still looks wrong, contact us with the details and we\u2019ll investigate.",
      },
      {
        q: "I can\u2019t find my city in the birth location search",
        a: "Our location database covers most cities and towns worldwide, but occasionally a very small location may be missing. Try searching for the nearest larger city or town. If you\u2019re still stuck, contact us and we\u2019ll add your location.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Page component                                                    */
/* ------------------------------------------------------------------ */

export default async function FAQPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 lg:px-8 lg:py-16">
        <h1 className="text-3xl font-extrabold font-serif text-foreground tracking-tight lg:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Everything you might want to know about our assessments, The Mirror,
          your data, and how it all fits together.
        </p>

        {/* Section navigation */}
        <nav className="mt-8 flex flex-wrap gap-x-4 gap-y-1 text-sm" aria-label="FAQ sections">
          {SECTIONS.map((s) => (
            <a
              key={s.heading}
              href={`#${slugify(s.heading)}`}
              className="text-muted-foreground underline decoration-muted-foreground/40 underline-offset-2 transition-colors hover:text-foreground hover:decoration-foreground"
            >
              {s.heading}
            </a>
          ))}
        </nav>

        {/* Sections */}
        <div className="mt-12 space-y-14">
          {SECTIONS.map((section) => (
            <section
              key={section.heading}
              id={slugify(section.heading)}
              className="scroll-mt-24"
            >
              <h2 className="text-xl font-bold font-serif text-foreground sm:text-2xl">
                {section.heading}
              </h2>

              <ul className="mt-6 space-y-8">
                {section.items.map((faq, i) => (
                  <li key={i}>
                    <h3 className="text-base font-semibold text-foreground sm:text-lg">
                      {faq.q}
                    </h3>
                    {faq.a.split("\n\n").map((para, j) => (
                      <p
                        key={j}
                        className="mt-2 text-muted-foreground leading-relaxed"
                      >
                        {para}
                      </p>
                    ))}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-14 text-sm text-muted-foreground">
          Still have questions? Check our{" "}
          <Link href="/knowledge-base" className="text-primary hover:underline">
            Knowledge Base
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="text-primary hover:underline">
            contact us
          </Link>
          .
        </p>
    </main>
  );
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
