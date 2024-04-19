/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/instagram",
                destination: "https://www.instagram.com/casey.at.zoos/",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
