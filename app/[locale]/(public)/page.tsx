import { LandingPage } from "@/components/landing-page";
import { JsonLd, websiteSchema } from "@/components/seo/json-ld";

export default function PublicHomePage() {
  return (
    <>
      <JsonLd data={websiteSchema()} />
      <LandingPage />
    </>
  );
}