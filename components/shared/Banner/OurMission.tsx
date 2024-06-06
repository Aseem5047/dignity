import Image from "next/image";
import React from "react";

const OurMission = () => {
	return (
		<div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between  gap-14 py-16 bg-white px-7 sm:px-16 xl:px-32">
			<div className="flex  flex-col gap-8 items-start justify-center w-full h-full">
				<h2 className="text-center md:text-start self-start text-3xl md:text-4xl text-primary font-semibold w-full">
					Our Mission
				</h2>
				<div className="flex flex-col items-center justify-center gap-7">
					<span>
						At Dignity Direct Supports, our mission is to craft a tapestry of
						care that is as unique as each individual we serve. We are deeply
						committed to accompanying you on your journey, offering heartfelt
						and personalized support that empowers you to not only achieve but
						surpass your dreams. With compassion, trust, and respect forming the
						foundation of our values, we aspire for excellence in every
						interaction. Together, we foster a nurturing community where your
						dignity is revered, your privacy is safeguarded, and your choices
						are celebrated. We are dedicated to infusing each moment with
						meaning and making every goal attainable. Hand in hand with you,
						your family, and professionals, we endeavor to shape a brighter,
						more empowered future.
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
