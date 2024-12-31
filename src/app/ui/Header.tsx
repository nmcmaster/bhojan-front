"use client";

import { ArrowDownIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75 }}
			className="text-center"
		>
			<Image
				src="/logoColor.png"
				width={300}
				height={300}
				alt="Bhojan Indian Food"
				className="mx-auto pt-2"
				priority
			/>
			<h1 className="tracking-widest text-4xl font-bold pt-2 text-amber-100">
				Indian Food
			</h1>
			<div className="text-gray-100 text-lg pt-1">
				<div>1819 Palmetto Street</div>
				<div>Ridgewood, NY 11385</div>
				<div className="text-2xl mt-1 font-bold text-amber-100">
					718-381-8868
				</div>
				<div className="pt-0.5">
					Hours: Monday - Sunday (11:30am - 9:45pm)
				</div>
				<div>Dine-in, Takeout, Delivery, or Catering </div>
				<div className="text-2xl mt-1 flex space-x-1 justify-center font-bold text-amber-100">
					<motion.div
						animate={{ y: [0, -7, 0, 7, 0, -7, 0, 7, 0] }}
						transition={{ duration: 2 }}
					>
						<ArrowDownIcon className="w-8 h-8 text-gray-100" />
					</motion.div>
					<div>Order Online</div>
					<motion.div
						animate={{ y: [7, 0, -7, 0, 7, 0, -7, 0, 7, 0] }}
						transition={{ duration: 2 }}
					>
						<ArrowDownIcon className="w-8 h-8 text-gray-100" />
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}
