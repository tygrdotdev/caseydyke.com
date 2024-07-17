"use client";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";
import { SharedCollection } from "@/lib/directus";

function ImageGrid({ collection }: { collection: SharedCollection }) {
    return (
        <>
            <div
                className="flex flex-col items-start gap-4 w-full"
                key={collection.id}
            >
                <h2 className="text-3xl font-bold">{collection.name}</h2>
                <ResponsiveMasonry
                    className="w-full"
                    columnsCountBreakPoints={{
                        350: 1,
                        750: 2,
                        900: 3,
                    }}
                >
                    <Masonry gutter="1rem">
                        {collection.images.map((img) => {
                            return (
                                <div
                                    key={img.id}
                                    className="flex flex-col p-0 m-0 group"
                                >
                                    <Image
                                        src={
                                            process.env.NEXT_PUBLIC_CMS_URL +
                                            "/assets/" +
                                            img.photos_id.image
                                        }
                                        alt={img.photos_id.id}
                                        loading="lazy"
                                        width={1080}
                                        height={1080}
                                        quality={25}
                                        className="w-full h-full object-cover object-center rounded-lg border border-black/10 dark:border-white/10"
                                    />
                                </div>
                            );
                        })}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>
    );
}

export default ImageGrid;
