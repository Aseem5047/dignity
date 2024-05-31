import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, footerContactInfo, socials } from "@/constants";

interface FooterColumnProps {
	title: string;
	children: React.ReactNode;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, children }) => {
	return (
		<div className="flex flex-col gap-5">
			<h4 className="text-xl font-semibold whitespace-nowrap">{title}</h4>
			{children}
		</div>
	);
};

const Footer: React.FC = () => {
	return (
		<footer className="flex items-center justify-center  py-10 bg-primary text-white">
			<div className="max-w-full flex w-full flex-col gap-14">
				<div className="flex flex-col items-start justify-evenly gap-10 px-7 sm:px-10 lg:px-20  lg:flex-row">
					<Link
						href="/"
						className="flex items-center justify-center sm:justify-start w-full lg:w-auto"
					>
						<Image
							src="/icons/logo.png"
							width={135}
							height={135}
							alt="unite logo"
							className="w-44 h-32 hoverScaleEffect invert-1 brightness-0"
						/>
					</Link>

					<div className="flex flex-wrap gap-10 md:flex-1 items-start 2xl:justify-center">
						{FOOTER_LINKS.map((columns) => (
							<FooterColumn key={columns.title} title={columns.title}>
								<ul className="flex flex-col gap-4">
									{columns.links.map((link, index) => (
										<li key={index} className="hoverScaleEffect w-fit">
											<Link
												href={link.route}
												className="text-[16px] font-[400]"
											>
												{link.label}
											</Link>
										</li>
									))}
								</ul>
							</FooterColumn>
						))}

						<div className="flex flex-col gap-5">
							<FooterColumn title={footerContactInfo.title}>
								{footerContactInfo.links.map((link) => (
									<div
										key={link.label}
										className="flex gap-4 md:flex-col lg:flex-row"
									>
										<p className="whitespace-nowrap text-base">{link.label}:</p>
										{link.type === "mobile" ? (
											<Link
												href="tel:+91 8894966484"
												className="text-base whitespace-nowrap hoverScaleEffect hover:scale-105"
											>
												{link.value}
											</Link>
										) : (
											<Link
												href="mailto:aseemgupta2002@gmail.com"
												className="text-base whitespace-nowrap hoverScaleEffect hover:scale-105"
											>
												{link.value}
											</Link>
										)}
									</div>
								))}
							</FooterColumn>
						</div>

						<div className="flex flex-col items-start justify-start gap-4 w-full md:max-w-[33%]">
							<h4 className="text-xl font-semibold whitespace-nowrap">
								Registered Office
							</h4>
							<span className="hoverScaleEffect hover:scale-105 cursor-pointer">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
								commodi ipsam nihil placeat quam molestiae eos debitis mollitia
								enim quos.
							</span>
						</div>

						<div className="flex flex-col gap-5">
							<FooterColumn title={socials.title}>
								<ul className="text-[14px] font-[400] flex gap-4 ">
									{socials.links.map((link, index) => (
										<li key={index} className="hoverScaleEffect w-fit ">
											<Link href="/">
												<Image
													src={link}
													alt="social logo"
													width={24}
													height={24}
												/>
											</Link>
										</li>
									))}
								</ul>
							</FooterColumn>
						</div>
					</div>
				</div>

				<div className="border bg-gray-200 w-full" />
				<p className="text-[14px] font-[400] w-full text-center">
					2024 Dignity Direct Supports | All rights reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
