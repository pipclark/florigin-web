import React, { useEffect, useState } from "react";
import { Gig } from "./Gigs";
import "../styles/Gigs.css";
import { Link } from "react-router-dom";
import { getContentful } from "../lib/getContentful";

type NewsProps = {
	contentfulUrl: string;
};

interface News {
	title: string;
	maintext: string;
	todaysdate: string;
	link: string;
	photo: {
		title: string;
		description: string;
		url: string;
		width: number;
		height: number;
	};
} // TODO add video to type and query

type NewsItems = Record<"items", News[]>;

export default function NewsItems(props: NewsProps) {
	const [news, setNews] = useState<NewsItems | undefined>();
	const contentKey = "newsCollection";
	const contentfulUrl = props.contentfulUrl;
	const options = {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	};

	const query = `
  {
    ${contentKey} {
        items {
        title
        mainText
        date
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
			const data = await getContentful<Record<string, NewsItems>>(
				contentfulUrl,
				query
			);
			setNews(data?.[contentKey]);
		};
		fetchData();
	}, [contentfulUrl, query]);

	console.log(news);

	if (!news) {
		return <p>Loading News...</p>;
	}

	return (
		<div>
			<h2>Latest News</h2>
			<ul className="news">
				{news.items
					.sort((a, b) => {
						return Date.parse(a?.todaysdate) - Date.parse(b?.todaysdate);
					})
					.map((newsItem) => (
						<li
							className="newsItem"
							key={newsItem?.title}
							onClick={() => newsItem?.link}
						>
							<ul className="newsDetails">
								<li className="dateTime">
									{
										// TODO: add tyoes for toLocaleDateString arguments
										new Date(newsItem?.todaysdate).toLocaleDateString(
											"en-GB",
											//@ts-ignore
											options
										)
									}
								</li>
								<li className="venue">
									<Link to={newsItem?.link}> {newsItem?.title}</Link>
								</li>
							</ul>
						</li>
					))}
			</ul>
		</div>
	);
}
