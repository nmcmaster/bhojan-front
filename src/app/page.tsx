import { Nunito_Sans } from "next/font/google";
import Main from "./ui/Main";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className={nunito.className}>
			<main className="sm:w-4/5 mx-auto">
				<Main />
			</main>
		</div>
	);
}
