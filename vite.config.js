import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import houdini from 'houdini/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [houdini(), sveltekit(), enhancedImages()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "src/lib/scss/_cpac_colors"; @import "vanilla-framework";'
			}
		}
	}
});
