import Hero from "@/components/shared/Banner/Hero";
import WhatWeDo from "@/components/shared/Banner/WhatWeDo";
import HomePageSlider from "@/components/shared/Slider/HomePageSlider";
import React from "react";

const HomePage = () => {
	return (
		<section className="flex size-full flex-col bg-white">
			{/* Background Image */}
			<Hero />

			{/* Content */}
			<div className="bg-white w-full py-16 md:py-24 flex items-center justify-center">
				<h1 className="text-2xl md:text-4xl text-primary px-7 w-full max-w-[835px] font-semibold text-center leading-snug">
					Empowering you to achieve and exceed your dreams with heartfelt,
					personalized support
				</h1>
			</div>

			{/* What we Do */}
			<WhatWeDo />

			{/* Slider */}
			<HomePageSlider />
		</section>
	);
};

export default HomePage;
