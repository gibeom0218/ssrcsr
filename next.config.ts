import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com"], // 허용할 도메인 추가
  },
};

export default nextConfig;
