"use client";
import React from "react";

import Carousel from "../Slider/Carousel";

const Testimonials = () => {
	return (
		<div className="flex flex-col items-center justify-center px-7 py-20">
			<div className="flex flex-col items-center justify-center gap-7">
				<p className="text-secondary font-medium text-xl">Testimonials</p>
				<h2 className="text-3xl text-center sm:text-4xl font-medium pb-2">
					What Our Clients Say About Us
				</h2>
				<span className="text-base tracking-widest w-full md:w-1/2 text-center">
				Here&apos;s what some of our satisfied clients have to say about their experience with us. Their words reflect our commitment to excellence and our dedication to providing exceptional service. We are proud to share these testimonials as a testament to the positive impact we strive to make in every interaction.
				</span>
			</div>

			<Carousel />
		</div>
	);
};

export default Testimonials;
