import Image from "next/image";
import React from "react";

const OurMission = () => {
	return (
		<div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between  gap-14 py-16 bg-white px-7 sm:px-16 xl:px-32">
			<div className="flex  flex-col gap-8 items-start justify-center w-full h-full">
				<h2 className="text-center md:text-start self-start text-2xl md:text-4xl text-primary font-semibold w-full">
					Our Mission
				</h2>
				<div className="flex flex-col items-center justify-center gap-7">
					<span>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
						iure facere quidem dolorum velit amet ut officia porro ullam eius
						corrupti, maxime fuga nisi voluptatibus labore ducimus veritatis in
						sit laboriosam minima? Facilis facere fuga qui corrupti sint natus
						perferendis?
					</span>
					<span>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
						iure facere quidem dolorum velit amet ut officia porro ullam eius
						corrupti, maxime fuga nisi voluptatibus labore ducimus veritatis in
						sit laboriosam minima? Facilis facere fuga qui corrupti sint natus
						perferendis?
					</span>
				</div>
			</div>
			<Image
				src="/assets/mission/mission.png"
				alt=""
				width={500}
				height={500}
				className="w-3/4 h-[300px] rounded-xl object-cover"
			/>
		</div>
	);
};

export default OurMission;
