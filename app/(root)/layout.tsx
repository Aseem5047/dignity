import { Metadata } from "next";
import ClientLayout from "@/components/shared/ClientLayout";

export const metadata: Metadata = {
	title: "Dignity Direct Supports",
	description: "Empowering With Dignity.",
	icons: {
		icon: "/icons/logo.jpg",
	},
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="relative">
			<ClientLayout>{children}</ClientLayout>
		</main>
	);
};

export default HomeLayout;
