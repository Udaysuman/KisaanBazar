// next.config.mjs
/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  images: isDev
    ? {
        unoptimized: true, // ✅ allow any image when running locally
      }
    : {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "www.washingtonpost.com",
          },
          {
            protocol: "https",
            hostname: "arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com",
          },
          {
            protocol: "https",
            hostname: "media.cnn.com",
          },
          {
            protocol: "https",
            hostname: "npr.brightspotcdn.com",
          },
        ],
      },
};

export default nextConfig;
