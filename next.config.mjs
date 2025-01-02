/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      domains: ['beta.upfront.global', 's3.ap-south-1.amazonaws.com'], // Include all required domains
  },
};

export default nextConfig;
