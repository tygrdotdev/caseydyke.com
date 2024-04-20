import { createDirectus, rest } from "@directus/sdk"

interface Schema {
	photos: Photo[];
}

export interface Photo {
	id: string;
	date_created: string;
	taxanomic_group: "mammals" | "birds" | "reptiles" | "amphibians" | "invertebrates" | string;
	collection: string;
	featured: boolean;
	image: string;
}

export const cms = createDirectus<Schema>(process.env.NEXT_PUBLIC_CMS_URL as string).with(rest({
	onRequest: (options) => ({ ...options, cache: "no-store" })
}));