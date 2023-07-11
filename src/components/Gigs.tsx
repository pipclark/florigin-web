import { useState, useEffect } from "react";
import { getContentful } from "../lib/getContentful";
import GigList from "./GigList";
import GigMap from "./GigMap";

export type Gig = {
	title: string;
	description: string;
	citycountry: string;
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
	displayPastGigs: boolean;
};

export default function GigsList(props: GigsProps) {
	const [gigs, setGigs] = useState<Gigs | undefined>();
	const contentKey = "gigsCollection";
	const contentfulUrl = props.contentfulUrl;
	const displayMap = props.displayMap;
	const displayPastGigs = props.displayPastGigs;

	// msw graphql interceptions needs operation type (query), and a name (GetGigs)
	// contentful works without the "query GetGigs" part
	const query = ` query GetGigs
  {
    ${contentKey} {
        items {
        title
        description
				citycountry
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

	if (!displayPastGigs) {
		gigs.items = gigs.items
			.filter((gig) => Date.parse(gig.dateAndTime) > Date.now())
			.sort((a, b) => {
				return Date.parse(a?.dateAndTime) - Date.parse(b?.dateAndTime);
			});
	}

	if (displayMap) {
		return (
			<div>
				<GigList gigs={gigs.items} displayPastGigs={displayPastGigs} />
				<h2>Find a future Florigin gig near you!</h2>
				<GigMap gigs={gigs.items}></GigMap>
			</div>
		);
	}
	return (
		<div>
			<GigList gigs={gigs.items} displayPastGigs={displayPastGigs} />
		</div>
	);
}
