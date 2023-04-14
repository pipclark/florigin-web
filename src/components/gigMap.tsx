import React, { useState } from "react";
import {
	GoogleMap,
	Marker,
	MarkerF,
	useLoadScript,
	InfoWindow,
	InfoWindowF,
} from "@react-google-maps/api";
import { Gig } from "./Gigs";

type Coordinates = {
	lat: number;
	lng: number;
};
type MapProps = {
	googleMapsApiKey: string;
	gigs: Gig[];
};

type GigMapProps = {
	gigs: Gig[];
};

export default function GigMap(props: GigMapProps) {
	const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
	if (googleMapsApiKey === undefined) {
		return <div>Error</div>;
	}
	return <Map googleMapsApiKey={googleMapsApiKey} gigs={props.gigs} />;
}

const Map: React.FC<MapProps> = ({ googleMapsApiKey, gigs }: MapProps) => {
	const [selectedMarker, setSelectedMarker] = useState<Gig | null>(null);

	const mapContainerStyle = {
		maxWidth: "90%",
		height: "50vH",
		margin: "auto",
		zIndex: 0,
	};

	const center: Coordinates = {
		lat: 52.542,
		lng: 13.401,
	};

	const locations = [
		{ name: "Location 1", location: { lat: 50.4061, lng: 8.9825 } },
		{ name: "Location 2", location: { lat: 52.543, lng: 13.401 } },
	];

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey,
	});

	if (loadError) return <div>Error loading maps</div>;
	if (!isLoaded) return <div>Loading maps</div>;
	console.log(gigs);

	return (
		<GoogleMap mapContainerStyle={mapContainerStyle} zoom={5} center={center}>
			{gigs.map((gig) => (
				<MarkerF
					key={gig.title}
					position={{ lat: gig.location.lat, lng: gig.location.lon }}
					onClick={() => {
						setSelectedMarker(gig);
						console.log(selectedMarker);
					}}
				>
					{selectedMarker?.title === gig.title && (
						<InfoWindowF
							position={{ lat: gig.location.lat, lng: gig.location.lon }}
							onCloseClick={() => {
								setSelectedMarker(null);
							}}
						>
							<a href={gig.link}>{gig.title}</a>
						</InfoWindowF>
					)}
				</MarkerF>
			))}

			<></>
		</GoogleMap>
	);
};
