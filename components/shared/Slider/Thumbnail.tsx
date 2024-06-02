import Image from "next/image";
import React from "react";
import { Button } from "../../ui/button";
import Link from "next/link";

export type ThumbnailProps = {
	service: {
		image: string;
		label: string;
	};
	currentSlide: number;
	index: number;
};

const Thumbnail = ({ service, currentSlide, index }: ThumbnailProps) => {
	const isActive = index === currentSlide;
	return (
		<div
			className={`relative h-72 min-w-[300px] cursor-pointer  md:min-w-[400px] rounded-xl mx-4 ${
				isActive && "bg-background-1"
			}`}
		>
			<Image
				src={`${service.image}`}
				alt="Service"
				layout="fill"
				className="object-cover rounded-xl"
			/>
			<div className="absolute bottom-0 flex flex-col items-start justify-center p-4 gap-4 bg-gradient-to-t from-dark-1 to-black/5 text-white text-lg w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-t-none rounded-xl">
				<span>{service.label}</span>
				<Link href="/services">
					<Button className="bg-secondary hoverScaleDownEffect">
						Find Out More
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Thumbnail;
