import React, { useEffect, useState } from "react";
import { getContentful } from "../lib/getContentful";
import ReactHtmlParser from "react-html-parser";

type BandInfo = {
	bandName: string;
	aboutText: string;
	photo: {
		title: string;
		description: string;
		url: string;
		width: number;
		height: number;
	};
};

type AboutProps = {
	contentfulUrl: string;
};

export default function AboutContent(props: AboutProps) {
	const [info, setInfo] = useState<BandInfo | undefined>();
	const [parsedAboutText, setParsedAboutText] = useState<
		React.ReactNode | undefined
	>();
	const contentKey = "bandInfo";
	const contentId = "4nWy68ynMWkH9dzrmtoWBL";
	const contentfulUrl = props.contentfulUrl;

	const query = `
  {
    ${contentKey}(id: "${contentId}") {
				aboutText 
				photo {
					url
					title
				}
			}
    }
    `;

	useEffect(() => {
		const fetchData = async () => {
			const data = await getContentful<Record<string, BandInfo>>(
				contentfulUrl,
				query
			);
			setInfo(data?.[contentKey]);
		};
		fetchData();
	}, [contentfulUrl, query]);

	useEffect(() => {
		if (info) {
			console.log(info.aboutText);
			setParsedAboutText(ReactHtmlParser(info?.aboutText));
		}
	}, [info]);

	console.log(parsedAboutText);

	if (!info) {
		return <p>Loading...</p>;
	} else {
		return <div>{parsedAboutText}</div>;
	}
}
