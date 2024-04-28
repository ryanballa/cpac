import { sveltekit } from '@sveltejs/kit/vite';
import houdini from 'houdini/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [houdini(), sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "src/lib/scss/_cpac_colors"; @import "vanilla-framework";'
			}
		}
	}
});
