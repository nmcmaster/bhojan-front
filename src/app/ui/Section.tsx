const items = [
	{
		id: 1,
		name: "Mulligatawny Soup",
		description: "Yellow lentil, black pepper, lemon",
		price: 5.95,
	},
	{ id: 2, name: "Palak Shorba", description: "Spinach soup", price: 5.95 },
	{
		id: 3,
		name: "Samosa",
		description: "Crispy pastry filled with potatoes & peas",
		price: 6.95,
	},
	{
		id: 4,
		name: "Pakora",
		description: "Cabbage, spinach, potato & onion in gram flour batter",
		price: 6.95,
	},
	{
		id: 5,
		name: "Chilli Tofu",
		description: "Tofu tossed in spicy & sweet chutney with chilly",
		price: 6.95,
	},
	{
		id: 6,
		name: "Paneer Shashlik",
		description: "Grilled cheese & vegetables in savory yogurt sauce",
		price: 6.95,
	},
	{
		id: 7,
		name: "Chicken Samosa",
		description: "Minced chicken seasoned with house spices",
		price: 7.95,
	},
	{
		id: 8,
		name: "Chicken Chop",
		description: "Chicken thigh marinated with special blend of spices",
		price: 8.95,
	},
	{
		id: 9,
		name: "Boti Kabab",
		description: "Boneless lamb in yogurt & garam masala marinade",
		price: 9.95,
	},
	// More items...
];

export default function AppetizersSection() {
	return (
		<div className="bg-rose-800 shadow border-gray-600 border w-full sm:w-1/2 mb-3 sm:rounded-md">
			<h5 className="font-extrabold pl-4 sm:px-6 pt-2 text-2xl text-amber-100">Appetizers</h5>
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
