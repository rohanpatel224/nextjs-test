/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
    env: { NEXT_PUBLIC_REACT_APP_ENV : "production" },
	output: 'standalone',
};

module.exports = withBundleAnalyzer(nextConfig);
