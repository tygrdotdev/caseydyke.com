"use client";

import { Photo } from "@/lib/directus";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";

export default function Gallery({
    photos,
    breakPoints,
}: {
    photos: Photo[];
    breakPoints?:
        | {
              [key: number]: number;
          }
        | undefined;
}) {
    return (
        <>
            <ResponsiveMasonry
                className="w-full"
                columnsCountBreakPoints={
                    breakPoints ?? { 350: 1, 750: 2, 900: 3 }
                }
            >
                <Masonry gutter="1rem">
                    {photos.map((img) => {
                        return (
                            <Image
                                src={
                                    process.env.NEXT_PUBLIC_CMS_URL +
                                    "/assets/" +
                                    img.image
                                }
                                alt={img.collection}
                                key={img.id}
                                loading="lazy"
                                width={1080}
                                height={1080}
                                quality={25}
                                className="w-full block object-cover object-center rounded-lg border border-black/10 dark:border-white/10"
                            />
                        );
                    })}
                </Masonry>
            </ResponsiveMasonry>
        </>
    );
}
