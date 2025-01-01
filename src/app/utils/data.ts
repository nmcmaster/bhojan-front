import { MenuSection } from "./types";

export const menu: MenuSection[] = [
	{
		sectionName: "Appetizers",
		picture: "/appetizer.png",
		blurb: "Served with homemade mint & tamarind chutneys",
		items: [
			{
				name: "Mulligatawny Soup",
				description: "Yellow lentil, black pepper, lemon",
				price: 595,
			},
			{ name: "Palak Shorba", description: "Spinach soup", price: 595 },
			{
				name: "Samosa",
				description: "Crispy pastry filled with potatoes & peas",
				price: 695,
			},
			{
				name: "Pakora",
				description:
					"Cabbage, spinach, potato & onion in gram flour batter",
				price: 695,
			},
			{
				name: "Chilli Tofu",
				description: "Tofu tossed in spicy & sweet chutney with chilly",
				price: 695,
			},
			{
				name: "Paneer Shashlik",
				description:
					"Grilled cheese & vegetables in savory yogurt sauce",
				price: 695,
			},
			{
				name: "Chicken Samosa",
				description: "Minced chicken seasoned with house spices",
				price: 795,
			},
			{
				name: "Chicken Chop",
				description:
					"Chicken thigh marinated with special blend of spices",
				price: 895,
			},
			{
				name: "Boti Kabab",
				description: "Boneless lamb in yogurt & garam masala marinade",
				price: 995,
			},
		],
	},
	{
		sectionName: "Vegetarian Entree",
		blurb: "Served with basmati rice. Brown rice + $1.95",
		picture: "/appetizer.png",
		items: [
			{
				name: "Aloo Gobi",
				description: "Stir-fried cauliflower, potato, ginger, turmeric",
				price: 1395,
			},
			{
				name: "Saag Paneer",
				description: "Spinach, farmers' cheese, ginger, garlic",
				price: 1395,
			},
			{
				name: "Chana Masala",
				description:
					"Chickpeas, clove, black cardamom, onion, caraway seed",
				price: 1395,
			},
			{
				name: "Malai Kofta",
				description:
					"Vegetable croquettes cooked in coconut milk gravy",
				price: 1395,
			},
			{
				name: "Bhagara Bangain",
				description:
					"Baby eggplants cooked in mustard seed & roasted coconut gravy",
				price: 1395,
			},
			{
				name: "Chana Saag",
				description: "Chickpeas, sautéed spinach, garlic, ginger",
				price: 1395,
			},
			{
				name: "Vegetable Biryani",
				description:
					"Slow cooked basmati rice, saffron, bay leaf, cardamom, cucumber",
				price: 1395,
			},
		],
	},
	{
		sectionName: "Grilled",
		picture: "/grilled.png",
		blurb: "Delicacies from the clay over tandoor",
		items: [
			{
				name: "Aamiya Jhinga",
				description: "Shrimp grilled in mango based marinade",
				price: 2095,
			},
			{
				name: "Tandoori Salmon",
				description: "Boneless salmon marinated in yogurt and spices",
				price: 2095,
			},
			{
				name: "Lamb Chop",
				description: "Lamb chops in cumin and aromatic spices",
				price: 2095,
			},
			{
				name: "Tandoori Chicken",
				description: "Marinated in yogurt & mild spice",
				price: 1495,
			},
			{
				name: "Grilled Vegetarian Platter",
				description:
					"Assorted garden fresh vegetables and Indian cheese grilled with traditional spices",
				price: 1495,
			},
		],
	},
	{
		sectionName: "Chicken Entree",
		blurb: "Served with basmati rice. Brown rice + $1.95",
		items: [
			{
				name: "Chicken Tikka Masala",
				description:
					"Clay oven cooked white meat, tomato light cream sauce",
				price: 1595,
			},
			{
				name: "Chicken Korma",
				description: "Almond & cashew nut sauce, yogurt, coconut",
				price: 1595,
			},
			{
				name: "Chicken Saag",
				description:
					"Spinach, garlic, ginger, toasted cumin, coriander",
				price: 1595,
			},
			{
				name: "Butter Chicken",
				description: "Velvety tomato buttery sauce, fenugreek",
				price: 1595,
			},
			{
				name: "Bhojan",
				description:
					"Classic Indian dish cooked in seasoned authentic curry sauce",
				price: 1595,
			},
		],
	},
	{
		sectionName: "Lamb",
		picture: "/lamb.png",
		blurb: "Served with basmati rice. Brown rice + $1.95",
		items: [
			{
				name: "Lamb Ragan Josh",
				description: "Cardamom-cinnamon curry sauce, cloves, nutmeg",
				price: 1695,
			},
			{
				name: "Lamb Saag",
				description:
					"Spinach, garlic, ginger, toasted cumin, coriander",
				price: 1695,
			},
			{
				name: "Lamb or Goat Curry",
				description: "Classic Indian dish in tomato & onion sauce",
				price: 1695,
			},
			{
				name: "Lamb Vindaloo",
				description:
					"Fiery sauce, sun dried Kashmiri red chili, potato",
				price: 1695,
			},
			{
				name: "Lamb Korma",
				description: "Almond & cashew nut sauce, yogurt, coconut",
				price: 1695,
			},
			{
				name: "Lamb or Goat Biryani",
				description:
					"Slow cooked basmati rice, saffron, bay leaf, cardamom, cucumber raita",
				price: 1695,
			},
		],
	},
	{
		sectionName: "Seafood",
		blurb: "Served with basmati rice. Brown rice + $1.95",
		items: [
			{
				name: "Shrimp Tikka Masala",
				description: "Pan seared, tomato light cream sauce",
				price: 1795,
			},
			{
				name: "Shrimp Korma",
				description: "Almond & cashew nut sauce, yogurt, coconut",
				price: 1795,
			},
			{
				name: "Shrimp Vindaloo",
				description:
					"Fiery sauce, sun dried Kashmiri red chili, potato",
				price: 1795,
			},
			{
				name: "Goan Fish Curry",
				description: "Goan style with coconut milk and curry leaves",
				price: 1795,
			},
		],
	},

	{
		sectionName: "Bread",
		picture: "/naan.png",
		blurb: "Delicacies from the clay oven tandoor",
		items: [
			{
				name: "Naan / Butter Naan",
				description:
					"A leavened flat-bread made with flour & baked fresh",
				price: 200,
			},
			{
				name: "Garlic Naan",
				description: "Naan topped with fresh garlic & cilantro",
				price: 350,
			},
			{
				name: "Cheese Naan",
				description: "Naan stuffed with fresh cheese",
				price: 495,
			},
			{ name: "Roti", description: "Whole wheat bread", price: 295 },
			{
				name: "Poori",
				description:
					"Deep-fried bread, made from unleavened whole-wheat flour",
				price: 395,
			},
			{
				name: "Paratha",
				description: "Flaky and delicious layered flatbread",
				price: 395,
			},
		],
	},
];
