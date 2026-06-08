import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    resolveAlias: {
      "@base-ui/react/button": "@base-ui/react/button/index.js",
    },
  },
};

export default nextConfig;
