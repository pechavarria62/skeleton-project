import React from 'react';

export default async function Home() {
	// "Railway oriented programming" using Result monad type
	// Consider using an alternative approach to avoid try/catch
	// https://github.com/supermacro/neverthrow
	// https://davidwells.io/blog/cleaner-async-await-code-without-try-catch

	return (
		<div>
			<div className="flex flex-col gap-4"></div>
		</div>
	);
}
