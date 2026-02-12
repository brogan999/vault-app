/**
 * Reusable JSON-LD structured data component.
 *
 * Usage:
 *   <JsonLd data={organizationSchema} />
 *   <JsonLd data={[organizationSchema, websiteSchema]} />
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type JsonLdData = Record<string, any>;

interface JsonLdProps {
  data: JsonLdData | JsonLdData[];
}

export function JsonLd({ data }: JsonLdProps) {
  const jsonLd = Array.isArray(data) ? data : [data];

  return (
    <>
      {jsonLd.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Pre-built schema factories                                         */
/* ------------------------------------------------------------------ */

const BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://theanima.ai";

/** Organization schema — used site-wide. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Personality Co",
    alternateName: "Anima",
    url: BASE_URL,
    logo: `${BASE_URL}/icon.png`,
    description:
      "A privacy-focused AI companion that combines psychometric science and symbolic traditions for personalized personality insights.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@theanima.ai",
      contactType: "customer support",
    },
  };
}

/** WebSite schema with search action — used on the homepage. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Anima by Personality Co",
    url: BASE_URL,
    description:
      "Ten personality frameworks. One AI companion. A living portrait of who you are.",
    publisher: {
      "@type": "Organization",
      name: "Personality Co",
    },
  };
}

/** WebPage schema for generic pages. */
export function webPageSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    publisher: {
      "@type": "Organization",
      name: "Personality Co",
    },
  };
}

/** FAQPage schema — used on /faq. */
export function faqPageSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * SoftwareApplication + Offer schemas — used on /pricing.
 * Models Anima as a SaaS product with Free and Pro tiers.
 */
export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Anima",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    url: BASE_URL,
    description:
      "AI-powered personality assessment platform combining psychometric science and symbolic traditions.",
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        price: "0",
        priceCurrency: "USD",
        description:
          "All 10 assessments with basic results, 10 Mirror messages/day, mood journaling, 50MB vault storage.",
      },
      {
        "@type": "Offer",
        name: "Pro Monthly",
        price: "14.99",
        priceCurrency: "USD",
        billingIncrement: "P1M",
        description:
          "All premium reports, 300 Mirror messages/month, voice journaling, 10GB vault storage, cross-framework synthesis.",
      },
      {
        "@type": "Offer",
        name: "Pro Annual",
        price: "119.99",
        priceCurrency: "USD",
        billingIncrement: "P1Y",
        description:
          "All Pro features billed annually — save 33%.",
      },
    ],
  };
}

/** Article / WebPage schema for content-heavy pages like /our-framework. */
export function articleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    publisher: {
      "@type": "Organization",
      name: "Personality Co",
      url: BASE_URL,
    },
    ...(opts.datePublished && { datePublished: opts.datePublished }),
    ...(opts.dateModified && { dateModified: opts.dateModified }),
  };
}
