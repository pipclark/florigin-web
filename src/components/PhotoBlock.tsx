import { useState, useEffect } from "react";
import { getContentful } from "../lib/getContentful";

type GroupPhotosFields = {
	photo: {
		title: string;
		description: string;
		contentType: string;
		fileName: string;
		size: number;
		url: string;
		width: number;
		height: number;
	};
	description: string;
};

type GroupPhotos = Record<"items", GroupPhotosFields[]>;

type PhotoBlockProps = {
	contentfulUrl: string;
};

export default function PhotoBlock(props: PhotoBlockProps) {
	const [photos, setPhotos] = useState<GroupPhotos | undefined>();
	const contentKey = "groupPhotosCollection";
	const contentfulUrl = props.contentfulUrl;

	const query = `
    {
        ${contentKey} {
            items {
            photo {
              title
              description
              contentType
              fileName
              size
              url
              width
              height
            }
            description 
            }
        }
        }
        `;

	useEffect(() => {
		const fetchData = async () => {
			const data = await getContentful<Record<string, GroupPhotos>>(
				contentfulUrl,
				query
			);
			setPhotos(data?.[contentKey]);
		};
		fetchData();
	}, [contentfulUrl, query]);

	if (!photos) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<h2>Photos</h2>
			{photos.items.map((photo) => (
				<img
					src={photo?.photo.url}
					alt={photo?.photo.title}
					key={photo?.photo.title}
				/>
			))}
		</div>
	);
}
