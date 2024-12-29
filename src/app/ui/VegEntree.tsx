const items = [
	{
		id: 1,
		name: "Aloo Gobi",
		description: "Stir-fried cauliflower, potato, ginger, turmeric.",
		price: 13.95,
	},
	{
		id: 2,
		name: "Saag Paneer",
		description: "Spinach, farmers' cheese, ginger, garlic.",
		price: 13.95,
	},
	{
		id: 3,
		name: "Chana Masala",
		description: "Chickpeas, clove, black cardamom, onion, caraway seed.",
		price: 13.95,
	},
	{
		id: 4,
		name: "Malai Kofta",
		description: "Vegetable croquettes cooked in coconut milk gravy.",
		price: 13.95,
	},
	{
		id: 5,
		name: "Bhagara Bangain",
		description:
			"Baby eggplants cooked in mustard seed & roasted coconut gravy.",
		price: 13.95,
	},
	{
		id: 6,
		name: "Chana Saag",
		description: "Chickpeas, sautéed spinach, garlic, ginger.",
		price: 13.95,
	},
	{
		id: 7,
		name: "Vegetable Biryani",
		description:
			"Slow cooked basmati rice, saffron, bay leaf, cardamom, cucumber",
		price: 13.95,
	},
];

export default function VegEntree() {
	return (
		<div className="bg-rose-800 shadow border-gray-600 border w-full mb-3 sm:rounded-md">
			<h5 className="font-extrabold pl-4 sm:px-6 pt-2 text-2xl text-amber-100">
				Vegetarian Entree
			</h5>
			<ul role="list" className="divide-y divide-gray-600">
				{items.map((item) => (
					<li
						key={item.id}
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
							{item.price}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
