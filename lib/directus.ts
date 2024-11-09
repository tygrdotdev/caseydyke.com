import { createDirectus, rest } from "@directus/sdk"

export type DirectusFiles = {
	charset?: string | null;
	created_on: string;
	description?: string | null;
	duration?: number | null;
	embed?: string | null;
	filename_disk?: string | null;
	filename_download: string;
	filesize?: number | null;
	focal_point_x?: number | null;
	focal_point_y?: number | null;
	folder?: string | DirectusFolders | null;
	height?: number | null;
	id: string;
	location?: string | null;
	metadata?: unknown | null;
	modified_on: string;
	storage: string;
	tags?: unknown | null;
	title?: string | null;
	tus_data?: unknown | null;
	tus_id?: string | null;
	type?: string | null;
	uploaded_on?: string | null;
	width?: number | null;
};

export type DirectusFolders = {
	id: string;
	name: string;
	parent?: string | DirectusFolders | null;
};

export type Photos = {
	date_created?: string | null;
	featured?: boolean | null;
	id: number;
	image?: DirectusFiles;
	location?: string | null;
	taxanomic_group?: string | null;
};

export type Schema = {
	directus_files: DirectusFiles[];
	directus_folders: DirectusFolders[];
	photos: Photos[];
};

export const cms = createDirectus<Schema>(process.env.NEXT_PUBLIC_CMS_URL as string).with(rest({
	onRequest: (options) => ({ ...options, cache: "default" })
}));