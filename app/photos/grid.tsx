"use client";

import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Photo_Collection, SharedPhoto } from "@/lib/directus";
import { MapPin } from "@/components/icons";
import { BlurFade } from "@/components/ui/blur-fade";

export default function ImageGrid({ photos }: { photos: SharedPhoto[] }) {
    return (
        <>
            <ResponsiveMasonry
                className="w-full"
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry gutter="1rem">
                    {photos.map((img, idx) => {
                        return (
                            <BlurFade key={img.id} delay={0.25 + idx * 0.05}>
                                <div
                                    className="flex flex-col p-0 m-0 group"
                                >
                                    <Image
                                        src={
                                            process.env.NEXT_PUBLIC_CMS_URL +
                                            "/assets/" +
                                            img.image.id
                                        }
                                        alt={img.id}
                                        loading="lazy"
                                        width={1080}
                                        height={1080}
                                        quality={25}
                                        className="w-full h-full object-cover object-center rounded-lg border border-black/10 dark:border-white/10"
                                    />
                                    <div className="w-full backdrop-blur">
                                        <div className="absolute opacity-0 text-white transition-opacity group-hover:opacity-100 bottom-0 p-4 border-t-2 rounded-b-lg border-black/10 dark:border-white/10 w-full bg-black/50">
                                            <div className="flex flex-row gap-2 items-center justify-between">
                                                <p>
                                                    {" "}
                                                    <b>
                                                        {
                                                            img.collections[0]
                                                                .collections_id.name
                                                        }
                                                    </b>
                                                </p>
                                                <MapPin className="w-6 h-6 font-bold" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </BlurFade>
                        );
                    })}
                </Masonry>
            </ResponsiveMasonry>
        </>
    );
}
