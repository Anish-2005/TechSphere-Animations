/** @type {import('next').NextConfig} */
interface ImagesConfig {
  domains: string[];
}

interface WebpackRule {
  test: RegExp;
  exclude?: RegExp;
  use: Array<string | Record<string, any>>;
}

interface NextConfig {
  reactStrictMode: boolean;
  images: ImagesConfig;
  turbopack?: any;
  // avoid requiring webpack type declarations
  webpack?: (config: any) => any;
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  turbopack: {},
  webpack: (config) => {
    config.module!.rules!.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    } as WebpackRule);
    return config;
  },
}

module.exports = nextConfig