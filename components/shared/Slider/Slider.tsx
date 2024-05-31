"use client";
import React, { useRef } from "react";
import { services } from "@/constants";
import Thumbnail from "./Thumbnail";
import NavigationBtn from "./NavigationBtn";

const Slider = () => {
	const rowRef = useRef<HTMLDivElement>(null);

	const handleClick = (direction: any) => {
		if (rowRef.current) {
			const { scrollLeft, clientWidth } = rowRef.current;
			const scrollTo =
				direction === "left"
					? scrollLeft - clientWidth
					: scrollLeft + clientWidth;

			rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
		}
	};
	return (
		<div className="py-14 w-full px-7 sm:px-16 xl:px-32 z-20">
			{/* heading and navigation */}
			<div className="flex flex-wrap gap-4 items-center justify-between w-full">
				<div className="flex flex-col items-start justify-center w-fit">
					<h2 className="font-semibold text-2xl md:text-4xl">Our Services</h2>
					<span className="text-gray-400 text-lg">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
						quas.
					</span>
				</div>
				<NavigationBtn handleClick={handleClick} />
			</div>

			{/* services */}
			<div className="group md:-ml-2 pt-10">
				<div
					ref={rowRef}
					className="flex items-center  overflow-x-scroll no-scrollbar gap-4 rounded-xl"
				>
					{services.map((service) => (
						<Thumbnail key={service.label} service={service} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Slider;
