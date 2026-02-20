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

// Use .then() instead of top-level await to avoid ERR_REQUIRE_ASYNC_MODULE.
// Next.js internally uses require() to load the compiled config, which cannot
// handle async ES modules produced by top-level await.
import("@opennextjs/cloudflare")
  .then(({ initOpenNextCloudflareForDev }) => {
    initOpenNextCloudflareForDev();
  })
  .catch(() => {
    // Doesn't work on Arm64 Windows.
    console.warn(
      "Could not import @opennextjs/cloudflare. Cloudflare integration will be disabled in development."
    );
  });
