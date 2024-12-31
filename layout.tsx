import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
	title: "Bhojan Indian Restaurant",
	description: "Delicious Indian food serving Ridgewood and Bushwick",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
