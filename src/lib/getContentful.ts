import { type } from "os";

export async function getContentful<T>(contentfulUrl: string, query: string): Promise<T | undefined> {
  let contentfulData: T | undefined // check what this type is
  await window
			.fetch(contentfulUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					// Authenticate the request
					Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_DELIVERY_TOKEN}`,
				},
				// send the GraphQL query
				body: JSON.stringify({ query }),
			})
			.then((response) => response.json())
			.then(({ data, errors }) => {
				if (errors) {
					console.error(errors);
          
				}

				// return the data
			contentfulData = data;
			});
  return contentfulData
}