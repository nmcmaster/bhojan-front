"use client";

import { use, useEffect, useState } from "react";
import Header from "./Header";
import ShoppingCartContainer from "./ShoppingCartContainer";
import Section from "./Section";
import { CartContent } from "../utils/types";
import { appetizers, vegEntree } from "../utils/data";
import Toast from "./Toast";

export default function Main() {
	const [cartContents, setCartContents] = useState<CartContent[]>([]);
	const [lastItemAdded, setLastItemAdded] = useState("");
	const [showToast, setShowToast] = useState(false);
	const [showCart, setShowCart] = useState(false);

	// useEffect(() => {
	// 	for (const product of cartContents) {
	// 		if (product.quantity === 0) {
	// 			const index = cartContents.indexOf(product);
	// 			cartContents.splice(index, 1);
	// 		}
	// 	}
	// }, [cartContents]);

	useEffect(() => {
		if (cartContents.length > 0) {
			setShowToast(true);
		}
	}, [cartContents]);

	useEffect(() => {
		const interval = setInterval(() => {
			setShowToast(false);
		}, 2000);

		return () => clearInterval(interval);
	}, [cartContents]);

	return (
		<>
			<Header />
			<ShoppingCartContainer
				showCart={showCart}
				setShowCart={setShowCart}
				cartContents={cartContents}
				setCartContents={setCartContents}
			/>
			<Toast
				show={showToast && !showCart}
				setShow={setShowToast}
				itemName={lastItemAdded}
			/>
			<div className="hidden sm:flex space-x-3">
				<div className="pt-3 w-1/2 space-y-3">
					<Section
						picture="/appetizer.png"
						sectionName="Appetizers"
						items={appetizers}
						cartContents={cartContents}
						setCartContents={setCartContents}
						setLastItemAdded={setLastItemAdded}
					/>
				</div>
				<div className="pt-3 w-1/2 space-y-3">
					<Section
						sectionName="Vegetarian Entree"
						items={vegEntree}
						cartContents={cartContents}
						setCartContents={setCartContents}
						setLastItemAdded={setLastItemAdded}
					/>
				</div>
			</div>
		</>
	);
}
