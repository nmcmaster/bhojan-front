"use client";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CartContainer() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<motion.div
				animate={{
					color: [
						"#fef3c7",
						"#00000",
						"#fef3c7",
						"#000000",
						"#fef3c7",
						"#000000",
					],
				}}
				transition={{ duration: 5 }}
                onClick={() => setOpen(true)}
			>
				<div className="absolute top-2 right-2 z-10 rounded-full w-6 h-6 text-center font-bold bg-amber-100 border border-amber-100">
					1
				</div>
				<ShoppingCartIcon
					className="w-14 cursor-pointer h-14 absolute top-3 right-3"
		
				/>
			</motion.div>
			<ShoppingCart open={open} setOpen={setOpen} />
		</>
	);
}
