import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
  
  },
  reactStrictMode: true, // Mantém o modo estrito do React
  compiler: {
    styledComponents: true, // Se estiver usando Styled Components
  },
  
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
};

export default nextConfig;
