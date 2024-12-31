"use client";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import { Item } from "../utils/data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Section({
	sectionName,
	items,
	picture,
}: {
	sectionName: string;
	items: Item[];
	picture?: string;
}) {

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="bg-rose-800 shadow border-gray-600 border mb-3 sm:rounded-md"
		>
			<h5 className="font-extrabold pl-4 sm:px-6 pt-2 pb-1 text-2xl text-amber-100">
				{sectionName}
			</h5>
			<ul role="list" className="divide-y divide-gray-600">
				{items.map((item: Item) => (
					<li
						key={item.name}
						className="px-4 pt-2 pb-2 sm:px-6 flex justify-between"
					>
						<div>
							{" "}
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
							>
								<PlusCircleIcon className="text-rose-950 shadow" />
							</motion.div>
						</div>
					</li>
				))}
			</ul>
			{picture && <Image src={picture} alt={sectionName} width={477} height={197} className="rounded-lg border w-2/3 mx-auto border-amber-100 mb-1"/>}
		</motion.div>
	);
}
