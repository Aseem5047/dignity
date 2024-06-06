"use client";

import ServiceCard from "@/components/shared/services/ServiceCard";
import { ourmission } from "@/constants";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const Services: React.FC = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 5,
		centerMode: false,
		draggable: false,
		focusOnSelect: false,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: false,
		speed: 2500,
		autoplaySpeed: 2500,
		cssEase: "ease-in-out",

		responsive: [
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					centerMode: false,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					centerMode: false,
				},
			},

			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					centerMode: false,
				},
			},

			{
				breakpoint: 1356,
				settings: {
					slidesToShow: 4,
					centerMode: false,
				},
			},
		],
	};

	return (
		<div className="flex flex-col items-center justify-center gap-7">
			{/* banner 1 */}
			<div className="relative flex flex-col items-center justify-center w-full h-[400px] lg:h-[650px]">
				<Image
					src="/assets/services/serviceBanner.png"
					alt="service banner"
					layout="fill"
					className="object-cover "
					priority
				/>
				<div className="w-full flex-1 flex flex-col justify-center items-center gap-2 text-white px-4 bg-black/50 z-20">
					<h2 className="text-3xl text-center sm:text-4xl font-medium pb-2 uppercase tracking-wider">
						“Empowering Lives, Enabling Futures”
					</h2>
					<span className="text-base tracking-widest w-full md:w-3/4 xl:w-1/2 text-center">
					At Dignity Direct Supports,, we are dedicated to transforming the lives of 
					individuals with disabilities through compassionate care and innovative services. 
					Our tailored support programs ensure every person can live a fulfilling and independent life,
					embracing their unique abilities.
					</span>
				</div>
			</div>

			{/* Our Mission */}
			<div className="flex flex-col items-start justify-center py-14 w-full px-7 sm:pl-16 xl:pl-32 z-20 gap-4">
				<h2 className="text-primary text-center text-4xl font-semibold pb-2">
					Our Services
				</h2>
				<div className="w-full mt-10">
					<Slider {...settings}>
						{ourmission.map((mission) => (
							<ServiceCard mission={mission} key={mission.label} />
						))}
					</Slider>
				</div>
			</div>

			{/* banner 2 */}
			<div className="relative flex flex-col items-center justify-center w-full h-[500px] lg:h-[613px]">
				<Image
					src="/assets/services/serviceBanner_1.png"
					alt="service banner"
					layout="fill"
					className="object-cover "
				/>
				<div className="w-full flex-1 flex flex-col justify-center items-center gap-2 text-white bg-black/50 z-20 px-5">
					<h2 className="w-full lg:w-1/2 leading-[3rem] lg:leading-[4rem] text-2xl text-center lg:text-4xl pb-2 tracking-wider">
						“Everything we do is based around the needs of the individual we’re
						caring for. It’s vital to us that we’re not just supporting them,
						but that we’re actively making a positive difference in their life.”
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Services;
