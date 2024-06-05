/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
    env:"production",
	output: 'standalone',
};

module.exports = withBundleAnalyzer(nextConfig);
