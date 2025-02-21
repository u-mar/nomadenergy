import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true, // This will disable ESLint during the build process
    },
    images: {
      domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    },

  
};

export default nextConfig;
