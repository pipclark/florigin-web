import { useState, useEffect } from "react";
import { getContentful } from "../lib/getContentful";
import "../styles/RandomPhoto.css";
import { GroupPhotos, GroupPhotosFields } from "./PhotoBlock";

type RandomPhotoProps = {
	contentfulUrl: string;
};

export default function RandomPhoto(props: RandomPhotoProps) {
	const [photos, setPhotos] = useState<GroupPhotos | undefined>();
	const contentKey = "homePagePhotosCollection";
	const contentfulUrl = props.contentfulUrl;
	let [randomPhoto, setRandomPhoto] = useState<GroupPhotosFields | undefined>();

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

	useEffect(() => {
		setRandomPhoto(
			photos?.items[Math.floor(Math.random() * photos?.items.length)]
		);
	}, [photos]);

	if (!randomPhoto) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<h2>The band</h2>
			<img
				className="singleBandPhoto"
				src={randomPhoto?.photo.url}
				alt={randomPhoto?.photo.title}
			/>
		</div>
	);
}
