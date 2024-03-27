import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-cloudflare';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// See below for an explanation of these options
			routes: {
				include: ['<all>'],
				exclude: ['/*']
			},
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		alias: {
			$houdini: path.resolve('.', '$houdini')
		},
		prerender: {
			handleMissingId: 'ignore',
			handleHttpError: ({ path, referrer, message }) => {
				// ignore deliberate link to shiny 404 page
				console.log(`>>>>>> Error Pre-Render for ${path}`);

				// otherwise fail the build
				throw new Error(message);
			}
		}
	},
	preprocess: [vitePreprocess({})]
};

export default config;
