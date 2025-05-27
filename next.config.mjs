/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: 'raw-loader',
    });
    return config;
  },
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true, // Enables JSX namespaces for styled-components
  },
};

export default nextConfig;