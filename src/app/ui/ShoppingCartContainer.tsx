"use client";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";
import { motion } from "framer-motion";
import { CartContent } from "../utils/types";

export default function CartContainer({
	cartContents,
	setCartContents,
}: {
	cartContents: CartContent[];
	setCartContents: (CartContents: CartContent[]) => void;
}) {
	const [open, setOpen] = useState(false);
	let quantity = 0;
	if (cartContents) {
		quantity = cartContents.reduce((acc, item) => acc + item.quantity, 0);
	}
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				onClick={() => setOpen(true)}
				className="fixed top-3 right-2 z-10 rounded-full w-6 h-6 text-center font-bold bg-amber-100 border cursor-pointer border-amber-100"
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
				onClick={() => setOpen(true)}
			>
				<ShoppingCartIcon className="w-16 cursor-pointer h-16 fixed top-3 right-3" />
			</motion.div>
			<ShoppingCart
				open={open}
				setOpen={setOpen}
				cartContents={cartContents}
				setCartContents={setCartContents}
			/>
		</>
	);
}
