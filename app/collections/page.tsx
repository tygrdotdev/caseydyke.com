import { Collection, Schema, cms } from "@/lib/directus";
import { QueryFields, readItems } from "@directus/sdk";
import PhotoGrid from "./grid";

export default async function CollectionPage() {
    const collections = await cms.request(
        readItems("collections", {
            fields: ["*.*.*"] as unknown as QueryFields<Schema, Collection>,
        })
    );

    return (
        <>
            <div className="flex flex-col gap-8 w-full items-center sm:items-start px-2 py-4">
                <div className="flex flex-col gap-0 items-center sm:items-start">
                    <h1 className="text-4xl font-serif font-bold">
                        Collections
                    </h1>
                    <p className="text-neutral-800 dark:text-neutral-200">
                        A bunch of images, sorted by location, trip or animal
                        type.
                    </p>
                </div>
                {collections.map((collection) => {
                    return (
                        <>
                            <PhotoGrid
                                collection={collection}
                                key={collection.id}
                            />
                        </>
                    );
                })}
            </div>
        </>
    );
}
