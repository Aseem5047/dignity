import { NextRequest, NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "");

const templateId = process.env.SENDGRID_TEMPLATE_ID_GETINTOUCH || "";

// Define the handler
export async function POST(req: NextRequest) {
	if (req.method !== "POST") {
		return NextResponse.json(
			{ message: "Method not allowed" },
			{ status: 405 }
		);
	}

	try {
		// Validate the request body
		const formData = await req.json();

		// Create a message object
		const msg = {
			to: "aseemgupta43@gmail.com",
			from: "aseemgupta2002@gmail.com",
			templateId: templateId,
			dynamic_template_data: {
				...formData,
			},
		};

		// Send the email
		await sendgrid.send(msg);

		return NextResponse.json(
			{ message: "Email sent successfully" },
			{ status: 200 }
		);
	} catch (error: any) {
		console.error("SendGrid error:", error);
		if (error.response) {
			console.error("Error response body:", error.response.body);
		}
		return NextResponse.json(
			{ message: "Internal Server Error", error: error.message },
			{ status: 500 }
		);
	}
}
