import { TooltipProvider } from "@/components/ui/tooltip";
import { Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
	variable: "--font-roboto",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<TooltipProvider>
				<body className={`${roboto.variable}`}>
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
