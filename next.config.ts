import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Static export can't use the default image optimizer, so serve images as-is.
    unoptimized: true,
  },
};

export default nextConfig;
