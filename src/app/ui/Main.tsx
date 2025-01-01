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
				show={showToast && !showCart && cartContents.length > 0}
				setShow={setShowToast}
				itemName={lastItemAdded}
			/>
			<div className="hidden md:flex sm:gap-x-4">
				<div className="w-1/2">
					{menu
						.filter((section) => section.position === "left")
						.map((section) => (
							<MenuSection
								sectionName={section.sectionName}
								blurb={section.blurb}
								items={section.items}
								key={section.sectionName}
								picture={section.picture ? section.picture : ""}
								setShowToast={setShowToast}
								cartContents={cartContents}
								setCartContents={setCartContents}
								setLastItemAdded={setLastItemAdded}
							/>
						))}
				</div>
				<div className="w-1/2">
					{menu
						.filter((section) => section.position === "right")
						.map((section) => (
							<MenuSection
								sectionName={section.sectionName}
								blurb={section.blurb}
								items={section.items}
								key={section.sectionName}
								picture={section.picture ? section.picture : ""}
								setShowToast={setShowToast}
								cartContents={cartContents}
								setCartContents={setCartContents}
								setLastItemAdded={setLastItemAdded}
							/>
						))}
				</div>
			</div>
			<div className="md:hidden">
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
						setShowToast={setShowToast}
					/>
				))}
			</div>
		</>
	);
}
