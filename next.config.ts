import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
    remotePatterns: [
      new URL("https://logo.clearbit.com/**"),
      new URL("https://res.cloudinary.com/**"),
      new URL("https://cdn.hashnode.com/**"),
    ],
  },
};

export default nextConfig;
