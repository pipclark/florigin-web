import { useState, useEffect } from "react";
import { getContentful } from "../lib/getContentful";
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
};

export default function GigsList(props: GigsProps) {
	const [gigs, setGigs] = useState<Gigs | undefined>();
	const contentKey = "gigsCollection";
	const contentfulUrl = props.contentfulUrl;

	const options = {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		//timeZoneName: "long",
	};

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

	return (
		<div>
			<h2>Upcoming Gigs</h2>
			<ul>
				{gigs.items
					.sort((a, b) => {
						return Date.parse(a?.dateAndTime) - Date.parse(b?.dateAndTime);
					})
					.map((gig) => (
						<li key={gig?.title}>
							{
								// TODO: add tyoes for toLocaleDateString arguments
								new Date(gig?.dateAndTime).toLocaleDateString(
									"en-GB",
									//@ts-ignore
									options
								) +
									", " +
									gig?.title
							}
						</li>
					))}
				<GigMap gigs={gigs.items}></GigMap>
			</ul>
		</div>
	);
}
