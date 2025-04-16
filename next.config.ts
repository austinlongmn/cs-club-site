/* eslint-disable @typescript-eslint/no-require-imports */
import type { NextConfig } from "next";
import { PHASE_PRODUCTION_BUILD } from "next/constants";

export default function config(phase: string) {
  const nextConfig: NextConfig = {
    output: "standalone",
    images: {
      remotePatterns: [
        {
          // Necessary for Austin's projects page
          protocol: "https",
          hostname: "projects-md.cdn.austinlong.dev",
          pathname: "/images/**",
        },
      ],
    },
  };

  if (process.env.PROJECT_PHASE == "production_build") {
    nextConfig.assetPrefix = "https://cdn.unwcsclub.dev";
  }

  // Generate OSS attributions only when using Webpack (doesn't work with Turbopack)
  if (phase === PHASE_PRODUCTION_BUILD) {
    const LicensePlugin = require("webpack-license-plugin");
    nextConfig.webpack = (config, _options) => {
      if (!config.plugins) {
        config.plugins = [];
      }
      config.plugins.push(new LicensePlugin({}));
      return config;
    };
  }

  return nextConfig;
}
