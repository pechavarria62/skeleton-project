import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Consider migrating the entire app to use vite
// https://www.robinwieruch.de/vite-create-react-app/

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		setupFiles: './tests/setup.ts',
		environment: 'jsdom',
		globals: true, // automatic imports for describe, it, expect, etc
		coverage: {
			provider: 'v8',
			include: ['app/**/*', 'lib/**/*'],
			all: true,
		},
	},
});
