import React from "react";
import { Button } from "../../ui/button";
import Link from "next/link";

const WhatWeDo = () => {
	return (
		<div className="flex flex-col items-center justify-center w-full gap-14 py-16 bg-background-1">
			<div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] items-center gap-4 justify-center w-full px-7 sm:px-16 xl:px-32">
				<h1 className="text-center md:text-start self-start text-3xl md:text-4xl text-primary font-semibold w-full">
					What We Do
				</h1>
				<div className="flex flex-col gap-4 text-center md:text-start">
					<span>
						At Dignity Direct Supports, our unwavering commitment is to empower
						individuals with disabilities through our tailored and comprehensive
						support services. Our mission is centered on enriching independence
						and enhancing quality of life through active community involvement,
						personalized assistance with daily activities, and nurturing life
						skills development. With a focus on inclusivity, we aspire to foster
						an environment where every individual can flourish and thrive.
					</span>
					<span>
						At Dignity Direct Supports, we extend our assistance beyond the
						essential household tasks to encompass one-on-one activities,
						in-home support, and dependable transport services. Our holistic
						approach ensures that every facet of our clients&apos; lives
						receives attention, from daily living and personal care to social
						engagement and mobility. By eliminating barriers and delivering
						unwavering, high-quality support, we empower our clients to embrace
						life to the fullest.
					</span>
				</div>
			</div>

			<Button className="text-white bg-secondary w-fit hoverScaleEffect">
				<Link href={"/about"}>About Us</Link>
			</Button>
		</div>
	);
};

export default WhatWeDo;
