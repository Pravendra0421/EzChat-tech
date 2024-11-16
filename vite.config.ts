//import { sveltekit } from '@sveltejs/kit/vite';
//import { defineConfig } from 'vite';
//
//// /** @type {import('vite').Plugin} */
//// const viteServerConfig = {
//// 	name: 'log-request-middleware',
//// 	configureServer(server) {
//// 		server.middlewares.use((req, res, next) => {
//// 			res.setHeader('Access-Control-Allow-Origin', '*');
//// 			res.setHeader('Access-Control-Allow-Methods', 'GET');
//// 			res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
//// 			res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
//// 			next();
//// 		});
//// 	}
//// };
//
//export default defineConfig({
//	plugins: [sveltekit()],
//	define: {
//		APP_VERSION: JSON.stringify(process.env.npm_package_version),
//		APP_BUILD_HASH: JSON.stringify(process.env.APP_BUILD_HASH || 'dev-build')
//	},
//	build: {
//		sourcemap: true
//	},
//	worker: {
//		format: 'es'
//	}
//});




import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// Adding middleware configuration (optional)
//const viteServerConfig = {
//  name: 'log-request-middleware',
//  configureServer(server) {
//    server.middlewares.use((req, res, next) => {
//      res.setHeader('Access-Control-Allow-Origin', '*');
//      res.setHeader('Access-Control-Allow-Methods', 'GET');
//      res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
//      res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
//      next();
//    });
//  }
//};

export default defineConfig({
  plugins: [sveltekit()], // Include middleware if needed
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
    APP_BUILD_HASH: JSON.stringify(process.env.APP_BUILD_HASH || 'dev-build')
  },
  build: {
    outDir: 'build', // Specify the output directory for build artifacts
    sourcemap: true // Include sourcemaps for easier debugging
  },
  worker: {
    format: 'es' // Use ECMAScript module format for web workers
  },
  server: {
    // Optional server configuration if you need to specify host/port or additional settings
    host: true,
    port: 3000
  }
});


