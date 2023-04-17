import { useState, useEffect } from "react";
import { getContentful } from "../lib/getContentful";
import "../styles/PhotoBlock.css";

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
	const [photoClicked, setphotoClicked] = useState<string | null>(null);

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
			<div className={photoClicked ? "photoBlockClicked" : "photoBlock"}>
				{photos.items.map((photo) => (
					<img
						className={
							photo?.description === photoClicked ? "photoClicked" : "photo"
						}
						src={photo?.photo.url}
						alt={photo?.photo.title}
						key={photo?.photo.title}
						onClick={() => {
							photoClicked
								? setphotoClicked(null)
								: setphotoClicked(photo?.description);
						}}
					/>
				))}
				<h3 className={photoClicked ? "clicked" : ""}>{photoClicked}</h3>
			</div>
		</div>
	);
}
