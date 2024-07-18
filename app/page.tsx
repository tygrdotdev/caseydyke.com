"use client";

import { Button } from "@/components/ui/button";
import { Photo, Schema, cms } from "@/lib/directus";
import Image from "next/image";
import Link from "next/link";
import { QueryFields, readItems } from "@directus/sdk";
import { Crown, Email, Instagram, Medal } from "@/components/icons";
import ImageGrid from "./photos/image-grid";

function AwardItem({
    href,
    award,
    awardIcon,
    body,
}: {
    href: string;
    award: string;
    awardIcon: JSX.Element;
    body: string;
}) {
    return (
        <>
            <Link
                href={href}
                className="flex flex-col sm:flex-row items-start gap-1 sm:gap-0 sm:items-center w-full p-2 overflow-hidden rounded-md whitespace-nowrap text-ellipsis hover:bg-neutral-300 dark:hover:bg-neutral-800 transition-colors"
                target="_blank"
            >
                <p className="gap-2 font-medium flex flex-row">
                    <span className="text-neutral-500 dark:text-neutral-400">
                        {awardIcon}
                    </span>
                    {award}
                </p>
                <span className="w-full flex flex-row items-center">
                    <hr className="hidden sm:flex flex-1 mx-2 border border-black/10 dark:border-white/10" />
                    <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                        {body}
                    </span>
                </span>
            </Link>
        </>
    );
}

function AboutMeLink({ href, content }: { href: string; content: string }) {
    return (
        <>
            {" "}
            <a
                href={href}
                className="text-accent-800 hover:text-accent-800/80 dark:hover:text-accent-600 transition-colors font-medium dark:text-accent-600/80 inline-flex flex-row items-center gap-1"
                target="_blank"
            >
                {content}
            </a>
        </>
    );
}

