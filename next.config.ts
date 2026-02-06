import type { NextConfig } from "next";
import path from "path";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  serverExternalPackages: ["pdf-parse"],
  /* config options here */
  images: {
    domains: [],
  },
  experimental: {
    // Enable if needed for better performance
    optimizePackageImports: ["lucide-react", "recharts"],
  },
  // Avoid "An unexpected response was received from the server" for Server Actions
  serverActions: {
    bodySizeLimit: "2mb",
  },
};

export default withNextIntl(nextConfig);
