
export interface Item {
	name: string;
	description: string;
	price: number; // in pennies
}

export interface CartContent {
	item: Item;
	quantity: number;
}
