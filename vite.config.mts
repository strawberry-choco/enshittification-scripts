import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [],
    resolve: {
        preserveSymlinks: true,
    },
    build: {
        target: 'es2022',
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'index',
            fileName: () => 'index.js',
            formats: ['es'],
        },
    },
});
