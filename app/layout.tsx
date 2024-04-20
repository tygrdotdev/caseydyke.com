import type { Metadata } from "next";
import { Inter, Literata } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme/provider";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Script from "next/script";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const literata = Literata({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
    metadataBase: new URL("https://caseydyke.com"),
    title: {
        default: "Casey Dyke",
        template: "%s | Casey Dyke",
    },
    description: "A hobbyist photographer interested in animals and wildlife.",
    openGraph: {
        title: "Casey Dyke",
        description:
            "A hobbyist photographer interested in animals and wildlife.",
        url: "https://caseydyke.com",
        siteName: "Casey Dyke",
        locale: "en_GB",
        type: "website",
        images: [
            {
                url: `https://caseydyke.com/og`,
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
        },
    },
    twitter: {
        title: "Casey Dyke",
        card: "summary_large_image",
    },
};

export const revalidate = 300;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    inter.variable,
                    literata.variable,
                    "min-h-screen antialiased bg-neutral-200 dark:bg-neutral-900 text-black dark:text-white"
                )}
            >
                <Script
                    async
                    src="https://analytics.caseydyke.com/script.js"
                    data-website-id="9955e23d-66a7-4f8e-a01d-035cc1252604"
                />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <main className="flex flex-col items-center w-full">
                        <div className="flex flex-col max-w-[1000px] items-center w-full">
                            <Navbar />
                            {children}
                            <footer className="p-2">
                                <p className="text-neutral-500 text-center dark:text-neutral-400">
                                    © {new Date().getFullYear()} Casey Dyke. All
                                    rights reserved. <br /> Made with ❤️ by{" "}
                                    <Link
                                        href="https://tygr.dev"
                                        className="text-accent-800 hover:text-accent-800/80 dark:hover:text-accent-600 transition-colors font-medium dark:text-accent-600/80"
                                        target="_blank"
                                    >
                                        Ty Mason
                                    </Link>
                                </p>
                            </footer>
                        </div>
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
