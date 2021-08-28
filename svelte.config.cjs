import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
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
		adapter: require("@sveltejs/adapter-static")(),
		files: {
			assets: 'static',
			lib: 'src/lib',
			routes: 'src/routes',
			template: 'src/app.html',
		},
	},
};
