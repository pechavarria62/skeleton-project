import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		baseUrl: 'http://localhost:3000/',
		defaultCommandTimeout: 30000,
		env: {
			CLERK_TEST_EMAIL: 'ops+clerk_test@joyofcoding.academy', // +clerk_test allows any email to work as long as the user is signed up and the password is correct
			CLERK_HOST: 'https://sincere-tuna-17.accounts.dev',

			// CYPRESS_CLERK_TEST_PASSWORD is a secret loaded from cypress.env.json locally, and the GHActions env in CI
			// The CYPRESS_ prefix is needed so it can be exposed to the cypress runtime
		},
		// defaultCommandTimeout: 10000,
	},

	component: {
		devServer: {
			framework: 'next',
			bundler: 'webpack',
		},
	},
});
