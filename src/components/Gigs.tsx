import { useState, useEffect } from "react";
import { getContentful } from "../lib/getContentful";
import GigList from "./GigList";
import GigMap from "./GigMap";

export type Gig = {
	title: string;
	description: string;
	location: {
		lat: number;
		lon: number;
	};
	dateAndTime: string;
	link: string;
	photo: {
		title: string;
		description: string;
		url: string;
		width: number;
		height: number;
	};
};

type Gigs = Record<"items", Gig[]>;

type GigsProps = {
	contentfulUrl: string;
	displayMap: boolean;
};

export default function GigsList(props: GigsProps) {
	const [gigs, setGigs] = useState<Gigs | undefined>();
	const contentKey = "gigsCollection";
	const contentfulUrl = props.contentfulUrl;
	const displayMap = props.displayMap;

	const query = `
  {
    ${contentKey} {
        items {
        title
        description
        location {
          lat
          lon
        }
        dateAndTime 
        link
        photo {
          title
          description
          url
          width
          height
        }
        }
        
    }
    }
    `;

	useEffect(() => {
		const fetchData = async () => {
			const data = await getContentful<Record<string, Gigs>>(
				contentfulUrl,
				query
			);
			setGigs(data?.[contentKey]);
		};
		fetchData();
	}, [contentfulUrl, query]);

	if (!gigs) {
		return <p>Loading Gigs...</p>;
	}

	if (displayMap) {
		return (
			<div>
				<GigList gigs={gigs.items} />
				<GigMap gigs={gigs.items}></GigMap>
			</div>
		);
	}
	return (
		<div>
			<GigList gigs={gigs.items} />
		</div>
	);
}
