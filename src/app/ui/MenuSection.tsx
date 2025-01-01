"use client";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { CartContent, Item } from "../utils/types";

export default function MenuSection({
	sectionName,
	blurb,
	items,
	picture,
	cartContents,
	setShowToast,
	setCartContents,
	setLastItemAdded,
}: {
	
	sectionName: string;
	blurb: string;
	items: Item[];
	picture?: string;
	cartContents: CartContent[];
	setCartContents: (CartContents: CartContent[]) => void;
	setLastItemAdded: (itemName: string) => void;
	setShowToast: (showToast: boolean) => void;
}) {
	// function addToCart(item: Item) {
	// 	const existingItem = cartContents.find(cartItem => cartItem.item.name === item.name);

	// 	if (existingItem) {
	// 		existingItem.quantity += 1;
	// 		setCartContents([...cartContents]);
	// 	} else {
	// 		setCartContents([...cartContents, { item, quantity: 1 }]);
	// 	}
	// } non-functional programming solution

	function addToCart(item: Item) {
		const itemExists = cartContents.some(
			(cartItem) => cartItem.item.name === item.name
		);

		if (itemExists) {
			const updatedCart = cartContents.map((cartItem) =>
				cartItem.item.name === item.name
					? { ...cartItem, quantity: cartItem.quantity + 1 }
					: cartItem
			);
			setCartContents(updatedCart);
		} else {
			setCartContents([...cartContents, { item, quantity: 1 }]);
		}
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="bg-rose-800 shadow border-gray-600 border mb-3 sm:mb-8 sm:rounded-md pt-1"
		>
			<h3 className="font-extrabold pl-4 sm:px-6 pt-2 pb-1 text-2xl text-amber-100">
				{sectionName}
			</h3>
			<h5 className="text-amber-100 italic pl-4 sm:px-6">{blurb}</h5>
			<ul role="list" className="divide-y divide-gray-600">
				{items.map((item: Item) => (
					<li
						key={item.name}
						className="px-4 pt-2 pb-2 sm:px-6 flex justify-between"
					>
						<div>
							<div className="text-lg text-gray-100 font-bold">
								{item.name}
							</div>
							<div className="text-md text-amber-100">
								{item.description}
							</div>
						</div>
						<div className="relative">
							<div className="text-lg text-gray-100">
								{item.price.toString().slice(0, -2)}.
								{item.price.toString().slice(-2)}
							</div>
							<motion.div
								animate={{ rotate: -360, scale: [1, 1.7, 1] }}
								transition={{ duration: 1 }}
								className="bg-amber-100 rounded-full shadow-2xl w-7 h-7 absolute -bottom-0.5 -right-0"
								onClick={() => {
									setLastItemAdded(item.name);
									addToCart(item);
									setShowToast(true);
								}}
							>
								<PlusCircleIcon className="text-rose-950 shadow z-0 cursor-pointer" />
							</motion.div>
						</div>
					</li>
				))}
			</ul>
			{picture && (
				<Image
					src={picture}
					alt={sectionName}
					width={477}
					height={197}
					className="rounded-lg border w-2/3 mx-auto border-amber-100 my-1"
				/>
			)}
		</motion.div>
	);
}
