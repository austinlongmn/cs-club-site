/* eslint-disable @typescript-eslint/no-require-imports */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["three"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "projects-md.cdn.austinlong.dev",
        pathname: "/images/**",
      },
    ],
  },
};

if (process.env.PROJECT_PHASE === "production_build") {
  const LicensePlugin = require("webpack-license-plugin");
  nextConfig.webpack = (config, _options) => {
    if (!config.plugins) {
      config.plugins = [];
    }
    config.plugins.push(
      new LicensePlugin({
        licenseOverrides: { "@pandacss/is-valid-prop@0.41.0": "MIT" },
      })
    );
    return config;
  };
}

export default nextConfig;