export default async function Home() {
    const result = await cms.request(
        readItems("photos", {
            fields: ["*.*.*"] as unknown as QueryFields<Schema, Photo>,
        })
    );

    return (
        <main className="flex flex-col gap-12 items-center w-full py-16 px-4">
            <div className="flex flex-col sm:flex-row text-center sm:text-start gap-12 items-center">
                <Image
                    src="/pfp.webp"
                    alt="Profile Picture"
                    width={512}
                    height={512}
                    quality={50}
                    priority
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
                            <Button>
                                <Instagram className="w-4 h-4 mr-2" />
                                Instagram
                            </Button>
                        </Link>
                        <Link href="mailto:hi@caseydyke.com">
                            <Button variant="secondary">
                                <Email className="w-4 h-4 mr-2" />
                                Email
                            </Button>
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
                    purchased
                    <AboutMeLink
                        href="https://www.nikon.co.uk/en_GB/product/cameras/d780"
                        content="my first DSLR camera"
                    />{" "}
                    and used my own animals as subjects to practice on. I&apos;d
                    also take regular trips to
                    <AboutMeLink
                        href="https://www.facebook.com/sotonreptile"
                        content="Southampton Reptile Centre"
                    />{" "}
                    to photograph their animals as well. Soon enough, they took
                    notice and an agreement was established that they could use
                    my photos for their marketing, and I would recieve service
                    with no charge. <br /> <br /> After building some
                    confidence, I took the deep dive and started photographing
                    animals at major zoos, such as
                    <AboutMeLink
                        href="https://www.marwell.org.uk/"
                        content="Marwell Wildlife"
                    />
                    {""}
                    ,
                    <AboutMeLink
                        href="https://www.londonzoo.org/"
                        content="ZSL London Zoo"
                    />
                    ,{" "}
                    <AboutMeLink
                        href="https://www.exmoorzoo.co.uk/"
                        content="Exmoor Zoo"
                    />
                    , and more. Just over a year later, I entered the Marwell
                    Wildlife Photography competition and got my picture of their
                    Two Toed Sloth in
                    <AboutMeLink
                        href="/marwell-2023"
                        content="their 2023 calendar"
                    />
                    . A few months later, I entered the 2022 BIAZA Photo
                    competition and was awarded with a
                    <AboutMeLink
                        href="https://biaza.org.uk/news/detail/biaza-annual-photo-competition-2022-winners-feature-some-of-the-weirdest-lesser-known-zoo-and-aquarium-animals#:~:text=Runner%20up%20%2D%20Earing%20the%20February%20Blooms%2C%20Casey%20Dyke%20(Marwell%20Wildlife)"
                        content="runner up accolade"
                    />{" "}
                    for my photo of a Swift Parrot. <br /> <br /> Determined to
                    get first place, in 2023, I entered the BIAZA Photo
                    competition again with photos of an
                    <AboutMeLink
                        href="https://biaza.org.uk/news/detail/biaza-photo-competition-2023-the-stunning-winning-photos#:~:text=WINNER%20%2D%20Casey%20Dyke%20%7C%20Marwell%20Wildlife%20%7C%20Marwell%27s%20Emerald"
                        content="emerald tree monitor"
                    />{" "}
                    from Marwell Wildlife, and a
                    <AboutMeLink
                        href="https://biaza.org.uk/news/detail/biaza-photo-competition-2023-the-stunning-winning-photos#:~:text=WINNER%20%2D%20Casey%20Dyke%20%7C%20ZSL%20London%20Zoo%20%7C%C2%A0Jelly%20Tranquillity"
                        content="nettle jellyfish"
                    />{" "}
                    from ZSL London Zoo and won both awards!
                </p>
            </div>

            <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex flex-row gap-2 justify-between items-center w-full">
                    <div className="flex flex-col gap-0 items-start justify-between w-full">
                        <h2 className="text-3xl font-bold font-serif">
                            Featured Photos
                        </h2>
                        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                            A few of my top and{" "}
                            <a
                                className="text-accent-800 hover:text-accent-800/80 dark:hover:text-accent-600 transition-colors dark:text-accent-600/80"
                                href="https://biaza.org.uk/news/detail/biaza-photo-competition-2023-the-stunning-winning-photos#:~:text=WINNER%20%2D%20Casey%20Dyke%20%7C%20Marwell%20Wildlife%20%7C%20Marwell%27s%20Emerald"
                                target="_blank"
                            >
                                award winning
                            </a>{" "}
                            photos.
                        </p>
                    </div>
                    <Link href="/photos">
                        <Button variant="ghost" className="justify-end">
                            View All &rarr;
                        </Button>
                    </Link>
                </div>

                <div className="w-full">
                    <ImageGrid
                        photos={result.filter((x) => x.featured === true)}
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

                <AwardItem
                    href="https://biaza.org.uk/news/detail/biaza-annual-photo-competition-2022-winners-feature-some-of-the-weirdest-lesser-known-zoo-and-aquarium-animals#:~:text=Runner%20up%20%2D%20Earing%20the%20February%20Blooms%2C%20Casey%20Dyke%20(Marwell%20Wildlife)"
                    award="Runner Up"
                    awardIcon={<Medal width={18} />}
                    body="BIAZA Photo Competition 2022"
                />
                <AwardItem
                    href="https://www.facebook.com/marwellwildlife/posts/pfbid0FULy8BKEuiZYYL59bTBLj1egMBmxLGkX9u4vJ2CTopj7Mqxr3pDN4buWoqYCbWuWl?locale=en_GB"
                    award="Runner Up"
                    awardIcon={<Medal width={18} />}
                    body="Marwell Wildlife Photography Competition 2022"
                />
                <AwardItem
                    href="https://www.facebook.com/photo.php?fbid=656726889834219&set=pb.100064907403337.-2207520000&type=3"
                    award="Runner Up"
                    awardIcon={<Medal width={18} />}
                    body="Marwell Wildlife Photography Competition 2023"
                />
                <AwardItem
                    href="https://biaza.org.uk/news/detail/biaza-photo-competition-2023-the-stunning-winning-photos#:~:text=WINNER%20%2D%20Casey%20Dyke%20%7C%20Marwell%20Wildlife%20%7C%20Marwell%27s%20Emerald"
                    award="Reptile Winner"
                    awardIcon={<Crown width={18} />}
                    body="BIAZA Photo Competition 2023"
                />
                <AwardItem
                    href="https://biaza.org.uk/news/detail/biaza-photo-competition-2023-the-stunning-winning-photos#:~:text=WINNER%20%2D%20Casey%20Dyke%20%7C%20ZSL%20London%20Zoo%20%7C%C2%A0Jelly%20Tranquillity"
                    award="Invertebrate Winner"
                    awardIcon={<Crown width={18} />}
                    body="BIAZA Photo Competition 2023"
                />
                <AwardItem
                    href="https://www.facebook.com/photo/?fbid=871300811710158"
                    award="Winner"
                    awardIcon={<Crown width={18} />}
                    body="Marwell Wildlife Photography Competition 2024"
                />
            </div>
        </main>
    );
}
