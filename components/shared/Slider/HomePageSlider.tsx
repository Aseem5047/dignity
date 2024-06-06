"use client";

import React, { useEffect, useRef, useState } from "react";
import { services } from "@/constants";
import Thumbnail from "./Thumbnail";
import Slider from "react-slick";
import { NavigationBtnLeft, NavigationBtnRight } from "./NavigationBtn";

const HomePageSlider = () => {
	const rowRef = useRef<HTMLDivElement>(null);
	const sliderRef = useRef<Slider>(null);
	const [currentSlide, setCurrentSlide] = useState(
		Math.floor(services.length / 2)
	);

	useEffect(() => {
		// Set initial slide to the middle card
		setCurrentSlide(Math.floor(services.length / 2));
	}, []);

	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 3,
		centerMode: true,
		draggable: true,
		focusOnSelect: false,
		slidesToScroll: 1,
		speed: 1000,
		centerPadding: "0px",
		cssEase: "ease-in-out",
		nextArrow: <NavigationBtnRight onClick={() => handleNext()} />,
		prevArrow: <NavigationBtnLeft onClick={() => handlePrev()} />,
		initialSlide: Math.floor(services.length / 2),
		afterChange: (current: number) => setCurrentSlide(current),
		responsive: [
			{
				breakpoint: 950,
				settings: {
					slidesToShow: 1,
					centerMode: false,
				},
			},
			{
				breakpoint: 1536,
				settings: {
					slidesToShow: 2,
					centerMode: false,
				},
			},
		],
	};

	const handleNext = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext();
			// Update current slide immediately
			setCurrentSlide((prev) => (prev + 1) % services.length);
		}
	};

	const handlePrev = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev();
			// Update current slide immediately
			setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
		}
	};

	return (
		<div className="py-14 w-full px-7 sm:px-16 xl:px-32 z-20">
			{/* heading and navigation */}
			<div className="flex flex-wrap gap-4 items-center justify-between w-full">
				<div className="flex flex-col items-start justify-center w-fit">
					<h2 className="font-semibold text-3xl md:text-4xl">Our Services</h2>
					<span className="text-gray-400 text-lg mt-2">
						We focus on the needs of the individuals we care for, ensuring our
						support makes a positive difference in their lives.
					</span>
				</div>
			</div>

			{/* services */}
			<div ref={rowRef} className="w-full mt-10 relative">
				<Slider ref={sliderRef} {...settings}>
					{services.map((service, index) => (
						<Thumbnail
							key={service.label}
							service={service}
							currentSlide={currentSlide}
							index={index}
						/>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default HomePageSlider;
