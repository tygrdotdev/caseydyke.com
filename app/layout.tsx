import type { Metadata } from "next";
import { Inter, Literata } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme/provider";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const literata = Literata({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
    title: "Casey Dyke Photography",
    description: "A hobbyist photographer, interested in animals and wildlife.",
};

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
                    "min-h-screen bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white"
                )}
            >
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
                        </div>
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
