/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/fr/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;