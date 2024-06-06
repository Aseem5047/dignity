"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { navbarLinks } from "@/constants";
import { cn } from "@/lib/utils";

const MobileNav = () => {
	const pathname = usePathname();

	return (
		<section className="w-full max-w-[264px]">
			<Sheet>
				<SheetTrigger asChild>
					<Image
						src="/icons/hamburger.svg"
						width={33}
						height={33}
						alt="hamburger icon"
						className="cursor-pointer md:hidden invert transition-all duration-500 hover:scale-110"
					/>
				</SheetTrigger>
				<SheetContent
					side="right"
					className="border-none bg-dark-1 rounded-l-xl px-7 py-10 pb-14"
				>
					<Link href="/" className="flex items-center">
						<Image
							src="/icons/logo.png"
							width={135}
							height={135}
							alt="unite logo"
							className="w-44 h-32"
						/>
					</Link>
					<div className="flex flex-col justify-between overflow-y-auto">
						<SheetClose asChild>
							<section className=" flex h-full flex-col gap-6 pt-12 text-white">
								{navbarLinks.map((item) => {
									const isActive = pathname === item.route;

									return (
										<SheetClose asChild key={item.route}>
											<Link
												href={item.route}
												key={item.label}
												className={cn(
													"flex gap-4 items-center p-4 rounded-lg w-full max-w-60 hover:bg-primary",
													{
														"bg-primary": isActive,
													}
												)}
											>
												<p className="font-semibold">{item.label}</p>
											</Link>
										</SheetClose>
									);
								})}
							</section>
						</SheetClose>
					</div>
				</SheetContent>
			</Sheet>
		</section>
	);
};

export default MobileNav;
