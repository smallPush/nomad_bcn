import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: ['*'], // Allow all origins in dev to avoid access issues
  },
};

export default nextConfig;
