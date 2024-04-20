"use client";

import { Photo } from "@/lib/directus";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";
import { MapPin } from "./icons";

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
                            <div
                                key={img.id}
                                className="flex flex-col p-0 m-0 group"
                            >
                                <Image
                                    src={
                                        process.env.NEXT_PUBLIC_CMS_URL +
                                        "/assets/" +
                                        img.image
                                    }
                                    alt={img.collection}
                                    loading="lazy"
                                    width={1080}
                                    height={1080}
                                    quality={25}
                                    className="w-full h-full object-cover object-center rounded-lg border border-black/10 dark:border-white/10"
                                />
                                <div className="w-full backdrop-blur">
                                    <div className="absolute opacity-0 transition-opacity group-hover:opacity-100 bottom-0 p-4 border-t-2 rounded-b-lg border-black/10 dark:border-white/10 w-full bg-white/50 dark:bg-black/50">
                                        <div className="flex flex-row gap-2 items-center justify-between">
                                            <p>
                                                {" "}
                                                <b>{img.collection}</b>
                                            </p>
                                            <MapPin className="w-6 h-6 font-bold" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Masonry>
            </ResponsiveMasonry>
        </>
    );
}
