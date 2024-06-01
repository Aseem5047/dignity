import { values } from "@/constants";
import Image from "next/image";
import React from "react";

const CompanyValues = () => {
	return (
		<div className="flex flex-col lg:flex-row-reverse items-center  justify-center lg:justify-between  gap-14 py-16 bg-background-1 px-7 sm:px-16 xl:px-32">
			<div className="flex  flex-col gap-8 items-start justify-center w-full h-full">
				<h2 className="text-center md:text-start self-start text-2xl md:text-4xl text-primary font-semibold w-full">
					Company Values for Dignity Direct Supports
				</h2>
				<ul className="flex flex-col gap-2 px-6">
					{values.map((value, index) => (
						<li key={index} className="list-decimal">
							<span className="text-base font-medium">{value.label}: </span>
							<span className="text-base">{value.value}</span>
						</li>
					))}
				</ul>
			</div>
			<Image
				src="/assets/values/values.png"
				alt=""
				width={500}
				height={500}
				className="w-3/4 h-[300px] rounded-xl object-cover"
			/>
		</div>
	);
};

export default CompanyValues;
