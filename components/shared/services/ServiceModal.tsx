import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { DialogClose } from "@radix-ui/react-dialog";
import Image from "next/image";
import GetInTouchBtn from "../Forms/GetInTouchBtn";

const ServiceModal = ({
	mission,
}: {
	mission: {
		imageURL: string;
		label: string;
		sublabel?: string;
		description?: string;
	};
}) => {
	const { imageURL, label, sublabel, description } = mission;

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="bg-secondary text-white hoverScaleEffect">
					Find Out More
				</Button>
			</DialogTrigger>
			<DialogContent className="bg-white w-[85%] lg:w-1/2 p-7 rounded-xl">
				<div className="flex flex-col lg:flex-row items-center justify-center w-full gap-7">
					<Image
						src={imageURL}
						alt={label}
						width={150}
						height={150}
						className="rounded-full w-44 h-44 object-cover"
					/>

					<div className="flex flex-col gap-5 items-start justify-center">
						<span className="text-lg font-semibold">{label}</span>
						<span className="min-h-12">{description}</span>
						<span className="text-xs text-gray-400">{sublabel}</span>
						<GetInTouchBtn
							classNames="font-semibold bg-primary text-white rounded-xl p-4"
							text="Contact Us"
						/>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default ServiceModal;
