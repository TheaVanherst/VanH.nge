
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$components:	path.resolve('./src/components'),
			$routes: 		path.resolve('./src/routes'),
			$stores: 		path.resolve('./src/controllers'),

			$cms:			path.resolve('./cms'),
			$root: 			path.resolve('./src'),
		}
	},
	optimizeDeps: {
		exclude: ['svelte-bricks']
	},
};

export default config;
