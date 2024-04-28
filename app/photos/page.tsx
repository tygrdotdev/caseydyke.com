import { Photo, cms } from "@/lib/directus";
import { readItems } from "@directus/sdk";
import Gallery from "../../components/gallery";

export default async function PhotosPage() {
    const result = await cms.request(readItems("photos"));

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
                <Gallery photos={result} />
            </div>
        </>
    );
}
