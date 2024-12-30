import Image from "next/image";
import { Nunito_Sans } from "next/font/google";
import Section from "./ui/Section";
import { appetizers, vegEntree } from "./utils/data";

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
				<div className="hidden sm:flex space-x-3">
					<div className="pt-3 w-1/2 space-y-3">
						<Section sectionName="Appetizers" items={appetizers} />
					</div>
					<div className="pt-3 w-1/2 space-y-3">
						<Section
							sectionName="Vegetarian Entrees"
							items={vegEntree}
						/>
					</div>
				</div>
			</main>
		</div>
	);
}
