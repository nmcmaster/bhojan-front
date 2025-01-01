
export interface Item {
	name: string;
	description: string;
	price: number; // in pennies
}

export interface CartContent {
	item: Item;
	quantity: number;
}

export interface MenuSection {
	sectionName: string;
	blurb: string;
	items: Item[];
	picture?: string;
	position: string;
}
