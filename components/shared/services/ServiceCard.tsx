import Image from "next/image";
import React from "react";
import { Button } from "../../ui/button";
import ServiceModal from "./ServiceModal";

const ServiceCard = ({
	mission,
}: {
	mission: {
		imageURL: string;
		label: string;
		sublabel?: string;
		description?: string;
	};
}) => {
	const { imageURL, label } = mission;
	return (
		<div className="flex flex-col items-center justify-center gap-4 min-h-full min-w-52 text-center py-4">
			<Image
				src={imageURL}
				alt={label}
				width={150}
				height={150}
				className="rounded-full w-52 h-52 object-cover"
			/>
			<span className="min-h-12">{label}</span>

			<ServiceModal mission={mission} />
		</div>
	);
};

export default ServiceCard;
