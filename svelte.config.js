import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true,
		defaults: {
			style: 'postcss',
		},
	}),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		// hydrate: false,
		// router: false,
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
		}),
		files: {
			assets: 'static',
			lib: 'src/lib',
			routes: 'src/routes',
			template: 'src/app.html',
		},
	},
};

export default config;
