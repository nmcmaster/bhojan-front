"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75 }}
		>
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
		</motion.div>
	);
}
