/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cms.caseydyke.com",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/instagram",
                destination: "https://www.instagram.com/casey.at.zoos/",
                permanent: true,
            },
            {
                source: "/marwell-2023",
                destination:
                    "https://www.facebook.com/photo.php?fbid=656726889834219&set=pb.100064907403337.-2207520000&type=3",
                permanent: true,
            },
            {
                source: "/biaza-2022",
                destination:
                    "https://biaza.org.uk/news/detail/biaza-annual-photo-competition-2022-winners-feature-some-of-the-weirdest-lesser-known-zoo-and-aquarium-animals",
                permanent: true,
            },
            {
                source: "/biaza-2023-reptile",
                destination:
                    "https://biaza.org.uk/news/detail/biaza-photo-competition-2023-the-stunning-winning-photos",
                permanent: true,
            },
            {
                source: "/biaza-2023-invertebrate",
                destination:
                    "https://biaza.org.uk/news/detail/biaza-photo-competition-2023-the-stunning-winning-photos",
                permanent: true,
            },
        ];
    },
    headers() {
        return [
            {
                source: "/(.*)",
                headers: securityHeaders,
            },
        ];
    },
};

const ContentSecurityPolicy = `
    default-src 'self' vercel.live analytics.caseydyke.com;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' vercel.live analytics.caseydyke.com;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self';
`;

const securityHeaders = [
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
    {
        key: "Content-Security-Policy",
        value: ContentSecurityPolicy.replace(/\n/g, ""),
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
    {
        key: "Referrer-Policy",
        value: "origin-when-cross-origin",
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
    {
        key: "X-Frame-Options",
        value: "DENY",
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
    {
        key: "X-Content-Type-Options",
        value: "nosniff",
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
    {
        key: "Strict-Transport-Security",
        value: "max-age=31536000; includeSubDomains; preload",
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
    {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
    },
];

export default nextConfig;
