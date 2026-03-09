/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow large audio file uploads (max 30MB)
  experimental: {
    serverActions: {
      bodySizeLimit: '30mb',
    },
  },
  eslint: {
    // Allows production builds to complete even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Allow builds to succeed with type errors during MVP phase
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
