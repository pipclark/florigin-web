// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IGroupPhotosFields {
	/** photo */
	photo: Asset;

	/** description */
	description?: string | undefined;
}

/** Photos of the band, not playing live */

export interface IGroupPhotos extends Entry<IGroupPhotosFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: "groupPhotos";
				linkType: "ContentType";
				type: "Link";
			};
		};
	};
}

export interface ILivePhotosFields {
	/** photo */
	photo: Asset;

	/** description */
	description?: string | undefined;
}

/** Playing live photos */

export interface ILivePhotos extends Entry<ILivePhotosFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: "livePhotos";
				linkType: "ContentType";
				type: "Link";
			};
		};
	};
}

export interface IVideoFields {
	/** video */
	video: Asset;

	/** description */
	description?: Document | undefined;
}

/** Live performance videos */

export interface IVideo extends Entry<IVideoFields> {
	sys: {
		id: string;
		type: string;
		createdAt: string;
		updatedAt: string;
		locale: string;
		contentType: {
			sys: {
				id: "video";
				linkType: "ContentType";
				type: "Link";
			};
		};
	};
}

export type CONTENT_TYPE = "groupPhotos" | "livePhotos" | "video";

export type IEntry = IGroupPhotos | ILivePhotos | IVideo;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
