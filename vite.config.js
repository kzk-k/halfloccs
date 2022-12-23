import { defineConfig } from 'vite';
import { splitVendorChunkPlugin } from 'vite';
import htmlPurge from 'vite-plugin-html-purgecss';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        splitVendorChunkPlugin(),
        htmlPurge({
            safelist: ['/^js-/', '/^is-/', '/^splide/'],
        }),
    ],
});
