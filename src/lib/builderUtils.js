import { fetchOneEntry, getAllContent } from '@builder.io/sdk-svelte';
import { BUILDER_PUBLIC_API_KEY } from '$lib/publicAPIKey';

export const builderFetchAllPages = async () => {
	const allPages = await getAllContent({
		model: 'page',
		// we can't reuse constants outside of `getStaticPaths`, so this is duplicated
		apiKey: BUILDER_PUBLIC_API_KEY,
		limit: 0
	});
	return allPages;
};

export const builderFetchPage = async ({ page }) => {
	if (!page) {
		page = []; // Set a default value if page is not provided
	}

	const content = await fetchOneEntry({
		model: 'page',
		apiKey: BUILDER_PUBLIC_API_KEY,
		query: {
			'data.urlPath.$eq': '/about-us'
		}
	});

	console.log(content);

	return {
		props: {
			content
		}
	};
};
