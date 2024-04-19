import { ThemeToggle } from "@/components/theme/toggle";
import { Button } from "@/components/ui/button";
import { cms } from "@/lib/directus";
import Image from "next/image";
import Link from "next/link";
import { readItems } from "@directus/sdk";
import Gallery from "@/components/gallery";

export default async function Home() {
    const result = await cms.request(readItems("photos"));

    return (
        <main className="flex flex-col gap-12 items-center w-full py-16 px-4">
            <div className="flex flex-col sm:flex-row text-center sm:text-start gap-12 items-center ">
                <Image
                    src="/pfp.jpg"
                    alt="Profile Picture"
                    width={512}
                    height={512}
                    quality={50}
                    className="border border-black/10 dark:border-white/10 rounded-full w-48 h-48"
                />
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                            <span className="text-sm text-neutral-500 dark:text-neutral-400">
                                Hello! My name is...
                            </span>
                            <h1 className="text-5xl font-bold font-serif">
                                Casey Dyke
                            </h1>
                        </div>

                        <p className="text-neutral-800 dark:text-neutral-200">
                            A hobbyist photographer interested in animals and
                            wildlife.
                        </p>
                    </div>

                    <div className="flex flex-row gap-2 items-center justify-center sm:justify-start">
                        <Link href="/instagram">
                            <Button>Instagram</Button>
                        </Link>
                        <Link href="mailto:hi@caseydyke.com">
                            <Button variant="secondary">Email</Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex flex-col sm:flex-row items-start gap-2 sm:items-center justify-between w-full">
                    <h2 className="text-3xl font-bold font-serif">About Me</h2>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                        A little bit about me and how I got here.
                    </p>
                </div>
                <p className="text-neutral-800 dark:text-neutral-200">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce condimentum tristique ante. Proin congue, odio a
                    ullamcorper congue, erat augue pretium felis, nec dapibus
                    libero turpis vel metus. Quisque a dui tristique, porttitor
                    nibh vitae, aliquam lorem. In id ornare purus. Sed congue et
                    ante in fermentum. Vivamus commodo arcu in urna porta, sit
                    amet mollis tortor luctus. Curabitur in velit mi. In vitae
                    turpis ipsum. Donec non turpis risus. Cras porta commodo
                    massa ullamcorper euismod. <br /> <br />
                    In ullamcorper quam vitae est cursus mollis. Duis ut rhoncus
                    nisi, non tincidunt ante. Integer a mattis odio. Duis vel
                    lorem vel odio sagittis scelerisque a nec enim. Aliquam et
                    dignissim libero. Etiam eleifend lacinia felis, eget
                    venenatis lorem tempus finibus. Nam quis elit ipsum. Sed
                    vitae venenatis metus. Curabitur eleifend sit amet leo a
                    consectetur. <br /> <br />
                </p>
            </div>

            <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex flex-row gap-2 justify-between items-start w-full">
                    <div className="flex flex-col gap-0 items-start justify-between w-full">
                        <h2 className="text-3xl font-bold font-serif">
                            Featured Photos
                        </h2>
                        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                            A few of my top and award winning{" "}
                            <a
                                className="text-accent-700"
                                href="https://biaza.org.uk/news/detail/biaza-photo-competition-2023-the-stunning-winning-photos#:~:text=WINNER%20%2D%20Casey%20Dyke%20%7C%20Marwell%20Wildlife%20%7C%20Marwell%27s%20Emerald"
                            >
                                (literally)
                            </a>{" "}
                            photos.
                        </p>
                    </div>
                    <Link href="/photos">
                        <Button variant="link" className="justify-end">
                            View All &rarr;
                        </Button>
                    </Link>
                </div>

                <div className="w-full">
                    <Gallery
                        photos={result.filter((x) => x.featured === true)}
                        breakPoints={{ 350: 1, 750: 2, 900: 3 }}
                    />
                    {/* {result
                        .filter((x) => x.featured === true)
                        .map((img) => {
                            return (
                                <>
                                    <Image
                                        src={
                                            process.env.NEXT_PUBLIC_CMS_URL +
                                            "/assets/" +
                                            img.image
                                        }
                                        alt={img.collection}
                                        width={1080}
                                        height={1080}
                                        key={img.id}
                                        quality={75}
                                        className="w-[540px] h-[540px] object-cover object-center rounded-lg border border-black/10 dark:border-white/10"
                                    />
                                </>
                            );
                        })} */}
                </div>
            </div>
        </main>
    );
}
