/** @type {import('next').NextConfig} */
// const nextConfig = {
// 	reactStrictMode: true,
// 	images: {
// 		domains: ['cdn.pixabay.com'],
// 	},
// };

// export default nextConfig;

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.pixabay.com',
			},
		],
	},
};
export default nextConfig;
