import React from "react";
import { Button } from "../../ui/button";
import { Description } from "@radix-ui/react-toast";

export type PageBannerProps = {
	title: string;
	description: string;
	buttonText?: string;
};

const PageBanner = ({ title, description, buttonText }: PageBannerProps) => {
	return (
		<div className="w-full h-fit md:h-[306px] bg-primary flex flex-col justify-center items-center gap-2 text-white px-4 py-6">
			<h2 className="text-2xl text-center sm:text-4xl font-medium py-2">
				{title}
			</h2>
			<span className="text-base tracking-widest w-full md:w-3/4 xl:w-1/3 text-center">
				{description}
			</span>
			{buttonText && <Button className="bg-secondary">{buttonText}</Button>}
		</div>
	);
};

export default PageBanner;
