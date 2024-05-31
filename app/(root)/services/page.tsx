import ServiceCard from "@/components/shared/services/ServiceCard";
import { ourmission } from "@/constants";
import Image from "next/image";
import React from "react";

const Services = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-7">
			{/* banner 1 */}
			<div className="relative flex flex-col items-center justify-center w-full h-[400px] lg:h-[650px]">
				<Image
					src="/assets/services/serviceBanner.png"
					alt="service banner"
					layout="fill"
					className="object-cover "
					priority
				/>
				<div className="w-full flex-1 flex flex-col justify-center items-center gap-2 text-white px-4 bg-black/50 z-20">
					<h2 className="text-3xl text-center sm:text-4xl font-medium pb-2 uppercase tracking-wider">
						“I don’t need easy, I just need possible.”
					</h2>
					<span className="text-base tracking-widest w-full md:w-3/4 xl:w-1/2 text-center">
						In publishing and graphic design, Lorem ipsum is a placeholder text
						commonly used to demonstrate the visual form of a document or a
						typeface without relying on meaningful content. Lorem ipsum may be
						used as a placeholder before final copy is available
					</span>
				</div>
			</div>

			{/* Our Mission */}
			<div className="flex flex-col items-start justify-center py-14 w-full px-7 sm:pl-16 xl:pl-32 z-20 gap-4">
				<h2 className="text-primary text-center text-4xl font-semibold pb-2">
					Our Mission
				</h2>
				<div className="flex w-full gap-10 items-center justify-start overflow-x-scroll no-scrollbar">
					{ourmission.map((mission) => (
						<ServiceCard mission={mission} key={mission.label} />
					))}
				</div>
			</div>

			{/* banner 2 */}
			<div className="relative flex flex-col items-center justify-center w-full h-[500px] lg:h-[613px]">
				<Image
					src="/assets/services/serviceBanner_1.png"
					alt="service banner"
					layout="fill"
					className="object-cover "
				/>
				<div className="w-full flex-1 flex flex-col justify-center items-center gap-2 text-white bg-black/50 z-20 px-5">
					<h2 className="w-full lg:w-1/2 leading-[3rem] lg:leading-[4rem] text-2xl text-center lg:text-4xl pb-2 tracking-wider">
						“Everything we do is based around the needs of the individual we’re
						caring for. It’s vital to us that we’re not just supporting them,
						but that we’re actively making a positive difference in their life.”
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Services;
