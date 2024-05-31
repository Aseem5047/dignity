import React from "react";
import { Button } from "../../ui/button";

const WhatWeDo = () => {
	return (
		<div className="flex flex-col items-center justify-center w-full gap-14 py-16 bg-background-1">
			<div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] items-center gap-4 justify-center w-full px-7 sm:px-16 xl:px-32">
				<h1 className="text-center md:text-start self-start text-2xl md:text-4xl text-primary font-semibold w-full">
					What We Do
				</h1>
				<div className="flex flex-col gap-4 text-center md:text-start">
					<span>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has a more-or-less normal
						distribution of letters, as opposed to using.
					</span>
					<span>
						Content here, making it look like readable English. Many desktop
						publishing packages and web page editors now use Lorem Ipsum as
						their default model text, and a search for lorem ipsum will uncover
						many web sites still in their infancy.
					</span>
				</div>
			</div>

			<Button className="text-white bg-secondary w-fit hoverScaleEffect">
				Apply Now
			</Button>
		</div>
	);
};

export default WhatWeDo;
