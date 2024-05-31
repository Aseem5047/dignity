import React from "react";
import { Button } from "../../ui/button";
export type NavigationBtnProps = {
	handleClick: (direction: string) => void;
};

const NavigationBtn = ({ handleClick }: NavigationBtnProps) => {
	return (
		<div className="hidden sm:flex items-center gap-4">
			{/* left arrow */}
			<Button
				className=" text-white rounded-full p-2 hoverScaleEffect"
				onClick={() => handleClick("left")}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 19.5 8.25 12l7.5-7.5"
					/>
				</svg>
			</Button>
			{/* right arrow */}
			<Button
				className=" text-white rounded-full p-2 hoverScaleEffect"
				onClick={() => handleClick("right")}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m8.25 4.5 7.5 7.5-7.5 7.5"
					/>
				</svg>
			</Button>
		</div>
	);
};

export default NavigationBtn;
