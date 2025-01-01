"use client";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import ShoppingCart from "./ShoppingCart";
import { motion } from "framer-motion";
import { CartContent } from "../utils/types";

export default function CartContainer({
	cartContents,
	setCartContents,
	showCart,
	setShowCart,
}: {
	showCart: boolean;
	setShowCart: (showCart: boolean) => void;
	cartContents: CartContent[];
	setCartContents: (
		cartContents: CartContent[] | ((prev: CartContent[]) => CartContent[])
	) => void;
}) {
	let quantity = 0;
	if (cartContents) {
		quantity = cartContents.reduce((acc, item) => acc + item.quantity, 0);
	}
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				onClick={() => setShowCart(true)}
				className="fixed top-1 sm:top-3 right-1 sm:right-2 z-30 rounded-full w-6 h-6 text-center font-bold bg-amber-100 border cursor-pointer border-amber-100"
			>
				{quantity}
			</motion.div>
			<motion.div
				animate={{
					color: [
						"#00000",
						"#fef3c7",
						"#be123c",
						"#00000",
						"#be123c",
						"#fef3c7",
						"#000000",
					],
				}}
				transition={{ duration: 6 }}
				onClick={() => setShowCart(true)}
			>
				<ShoppingCartIcon className="w-16 cursor-pointer bg-rose-800 h-16 fixed z-20 sm:top-3 sm:right-3 top-1 right-1" />
			</motion.div>
			<ShoppingCart
				open={showCart}
				setOpen={setShowCart}
				cartContents={cartContents}
				setCartContents={setCartContents}
			/>
		</>
	);
}
