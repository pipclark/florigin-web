import React, { useEffect, useState } from "react";
import { Gig } from "./Gigs";
import "../styles/News.css";
import { Link } from "react-router-dom";
import { getContentful } from "../lib/getContentful";

type NewsProps = {
	contentfulUrl: string;
	displayLatestOnly: boolean;
};

interface News {
	title: string;
	mainText: string;
	date: string;
	link: string;
	photo: {
		title: string;
		description: string;
		url: string;
		width: number;
		height: number;
	};
}

type NewsItems = Record<"items", News[]>;

export default function NewsItems(props: NewsProps) {
	const [news, setNews] = useState<NewsItems | undefined>();
	const contentKey = "newsCollection";
	const contentfulUrl = props.contentfulUrl;
	const displayLatestOnly = props.displayLatestOnly;
	const options = {
		year: "numeric",
		month: "long",
		day: "numeric",
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

	if (!news) {
		return <p>Loading News...</p>;
	}

	if (displayLatestOnly) {
		news.items = [
			news.items.sort((a, b) => {
				return Date.parse(b?.date) - Date.parse(a?.date);
			})[0],
		];
	}

	return (
		<div>
			<h2>Latest News</h2>
			<ul className="news">
				{news.items
					.sort((a, b) => {
						return Date.parse(b?.date) - Date.parse(a?.date);
					})
					.map((newsItem) => (
						<li
							className="newsItem"
							key={newsItem?.title}
							onClick={() => newsItem?.link}
						>
							<div className="newsContainer">
								<p className="newsDate">
									{new Date(newsItem?.date).toLocaleDateString(
										"en-GB",
										//@ts-ignore
										options
									)}
								</p>
								<h2 className="newsTitle">
									<Link to={newsItem?.link}> {newsItem?.title}</Link>
								</h2>
								<div className="newsContent">
									<p className="newsText">{newsItem.mainText}</p>
									<img className="newsPhoto" src={newsItem?.photo?.url}></img>
								</div>
							</div>
						</li>
					))}
			</ul>
		</div>
	);
}
