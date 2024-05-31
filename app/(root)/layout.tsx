import Footer from "@/components/shared/Footer";
import GetInTouchBtn from "@/components/shared/Forms/GetInTouchBtn";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";
import Link from "next/link";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Dignity Direct Supports",
	description: "Empowering With Dignity.",
	icons: {
		icon: "/icons/logo.jpg",
	},
};

const HomeLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<main className="relative">
			<Navbar />
			<GetInTouchBtn />
			<section className="flex min-h-screen flex-1">
				<div className="w-full h-full">{children}</div>
			</section>

			<Footer />
		</main>
	);
};

export default HomeLayout;
