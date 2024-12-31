"use client";

import { useState } from "react";
import Header from "./Header";
import ShoppingCartContainer from "./ShoppingCartContainer";
import Section from "./Section";
import { CartContent } from "../utils/types";
import { appetizers, vegEntree } from "../utils/data";

export default function Main() {
	const [cartContents, setCartContents] = useState<CartContent[]>([
		{ item: { name: "", description: "", price: 0 }, quantity: 0 },
	]);

	return (
		<>
			<Header />
			<ShoppingCartContainer />
			<div className="hidden sm:flex space-x-3">
				<div className="pt-3 w-1/2 space-y-3">
					<Section
						picture="/appetizer.png"
						sectionName="Appetizers"
						items={appetizers}
						cartContents={cartContents}
						setCartContents={setCartContents}
					/>
				</div>
				<div className="pt-3 w-1/2 space-y-3">
					<Section
						sectionName="Vegetarian Entree"
						items={vegEntree}
						cartContents={cartContents}
						setCartContents={setCartContents}
					/>
				</div>
			</div>
		</>
	);
}
