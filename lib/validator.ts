import * as z from "zod";

export const getInTouchFormSchema = z.object({
	firstName: z.string().min(3, "Must be at least 3 characters"),
	lastName: z.string().min(3, "Must be at least 3 characters"),
	phoneNumber: z
		.string()
		.min(10, "Must be exactly 10 digits")
		.max(10, "Must be exactly 10 digits")
		.regex(/^\d{10}$/, "Must be exactly 10 digits"),
	email: z.string().email("Invalid email"),
	projectDescription: z.string().optional(),
});

export const CareerFormSchema = z.object({
	firstName: z.string().min(3, "Must be at least 3 characters"),
	lastName: z.string().min(3, "Must be at least 3 characters"),
	phoneNumber: z
		.string()
		.min(10, "Must be exactly 10 digits")
		.max(10, "Must be exactly 10 digits")
		.regex(/^\d{10}$/, "Must be exactly 10 digits"),
	email: z.string().email("Invalid email"),
	jobPosition: z.string().min(3, "Must be at least 3 characters"),
	file: z.custom<File[]>(),
	coverletter: z
		.string()
		.min(10, "Must be atleast 2 characters")
		.max(200, "Must be lower than 200 characters"),
});
