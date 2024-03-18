import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },{
        protocol:"https",
        hostname:"movie4kto.net"
      }
    ],
  },
};

export default nextConfig;
