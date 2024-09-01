import { createDirectus, rest } from "@directus/sdk"

export interface Schema {
	photos: SharedPhoto[];
	collections: SharedCollection[];
}

interface Image {
	id: string;
	type: string;
	uploaded_on: string;
	width: number;
	height: number;
}

export interface Photo {
	id: string;
	date_created: string;
	taxanomic_group: "mammals" | "birds" | "reptiles" | "amphibians" | "invertebrates" | string;
	featured: boolean;
	image: Image;
}

export interface SharedPhoto extends Photo {
	collections: Photo_Collection[]
}

export interface Collection {
	id: string,
	name: string,
}

export interface SharedCollection extends Collection {
	images: Photo_Collection[]
}

export interface Photo_Collection {
	id: number,
	collections_id: Collection,
	photos_id: Photo;
}

export const cms = createDirectus<Schema>(process.env.NEXT_PUBLIC_CMS_URL as string).with(rest({
	onRequest: (options) => ({ ...options, cache: "default" })
}));