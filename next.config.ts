import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "csc-site.imgix.net",
      },
      {
        // Necessary for Austin's projects page
        protocol: "https",
        hostname: "projects-md.cdn.austinlong.dev",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;

initOpenNextCloudflareForDev();
