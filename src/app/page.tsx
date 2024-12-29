import Image from "next/image";
import { Nunito_Sans } from "next/font/google";
import AppetizersSection from "./ui/AppetizersSection";
import VegEntree from "./ui/VegEntree";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className={nunito.className}>
			<main className="sm:w-4/5 mx-auto">
				{" "}
				<Image
					src="/logoColor.png"
					width={300}
					height={300}
					alt="Bhojan Indian Food"
					className="mx-auto pt-2"
				/>
				<h1 className="text-center tracking-widest text-4xl font-bold pt-2 text-amber-100">
					Indian Food
				</h1>
				<div className="sm:flex pt-3 sm:space-x-3">
					<AppetizersSection /> <VegEntree /> 
				</div>
			</main>
		</div>
	);
}
