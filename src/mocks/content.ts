import { Gig } from "../components/Gigs"


export const mockGigs:  Record<string, Record<"items", Gig[]>> = { 
  gigsCollection: {
  items: [
	{
		title: "Lido",
		description: "Inside Gig",
		citycountry: "Berlin, Germany",
		location: {
			lat: 54.5,
			lon: 13.4,
		},
		dateAndTime: "2023-08-12T18:00:00.000+01:00", // TODO: make it always eg one week in future
		link: "https://nachteulenfestival.de/",
		photo: {
			title: "Florigin Live",
			description: "",
			url: "",
			width: 300,
			height: 300,
		},
	},
]}};
