
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
			$stores: 		path.resolve('./src/stores'),

			$cms:			path.resolve('./cms'),
		}
	}
};

export default config;
