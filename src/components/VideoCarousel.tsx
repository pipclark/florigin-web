import React, { useEffect, useState } from "react";
import "../styles/VideoCarousel.css";
import { getContentful } from "../lib/getContentful";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import YoutubeEmbed from "../lib/YouTubeEmbed";

type VideoProps = {
	contentfulUrl: string;
};

interface Video {
	title: string;
	embedId: string;
}

type Videos = Record<"items", Video[]>;

export default function VideoCarousel(props: VideoProps) {
	const [videos, setVideos] = useState<Videos | undefined>();
	const contentKey = "youTubeVideosCollection";
	const contentfulUrl = props.contentfulUrl;

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	const query = `
  {
    ${contentKey} {
        items {
        title
        embedId
    }
  }
}
    `;

	useEffect(() => {
		const fetchData = async () => {
			const data = await getContentful<Record<string, Videos>>(
				contentfulUrl,
				query
			);
			setVideos(data?.[contentKey]);
		};
		fetchData();
	}, [contentfulUrl, query]);

	if (!videos) {
		return <h3>Loading Videos...</h3>;
	}

	return (
		<Carousel responsive={responsive}>
			{videos.items.map((video) => (
				<div key={video.embedId}>
					<YoutubeEmbed embedId={video.embedId} />
					<h3>{video.title}</h3>
				</div>
			))}
		</Carousel>
	);
}
