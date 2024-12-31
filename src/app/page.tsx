import { Nunito_Sans } from "next/font/google";
import Section from "./ui/Section";
import { appetizers, vegEntree } from "./utils/data";
import Header from "./ui/Header";
import CartContainer from "./ui/CartContainer";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className={nunito.className}>
			<main className="sm:w-4/5 mx-auto">
				<Header />

				<CartContainer />
				<div className="hidden sm:flex space-x-3">
					<div className="pt-3 w-1/2 space-y-3">
						<Section
							picture="/appetizer.png"
							sectionName="Appetizers"
							items={appetizers}
						/>
					</div>
					<div className="pt-3 w-1/2 space-y-3">
						<Section
							sectionName="Vegetarian Entree"
							items={vegEntree}
						/>
					</div>
				</div>
			</main>
		</div>
	);
}
