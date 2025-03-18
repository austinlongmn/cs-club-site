/* eslint-disable @typescript-eslint/no-require-imports */
import type { NextConfig } from "next";
import { PHASE_PRODUCTION_BUILD } from "next/constants";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

if (process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD) {
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
