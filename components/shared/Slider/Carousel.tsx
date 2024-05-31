"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { feedbacks } from "@/constants";
import UserCard from "./UserCard";

export type UserCardProp = {
	_id: string;
	testimonial: string;
	name: string;
	designation?: string;
	company?: string;
	image: string;
};

const Carousel = () => {
	const [currentSlide, setCurrentSlide] = useState(1); // Start at the middle card

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		draggable: true,
		focusOnSelect: true,
		centerPadding: "0px",
		afterChange: (current: number) => setCurrentSlide(current),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerMode: false,
				},
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 2,
					centerMode: false,
				},
			},
			{
				breakpoint: 1536,
				settings: {
					slidesToShow: 3,
					centerMode: true,
				},
			},
		],
	};

	return (
		<div className="w-full mt-10">
			<Slider {...settings}>
				{feedbacks.map((feedback, index) => (
					<UserCard
						key={index}
						feedback={feedback}
						index={index}
						currentSlide={currentSlide}
					/>
				))}
			</Slider>
		</div>
	);
};

export default Carousel;
