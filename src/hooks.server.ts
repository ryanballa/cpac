import type { Handle } from '@sveltejs/kit';
let allowedDomains = ['clarendonpac.org'];

export const handle: Handle = async ({ resolve, event }) => {
	let cors = 'null';

	let originDomain = '';
	if (event.request.headers.get('origin') !== null) {
		originDomain = new URL(event.request.headers.get('origin')).hostname;
		if (allowedDomains.includes(originDomain)) {
			cors = `https://${originDomain}`;
		}
	}

	// Apply CORS header for API routes
	if (event.url.pathname.startsWith('/api')) {
		// Required for CORS to work
		if (event.request.method === 'OPTIONS') {
			return new Response(null, {
				headers: {
					'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
					'Access-Control-Allow-Origin': cors,
					'Access-Control-Allow-Headers': '*'
				}
			});
		}
	}

	const response = await resolve(event);
	if (event.url.pathname.startsWith('/api')) {
		response.headers.append('Access-Control-Allow-Origin', `*`);
	}
	return response;
};
