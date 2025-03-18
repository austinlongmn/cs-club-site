/* eslint-disable @typescript-eslint/no-require-imports */
import type { NextConfig } from "next";
const LicensePlugin = require("webpack-license-plugin");

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

if (process.env.NODE_ENV == "production") {
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
