import { Button } from "@/components/ui/button";
import { cms } from "@/lib/directus";
import Image from "next/image";
import Link from "next/link";
import { readItems } from "@directus/sdk";
import Gallery from "@/components/gallery";
import { Crown, Medal } from "@/components/icons";

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
                    At a young age, I was infatuated with animals and wildlife.
                    As I got older, I started studying animal and zoo
                    management. As my passion grew, I wanted to find a way for
                    others to appreciate animals the same way I do. After
                    discovering animal photographers and their impressive work,
                    I took up the idea of becoming one myself in hopes of
                    sharing my passion with the world. <br /> <br /> In 2021, I
                    purchased{" "}
                    <a
                        href="https://www.nikon.co.uk/en_GB/product/cameras/d780"
                        className="text-accent-700"
                        target="_blank"
                    >
                        my first DSLR camera
                    </a>{" "}
                    and used my own animals as subjects to practice on. I&apos;d
                    also take regular trips to{" "}
                    <a
                        href="https://www.facebook.com/sotonreptile"
                        className="text-accent-700"
                        target="_blank"
                    >
                        Southampton Reptile Centre
                    </a>{" "}
                    to photograph their animals as well. Soon enough, they took
                    notice and an agreement was established that they could use
                    my photos for their marketing, and I would recieve service
                    with no charge. <br /> <br /> After building some
                    confidence, I took the deep dive and started photographing
                    animals at major zoos, such as{" "}
                    <a
                        href="https://www.marwell.org.uk/"
                        className="text-accent-700"
                        target="_blank"
                    >
                        Marwell Wildlife
                    </a>
                    ,{" "}
                    <a
                        href="https://www.londonzoo.org/"
                        className="text-accent-700"
                        target="_blank"
                    >
                        ZSL London Zoo
                    </a>
                    ,{" "}
                    <a
                        href="https://www.exmoorzoo.co.uk/"
                        className="text-accent-700"
                        target="_blank"
                    >
                        Exmoor Zoo
                    </a>
                    , and more. Just over a year later, I entered the Marwell
                    Wildlife Photography competition and got my picture of their
                    Two Toed Sloth in{" "}
                    <a
                        href="/awards/marwell-2023"
                        className="text-accent-700"
                        target="_blank"
                    >
                        their 2023 calendar
                    </a>
                    . A few months later, I entered the 2022 BIAZA Photo
                    competition and was awarded with a{" "}
                    <a
                        href="https://biaza.org.uk/news/detail/biaza-annual-photo-competition-2022-winners-feature-some-of-the-weirdest-lesser-known-zoo-and-aquarium-animals#:~:text=Runner%20up%20%2D%20Earing%20the%20February%20Blooms%2C%20Casey%20Dyke%20(Marwell%20Wildlife)"
                        className="text-accent-700"
                        target="_blank"
                    >
                        Runner up accolade
                    </a>{" "}
                    for my photo of a Swift Parrot. <br /> <br /> Determined to
                    get first place, in 2023, I entered the BIAZA Photo
                    competition again with photos of an{" "}
                    <a
                        href="https://biaza.org.uk/news/detail/biaza-photo-competition-2023-the-stunning-winning-photos#:~:text=WINNER%20%2D%20Casey%20Dyke%20%7C%20Marwell%20Wildlife%20%7C%20Marwell%27s%20Emerald"
                        className="text-accent-700"
                        target="_blank"
                    >
                        emerald tree monitor
                    </a>{" "}
                    from Marwell Wildlife, and a{" "}
                    <a
                        href="https://biaza.org.uk/news/detail/biaza-photo-competition-2023-the-stunning-winning-photos#:~:text=WINNER%20%2D%20Casey%20Dyke%20%7C%20ZSL%20London%20Zoo%20%7C%C2%A0Jelly%20Tranquillity"
                        className="text-accent-700"
                        target="_blank"
                    >
                        nettle jellyfish
                    </a>{" "}
                    from ZSL London Zoo and won both awards!
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
                </div>
            </div>

            <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex flex-col sm:flex-col items-start gap-0 justify-start w-full">
                    <h2 className="text-3xl font-bold font-serif">
                        Awards & Accolades
                    </h2>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                        A list of awards I&apos;ve won over the years.
                    </p>
                </div>
                <Link
                    href="/marwell-2023"
                    className="flex flex-row items-center w-full p-2 overflow-hidden rounded-md whitespace-nowrap text-ellipsis hover:bg-neutral-200 dark:hover:bg-neutral-800"
                >
                    <p className="gap-2 font-medium flex flex-row ">
                        <Crown width={18} />
                        Winner
                    </p>
                    <span className="hidden w-full sm:flex sm:flex-row sm:items-center ">
                        <hr className="flex-1 mx-2 border border-black/10 dark:border-white/10" />
                        <span className="text-sm font-medium text-neutral-500">
                            Marwell Wildlife Photography Competition 2023
                        </span>
                    </span>
                </Link>
                <Link
                    href="https://biaza.org.uk/news/detail/biaza-annual-photo-competition-2022-winners-feature-some-of-the-weirdest-lesser-known-zoo-and-aquarium-animals#:~:text=Runner%20up%20%2D%20Earing%20the%20February%20Blooms%2C%20Casey%20Dyke%20(Marwell%20Wildlife)"
                    className="flex flex-row items-center w-full p-2 overflow-hidden rounded-md whitespace-nowrap text-ellipsis hover:bg-neutral-200 dark:hover:bg-neutral-800"
                >
                    <p className="gap-2 font-medium flex flex-row ">
                        <Medal width={18} />
                        Runner Up
                    </p>
                    <span className="hidden w-full sm:flex sm:flex-row sm:items-center ">
                        <hr className="flex-1 mx-2 border border-black/10 dark:border-white/10" />
                        <span className="text-sm font-medium text-neutral-500">
                            BIAZA Photo Competition 2022
                        </span>
                    </span>
                </Link>
                <Link
                    href="https://biaza.org.uk/news/detail/biaza-photo-competition-2023-the-stunning-winning-photos#:~:text=WINNER%20%2D%20Casey%20Dyke%20%7C%20Marwell%20Wildlife%20%7C%20Marwell%27s%20Emerald"
                    className="flex flex-row items-center w-full p-2 overflow-hidden rounded-md whitespace-nowrap text-ellipsis hover:bg-neutral-200 dark:hover:bg-neutral-800"
                >
                    <p className="gap-2 font-medium flex flex-row">
                        <Crown width={18} />
                        Reptile Winner
                    </p>
                    <span className="hidden w-full sm:flex sm:flex-row sm:items-center">
                        <hr className="flex-1 mx-2 border w-full border-black/10 dark:border-white/10" />
                        <span className="text-sm font-medium text-neutral-500">
                            BIAZA Photo Competition 2023
                        </span>
                    </span>
                </Link>
                <Link
                    href="https://biaza.org.uk/news/detail/biaza-photo-competition-2023-the-stunning-winning-photos#:~:text=WINNER%20%2D%20Casey%20Dyke%20%7C%20ZSL%20London%20Zoo%20%7C%C2%A0Jelly%20Tranquillity"
                    className="flex flex-row items-center w-full p-2 overflow-hidden rounded-md whitespace-nowrap text-ellipsis hover:bg-neutral-200 dark:hover:bg-neutral-800"
                >
                    <p className="gap-2 font-medium flex flex-row ">
                        <Crown width={18} />
                        Invertebrate Winner
                    </p>
                    <span className="hidden w-full sm:flex sm:flex-row sm:items-center ">
                        <hr className="flex-1 mx-2 border border-black/10 dark:border-white/10" />
                        <span className="text-sm font-medium text-neutral-500">
                            BIAZA Photo Competition 2023
                        </span>
                    </span>
                </Link>
            </div>
        </main>
    );
}
