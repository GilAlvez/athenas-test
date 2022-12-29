/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	headers: async () => {
		return [
			{ source: '/api/v1/:path*', headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }] },
		];
	},
};

module.exports = nextConfig;
