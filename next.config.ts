import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  cleanDistDir: true,
  output: "standalone",
  // outputFileTracingRoot: "../sst",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
