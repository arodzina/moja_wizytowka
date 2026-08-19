import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/diagnoza",
        destination: "/poziom",
        permanent: true,
      },
      {
        source: "/diagnoza/admin",
        destination: "/poziom/admin",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
