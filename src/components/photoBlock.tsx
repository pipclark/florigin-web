import { useState, useEffect } from "react";

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

	const contentfulUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/`;
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
			.fetch(contentfulUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					// Authenticate the request
					Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_DELIVERY_TOKEN}`,
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

	return (
		<div>
			<h2>Photos</h2>
			{photos.items.map((photo) => (
				<img src={photo?.photo.url} alt={photo?.photo.title} />
			))}
		</div>
	);
}
