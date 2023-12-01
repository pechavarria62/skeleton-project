import './global.css';
import { ClerkProvider } from '@clerk/nextjs';
import React from 'react';
import Navigation from './components/Navigation';

export const metadata = {
	title: 'Support Local',
	description: 'Support local businesses and non-profits.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className="p-0">
					{/* <header className="flex justify-between items-center bg-gradient-to-br from-blue to-green"> */}
					<Navigation />
					{/* </header> */}
					<div className="p-4 flex justify-center">{children}</div>
				</body>
			</html>
		</ClerkProvider>
	);
}
