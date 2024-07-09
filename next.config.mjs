/** @type {import('next').NextConfig} */

const baseURL = process.env.NEXT_BASE_URL;

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: "/:path*",
                destination: `${baseURL}:path*`,
            },
        ];
    },
    experimental: {
        forceSwcTransforms: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;

