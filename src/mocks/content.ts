import { Gig } from "../components/Gigs"

// create date one week in future in ISO-8601 format
const today = Date.now() 
const nextWeek = new Date(today + 604800000) // add # ms in a week
const nextWeekISO = nextWeek.toISOString()
const lastWeek = new Date(today - 604800000)
const lastWeekISO = lastWeek.toISOString()

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
		dateAndTime: nextWeekISO, // TODO: make it always eg one week in future
		link: "https://lido.de/Florigin",
		photo: {
			title: "Florigin Live",
			description: "",
			url: "",
			width: 300,
			height: 300,
		},
	},

  {
		title: "Glastonbury",
		description: "Festival",
		citycountry: "Glastonbury, UK",
		location: {
			lat: 51.1475,
			lon: -2.7208,
		},
		dateAndTime: lastWeekISO, // TODO: make it always eg one week in future
		link: "https://glastonbury/2024/lineup",
		photo: {
			title: "Florigin Opening Glastonbury",
			description: "",
			url: "",
			width: 300,
			height: 300,
		},
	},
]}};
