import React from "react";
import { Button } from "../../ui/button";

export const NavigationBtnRight = (props: any) => {
	return (
		<>
			{/* right arrow */}
			<Button
				{...props}
				className="!hidden md:!block text-white rounded-full p-2 hoverScaleEffect absolute -top-14 right-0 z-20 transform -translate-y-1/2"
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
		</>
	);
};

export const NavigationBtnLeft = (props: any) => {
	return (
		<>
			{/* left arrow */}
			<Button
				{...props}
				className="!hidden md:!block text-white rounded-full p-2 hoverScaleEffect absolute -top-14 right-12 z-20 transform -translate-y-1/2"
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
		</>
	);
};
