"use client";

import { values } from "@/constants";
import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useInView } from "react-intersection-observer";
import Image from "next/image";

export type ValueCardProps = {
	label: string;
	companyValue: string;
	image: string;
};

const ValueCard = ({ value }: { value: ValueCardProps }) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});
	return (
		<VerticalTimelineElement
			visible={inView}
			contentStyle={{
				background: "#f9f9f9",
				color: "black",
				boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
			}}
			iconStyle={{ background: "#ffffff", color: "#fff" }}
			icon={
				<div
					className="flex items-center justify-center h-full w-full"
					ref={ref}
				>
					<Image
						src="/icons/quot.png"
						alt=""
						height={100}
						width={100}
						className="w-5 h-5 self-center"
					/>
				</div>
			}
		>
			<section>
				<h3 className="text-primary text-[24px] font-bold">{value.label}</h3>
				<p className="text-secondary text-[16px] font-semibold m-0">
					Our Value
				</p>

				<span className="text-black-100 text-[14px] tracking-wider">
					{value.companyValue}
				</span>
			</section>
		</VerticalTimelineElement>
	);
};

const CompanyValues = () => {
	return (
		<div className="flex flex-col lg:flex-row-reverse items-center  justify-center lg:justify-between  gap-14 py-16 bg-background-1 px-7 sm:px-16 xl:px-32">
			<div className="flex  flex-col gap-8 items-start justify-center w-full h-full">
				<h2 className="text-center md:text-start self-start text-2xl md:text-4xl text-primary font-semibold w-full">
					Company Values for Dignity Direct Supports
				</h2>
				<div className="mt-10 mx-auto">
					<VerticalTimeline
						animate={true}
						layout={"2-columns"}
						lineColor="#ffffff"
					>
						{values.map((value, index) => (
							<ValueCard key={index} value={value} />
						))}
					</VerticalTimeline>
				</div>
			</div>
		</div>
	);
};

export default CompanyValues;
