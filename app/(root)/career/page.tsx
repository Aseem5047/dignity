import PageBanner from "@/components/shared/Banner/PageBanner";
import CareerForm from "@/components/shared/Forms/CareerForm";
import { staffPointers } from "@/constants";
import React from "react";

const Carrer = () => {
	return (
		<div className="h-full">
			{/* main banner */}

			<PageBanner
				title="CAREERS"
				description="Join to Support Team !"
			/>

			<div className="flex flex-col items-center justify-center gap-5 lg:px-32 2xl:px-44 py-14">
				<div className="flex flex-col items-center 2xl:items-start justify-center gap-4 text-start px-7 lg:px-14 2xl:px-28 w-fit">
					{/* main heading */}
					<h1 className="text-primary text-4xl  font-semibold ">
						Are you looking for a career in the National Disability Services
						Industry?
					</h1>
					{/* subheading */}
					<span className="text-sm tracking-wider ">
						When hiring new staff, we take a strict and selective approach.
					</span>
				</div>

				{/* content & points */}
				<div className="flex flex-col items-start gap-4 p-7">
					<span className="text-base">Staff must have: </span>
					{/* pointers */}
					<ul className="flex flex-col gap-2 px-7">
						{staffPointers.map((pointer, index) => (
							<li key={index} className="list-decimal">
								<span>{pointer}</span>
							</li>
						))}
					</ul>
					{/* disclaimer */}
					If you meet the criteria above, we would love to hear from you. Fill
					out our form below and one of our representatives will be in touch
					very soon!
				</div>

				{/* Career Form */}
				<CareerForm />
			</div>
		</div>
	);
};

export default Carrer;
