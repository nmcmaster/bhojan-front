import { Nunito_Sans } from "next/font/google";
import Main from "./ui/Main";
import { Metadata } from "next";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Bhojan Indian Restaurant",
	description: "Delicious Indian food serving Ridgewood and Bushwick",
};

export default function Home() {
	return (
		<div className={nunito.className}>
			<main className="xl:w-4/5 px-0 md:px-3 xl:px-0 mx-auto">
				<Main />
			</main>
		</div>
	);
}
