"use client";

import React, { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getInTouchParams } from "@/types";
import { getInTouchFormSchema } from "@/lib/validator";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";

export type GetInTouchParams = {
	text: string;
	classNames?: string;
};

const GetInTouchBtn = ({ text, classNames }: GetInTouchParams) => {
	const [open, setOpen] = useState(false);

	const form = useForm({
		resolver: zodResolver(getInTouchFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			phoneNumber: "",
			email: "",
			projectDescription: "",
		},
	});

	const onSubmit = async (data: getInTouchParams) => {
		try {
			const response = await fetch("/api/getInTouch", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.status === 200) {
				toast.success("Details Shared Successfully");
				setOpen(false);
				form.reset(); // Reset the form to initial values
			} else {
				toast.error("Unable to Send Details.");
			}
		} catch (error) {
			console.error("Error:", error);
			toast.error("Unable to Send Details.");
		}
	};

	return (
		<div className={classNames}>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger className="size-full flex flex-1 items-center justify-around gap-2 hoverScaleDownEffect">
					<span>{text}</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-4"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m4.5 15.75 7.5-7.5 7.5 7.5"
						/>
					</svg>
				</DialogTrigger>
				<DialogContent className="bg-white p-6 rounded-md">
					<DialogHeader className="flex flex-col items-center justify-center gap-5 py-5">
						<DialogTitle className="text-center text-xl text-primary">
							Get in touch
						</DialogTitle>
						<DialogDescription className="text-center text-gray-1">
							We&apos;re excited to hear from you!
						</DialogDescription>
					</DialogHeader>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
							<div className="flex space-x-4">
								<FormField
									control={form.control}
									name="firstName"
									render={({ field, fieldState }) => (
										<FormItem className="flex-1">
											<FormLabel>First Name</FormLabel>
											<FormControl>
												<Input
													placeholder="John"
													{...field}
													className="formInput"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="lastName"
									render={({ field, fieldState }) => (
										<FormItem className="flex-1">
											<FormLabel>Last Name</FormLabel>
											<FormControl>
												<Input
													placeholder="Doe"
													{...field}
													className="formInput"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className="flex space-x-4">
								<FormField
									control={form.control}
									name="phoneNumber"
									render={({ field, fieldState }) => (
										<FormItem className="flex-1">
											<FormLabel>Phone Number</FormLabel>
											<FormControl>
												<Input
													placeholder="+1 4455667788"
													{...field}
													className="formInput"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field, fieldState }) => (
										<FormItem className="flex-1">
											<FormLabel>Email Address</FormLabel>
											<FormControl>
												<Input
													placeholder="example@company.com"
													{...field}
													className="formInput"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<FormField
								control={form.control}
								name="projectDescription"
								render={({ field, fieldState }) => (
									<FormItem className="w-full">
										<FormLabel>Message for us (optional)</FormLabel>
										<FormControl>
											<Textarea
												placeholder="Share your thoughts, questions, or ideas!"
												{...field}
												className="max-h-[125px] formInput"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className="flex justify-end">
								<Button
									type="submit"
									className="px-4 py-2 bg-primary text-white rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
								>
									Submit
								</Button>
							</div>
						</form>
					</Form>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default GetInTouchBtn;
