import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return [
      {
        source: "/resume.pdf",
        destination: "/Alexander_De_Los_Santos_Resume.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
