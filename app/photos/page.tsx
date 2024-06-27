import { Photo, Schema, cms } from "@/lib/directus";
import { QueryFields, readItems } from "@directus/sdk";
import ImageGrid from "./grid";

export default async function PhotosPage() {
    const photos = await cms.request(
        readItems("photos", {
            fields: ["*.*.*"] as unknown as QueryFields<Schema, Photo>,
        })
    );

    return (
        <>
            <div className="flex flex-col gap-4 items-center sm:items-start px-2 py-4">
                <div className="flex flex-col gap-0 items-center sm:items-start">
                    <h1 className="text-4xl font-serif font-bold">
                        All Photos
                    </h1>
                    <p className="text-neutral-800 dark:text-neutral-200">
                        A complete collection of all my hand-picked photos.
                    </p>
                </div>
                <ImageGrid photos={photos} />
            </div>
        </>
    );
}
