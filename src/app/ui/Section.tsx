"use client";
import { Item } from "../utils/data";
import { motion } from "framer-motion";

export default function Section({
	sectionName,
	items,
}: {
	sectionName: string;
	items: Item[];
}) {
	return (
		<div className="bg-rose-800 shadow border-gray-600 border mb-3 sm:rounded-md">
			<h5 className="font-extrabold pl-4 sm:px-6 pt-2 pb-1 text-2xl text-amber-100">
				{sectionName}
			</h5>
			<ul role="list" className="divide-y divide-gray-600">
				{items.map((item: Item) => (
					<motion.li
						animate={{ opacity: 1 }}
						key={item.name}
						className="px-4 py-2 sm:px-6 flex justify-between"
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
						<div className="text-lg text-gray-100">
							{item.price.toString().slice(0, -2)}.
							{item.price.toString().slice(-2)}
						</div>
					</motion.li>
				))}
			</ul>
		</div>
	);
}
