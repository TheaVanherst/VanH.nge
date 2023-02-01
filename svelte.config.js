import adapter from '@sveltejs/adapter-auto';
import { sveltePreprocess } from "svelte-preprocess/dist/autoProcess.js";
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$components:	path.resolve('./src/components'),
			$routes: 		path.resolve('./src/routes'),
			$cms:			path.resolve('./cms'),
		}
	}
};

export default config;
