import CompanyValues from "@/components/shared/Career/CompanyValues";
import OurMission from "@/components/shared/Banner/OurMission";
import PageBanner from "@/components/shared/Banner/PageBanner";
import Testimonials from "@/components/shared/Testimonials/Testimonials";
import WhatWeDo from "@/components/shared/Banner/WhatWeDo";
import Image from "next/image";
import React from "react";

const About = () => {
	return (
		<div className="h-full bg-white">
			{/* main banner */}
			<PageBanner
				title="ABOUT OUR COMPANY"
				description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
					officiis sequi! Aperiam neque iusto libero consectetur pariatur cum
					est quos!"
			/>
			{/* banners */}
			<div className="w-full flex items-center justify-center  px-7 md:px-14 xl:px-32 py-16">
				<div className="grid grid-cols-[2fr_1fr] items-center overflow-x-scroll no-scrollbar gap-5">
					<Image
						src="/assets/about/about.png"
						alt=""
						width={500}
						height={500}
						className="w-full  min-w-[500px] max-w-[600px] h-[400px] rounded-xl"
					/>
					<Image
						src="/assets/about/about_1.png"
						alt=""
						width={500}
						height={500}
						className="w-full  min-w-[250px] max-w-[300px] h-[400px] rounded-xl"
					/>
				</div>
			</div>

			{/* what we do */}
			<WhatWeDo />

			{/* our mission */}
			<OurMission />

			{/* company values */}
			<CompanyValues />

			{/* testimonials */}
			<Testimonials />
		</div>
	);
};

export default About;
