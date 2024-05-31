// components/shared/ClientLayout.tsx
"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Footer from "@/components/shared/Footer";
import GetInTouchBtn from "@/components/shared/Forms/GetInTouchBtn";
import Loader from "@/components/shared/Loader";
import Navbar from "@/components/shared/Navbar";

const ClientLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1000); // Adjust the timeout as needed

		return () => clearTimeout(timer);
	}, []);

	if (loading) return <Loader />;
	return (
		<>
			<Navbar />

			<GetInTouchBtn
				classNames="fixed bottom-[40%] right-0 transform translate-x-[46px] -rotate-90 bg-primary text-white p-4 pb-5 w-[160px] flex items-center justify-center rounded-t-xl border-2 border-white font-semib z-30"
				text="Get In Touch"
			/>
			<section className="flex min-h-screen flex-1">
				<div className="w-full h-full">{children}</div>
			</section>
			<Footer />
		</>
	);
};

export default ClientLayout;
