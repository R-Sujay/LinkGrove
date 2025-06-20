import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "reliable-jaguar-315.convex.cloud" },
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "randomuser.me" },
    ],
  },
};

export default nextConfig;
