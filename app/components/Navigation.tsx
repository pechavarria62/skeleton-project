'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

interface NavigationLink {
	name: string;
	route: string;
}

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const navLinks: Array<NavigationLink> = [{ name: 'Home', route: '/' }];
	return (
		<header className="py-2 bg-gradient-to-br from-blue to-green">
			<div className="flex items-center justify-between xl:max-w-7xl mx-auto max-w-full px-[8%] flex-wrap w-full">
				<div className="px-2 py-2 bg-blue rounded-lg lg:hidden">
					<FiMenu
						className="block h-6 w-6 cursor-pointer text-white "
						onClick={() => setIsOpen(!isOpen)}
					/>
				</div>

				<nav className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto w-full`}>
					<ul className="text-base text-white mr-4 lg:flex lg:justify-between">
						{navLinks.map(link => (
							<li key={link.name}>
								<Link
									href={link.route}
									className="lg:px-5 py-2 inline-block hover:text-gray-dark font-semibold"
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
					<SignedIn>
						<UserButton />
					</SignedIn>
					<SignedOut>
						<SignInButton mode="modal">
							<button className="lg:px-5 py-2 bg-blue rounded-lg text-white hover:bg-green hover:text-black">
								Sign In
							</button>
						</SignInButton>
					</SignedOut>
				</nav>
			</div>
		</header>
	);
}
