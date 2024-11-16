import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Preprocessor configuration for handling Svelte files with Vite
  preprocess: vitePreprocess(),

  kit: {
    // Adapter configuration for static site generation
    adapter: adapter({
      pages: 'build',    // Directory for outputted pages
      assets: 'build',   // Directory for outputted assets
      fallback: 'index.html', // Fallback for single-page applications
      precompress: false // Set to true if you want files to be precompressed (e.g., gzip)
    }),

    // Paths for custom configurations
    paths: {
      base: '', // Adjust this if deploying under a subdirectory
      assets: '' // Leave empty for default
    },

    // CSP, headers, etc.
    csp: {
      mode: 'auto'
    }
  },

  // Handle warnings during the build process
  onwarn: (warning, handler) => {
    const { code } = warning;
    // Ignore specific warning codes
    if (code === 'css-unused-selector') return;

    // Pass other warnings to the default handler
    handler(warning);
  }
};

export default config;
