"use client";

import React from "react";
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
import { CareerFormSchema } from "@/lib/validator";
import { CareerParams } from "@/types";
import toast from "react-hot-toast";

const CareerForm = () => {
	const form = useForm({
		resolver: zodResolver(CareerFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			phoneNumber: "",
			email: "",
			jobPosition: "",
		},
	});

	const onSubmit = async (data: CareerParams) => {
		try {
			const response = await fetch("/api/career", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.status === 200) {
				toast.success("Details Shared Successfully");
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
		<div className="w-full px-7 2xl:w-[66%]">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
					<div className="flex space-x-4">
						<FormField
							control={form.control}
							name="firstName"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormControl>
										<Input
											placeholder="First Name"
											{...field}
											className="formInputCareer"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="lastName"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormControl>
										<Input
											placeholder="Last Name"
											{...field}
											className="formInputCareer"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<FormField
						control={form.control}
						name="phoneNumber"
						render={({ field }) => (
							<FormItem className="flex-1">
								<FormControl>
									<Input
										placeholder="Contact Number"
										{...field}
										className="formInputCareer"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="flex-1">
								<FormControl>
									<Input
										placeholder="Email"
										{...field}
										className="formInputCareer"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="jobPosition"
						render={({ field }) => (
							<FormItem className="flex-1">
								<FormControl>
									<Input
										placeholder="Position Applying For"
										{...field}
										className="formInputCareer"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex justify-start">
						<Button
							type="submit"
							className="px-4 py-2 bg-secondary text-white rounded-md shadow-sm hover:hoverScaleEffect"
						>
							Submit
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default CareerForm;
