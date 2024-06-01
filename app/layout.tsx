import { TooltipProvider } from "@/components/ui/tooltip";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-poppins",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<TooltipProvider>
				<body className={`${poppins.variable}`}>
					<Toaster
						position="bottom-center"
						toastOptions={{
							style: {
								padding: "16px",
								color: "black",
							},
						}}
					/>
					{children}
				</body>
			</TooltipProvider>
		</html>
	);
}
