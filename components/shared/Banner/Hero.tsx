import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<div className="relative flex flex-col items-center justify-center w-full h-[303px] lg:h-[620px]">
			<Image
				src="/assets/hero.png"
				alt="service banner"
				layout="fill"
				className="object-fill "
			/>
		</div>
	);
};

export default Hero;
