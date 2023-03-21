import { useState, useEffect } from "react";
import { IGroupPhotosFields } from "../../types/generated/contentful";

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

export default function PhotoBlock() {
	const [photos, setPhotos] = useState<Record<
		"items",
		GroupPhotosFields[]
	> | null>(null);

	const photosContentfulUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/`;
	const query = `
    {
        groupPhotosCollection {
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
		window
			.fetch(photosContentfulUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					// Authenticate the request
					Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
				},
				// send the GraphQL query
				body: JSON.stringify({ query }),
			})
			.then((response) => response.json())
			.then(({ data, errors }) => {
				if (errors) {
					console.error(errors);
				}

				// rerender the entire component with new data
				setPhotos(data.groupPhotosCollection);
			});
	}, []);

	if (!photos) {
		return <p>Loading...</p>;
	}

	console.log(photos.items);

	return (
		<div>
			<h2>Photos</h2>
			{photos.items.map((photo) => (
				<img src={photo?.photo.url} />
			))}
		</div>
	);
}
