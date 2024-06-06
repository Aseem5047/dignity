import Image from "next/image";
import React from "react";

export type UserCardProp = {
	_id: string;
	testimonial: string;
	name: string;
	designation?: string;
	company?: string;
	image: string;
};

const UserCard = ({
	feedback,
	currentSlide,
	index,
}: {
	feedback?: UserCardProp;
	currentSlide: any;
	index: number;
}) => {
	const { _id, testimonial, name, image } = feedback!;
	const isActive =
		index - 1 === currentSlide || parseInt(_id) + 1 === currentSlide;
	console.log(isActive);
	return (
		<div
			className={`relative h-60 w-full cursor-pointer rounded-xl flex items-center justify-between gap-4 p-2 lg:p-4 transition-transform duration-300 ${
				isActive ? " bg-[#F9F9F9]" : "transform scale-100"
			}`}
		>
			{/* <Image
				src={image}
				alt="User"
				width={300}
				height={300}
				className="rounded-xl w-44 h-52 object-cover"
			/> */}

			<div className="flex flex-col items-start justify-center h-full gap-4">
				<span className="text-base">{testimonial}</span>
				<span className="text-primary font-medium">{name}</span>
			</div>

			<Image
				src="/icons/quot.png"
				alt=""
				height={100}
				width={100}
				className="w-6 h-4 self-start"
			/>
		</div>
	);
};

export default UserCard;
