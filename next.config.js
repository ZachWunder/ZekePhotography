/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    dangerouslyAllowSVG: true,
    loader: "custom",
    loaderFile: "./imageLoader.js",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
    ],
  },
};

module.exports = nextConfig;
