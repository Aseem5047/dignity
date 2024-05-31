"use client";

import { navbarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
	const pathname = usePathname();
	return (
		<nav className="sticky top-0 left-0 w-full flex items-center justify-between bg-white z-40 px-7 md:px-20 py-2">
			{/* logo */}
			<Link href="/" className="hoverScaleEffect flex items-center w-fit">
				<Image
					src="/icons/logo.png"
					alt="Logo"
					width={135}
					height={135}
					className="h-auto w-20"
					priority
				/>
			</Link>

			{/* navlinks */}
			<div className="hidden md:flex items-center justify-center gap-4">
				{navbarLinks.map((link) => (
					<Link
						href={link.route}
						key={link.label}
						className={`navlinks ${link.route === pathname && "activeNavLink"}`}
					>
						{link.label}
					</Link>
				))}
			</div>

			{/* mobileNav */}
			<div className="md:hidden">
				<MobileNav />
			</div>
		</nav>
	);
};

export default Navbar;
