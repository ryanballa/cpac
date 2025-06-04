import { error } from '@sveltejs/kit';
import { BUILDER_PUBLIC_API_KEY } from '$lib/publicAPIKey';
import { fetchOneEntry } from '@builder.io/sdk-svelte';

export async function load({ params }) {
	try {
		// If no slug is provided, redirect to home
		if (!params.slug) {
			return {
				DynamicPage: {
					data: {
						page: [
							{
								content: null
							}
						]
					}
				}
			};
		}

		// Try to fetch the dynamic page
		const content = await fetchOneEntry({
			model: 'page',
			apiKey: BUILDER_PUBLIC_API_KEY,
			query: {
				'data.urlPath.$eq': `/${params.slug}`
			}
		});

		// If no content is found, throw a 404
		if (!content) {
			throw error(404, {
				message: 'Page not found'
			});
		}

		return {
			DynamicPage: {
				data: {
					page: [content]
				}
			}
		};
	} catch (err) {
		console.error('Error loading dynamic page:', err);
		throw error(500, {
			message: 'Error loading page'
		});
	}
}
