import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme/toggle";

export default function Navbar() {
    return (
        <>
            <nav className="flex flex-row gap-4 items-center w-full p-3 border-b border-black/10 dark:border-white/10">
                <div className="flex flex-row justify-start gap-2">
                    {/* TODO: Replace with a logo or avatar */}
                    <span className="text-2xl font-bold font-serif">CD</span>
                </div>
                <div className="flex flex-row justify-center gap-2 w-full">
                    <Link href="/">
                        <Button variant="link">About</Button>
                    </Link>
                    <Link href="/photos">
                        <Button variant="link">Photos</Button>
                    </Link>
                </div>
                <div className="flex flex-row justify-end gap-2">
                    <ThemeToggle />
                </div>
            </nav>
        </>
    );
}
