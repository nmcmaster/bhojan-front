"use client";

import { useEffect, useState } from "react";
import Header from "./Header";
import ShoppingCartContainer from "./ShoppingCartContainer";
import MenuSection from "./MenuSection";
import { CartContent } from "../utils/types";
import { menu } from "../utils/data";
import Toast from "./Toast";

export default function Main() {
	const [cartContents, setCartContents] = useState<CartContent[]>([]);
	const [lastItemAdded, setLastItemAdded] = useState("");
	const [showToast, setShowToast] = useState(false);
	const [showCart, setShowCart] = useState(false);

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
			<div className="hidden sm:grid grid-cols-2 gap-x-4 auto-rows-min">
				{menu.map((section) => (
					<MenuSection
						sectionName={section.sectionName}
						blurb={section.blurb}
						items={section.items}
						key={section.sectionName}
						picture={section.picture ? section.picture : ""}
						cartContents={cartContents}
						setCartContents={setCartContents}
						setLastItemAdded={setLastItemAdded}
					/>
				))}
			</div>
			<div className="sm:hidden">
				{menu.map((section) => (
					<MenuSection
						sectionName={section.sectionName}
						blurb={section.blurb}
						items={section.items}
						key={section.sectionName}
						picture={section.picture ? section.picture : ""}
						cartContents={cartContents}
						setCartContents={setCartContents}
						setLastItemAdded={setLastItemAdded}
					/>
				))}
			◊</div>
		</>
	);
}
