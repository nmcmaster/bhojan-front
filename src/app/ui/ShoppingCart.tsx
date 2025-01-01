"use client";

import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CartContent } from "../utils/types";
import { useMemo, useCallback } from "react";
import React from "react";

const formatPrice = (priceInPennies: number): string => {
	const dollars = Math.floor(priceInPennies / 100);
	const cents = priceInPennies % 100;
	return `$${dollars}.${cents.toString().padStart(2, '0')}`;
};

// Memoize individual cart items to prevent unnecessary re-renders
const CartItem = React.memo(({
	product,
	onIncrement,
	onDecrement,
	onRemove
}: {
	product: CartContent;
	onIncrement: (name: string) => void;
	onDecrement: (name: string) => void;
	onRemove: (name: string) => void;
}) => (
	<li className="flex py-6">
		<div className="ml-4 flex flex-1 flex-col">
			<div>
				<div className="flex justify-between text-base font-medium">
					<h3 className="text-amber-100 mb-1">
						<div>{product.item.name}</div>
					</h3>
					<div className="ml-4 text-gray-100">
						{formatPrice(product.item.price)}
					</div>
				</div>
			</div>
			<div className="flex flex-1 items-end justify-between text-sm">
				<div className="text-gray-100 flex">
					<div className="mr-1.5">
						Qty: {product.quantity}
					</div>

					<PlusIcon
						className="w-5 h-5 text-rose-400 cursor-pointer"
						onClick={() => onIncrement(product.item.name)}
					/>
					<MinusIcon
						className="w-5 h-5 text-rose-400 cursor-pointer"
						onClick={() => onDecrement(product.item.name)}
					/>
				</div>

				<div className="flex">
					<button
						type="button"
						onClick={() => onRemove(product.item.name)}
						className="font-medium text-rose-400 hover:text-gray-100"
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	</li>
));

CartItem.displayName = 'CartItem';

const ShoppingCart = ({
	open,
	setOpen,
	cartContents,
	setCartContents,
}: {
	open: boolean;
	setOpen: (open: boolean) => void;
	cartContents: CartContent[];
	setCartContents: (cartContents: CartContent[] | ((prev: CartContent[]) => CartContent[])) => void;
}) => {
	const handleIncrement = useCallback((productName: string) => {
		setCartContents((prevContents: CartContent[]): CartContent[] => 
			prevContents.map((cartItem: CartContent): CartContent => 
				cartItem.item.name === productName
					? { ...cartItem, quantity: cartItem.quantity + 1 }
					: cartItem
			)
		);
	}, [setCartContents]);

	const handleRemove = useCallback((productName: string) => {
		setCartContents((prevContents: CartContent[]): CartContent[] => 
			prevContents.filter((cartItem: CartContent): boolean => 
				cartItem.item.name !== productName
			)
		);
	}, [setCartContents]);

	const handleDecrement = useCallback((productName: string) => {
		setCartContents((prevContents: CartContent[]): CartContent[] => 
			prevContents
				.map((cartItem: CartContent): CartContent => 
					cartItem.item.name === productName
						? { ...cartItem, quantity: cartItem.quantity - 1 }
						: cartItem
				)
				.filter((cartItem: CartContent): boolean => cartItem.quantity > 0)
		);
	}, [setCartContents]);

	const subtotal = useMemo(() => 
		cartContents.reduce((acc, item) => 
			acc + item.item.price * item.quantity, 0
		),
		[cartContents]
	);

	// Memoize the cart items list to prevent unnecessary re-renders
	const cartItemsList = useMemo(() => (
		cartContents.length === 0 ? (
			<h1 className="text-gray-100 pt-4">
				You don't have any items in your cart. Please
				select some delicious food to get started!
			</h1>
		) : (
			cartContents.map((product) => (
				<CartItem
					key={product.item.name}
					product={product}
					onIncrement={handleIncrement}
					onDecrement={handleDecrement}
					onRemove={handleRemove}
				/>
			))
		)
	), [cartContents, handleIncrement, handleDecrement, handleRemove]);

	return (
		<Dialog open={open} onClose={setOpen} className="relative z-30">
			<DialogBackdrop
				transition
				className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
			/>

			<div className="fixed inset-0 overflow-hidden">
				<div className="absolute inset-0 overflow-hidden">
					<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
						<DialogPanel
							transition
							className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
						>
							<div className="flex h-full flex-col overflow-y-scroll bg-rose-900 shadow-xl">
								<div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
									<div className="flex items-start justify-between">
										<DialogTitle className="text-lg font-medium text-amber-100">
											Shopping cart
										</DialogTitle>
										<div className="ml-3 flex h-7 items-center">
											<button
												type="button"
												onClick={() => setOpen(false)}
												className="relative -m-2 p-2 text-rose-400 hover:text-gray-500"
											>
												<span className="absolute -inset-0.5" />
												<span className="sr-only">
													Close panel
												</span>
												<XMarkIcon
													aria-hidden="true"
													className="size-6"
												/>
											</button>
										</div>
									</div>

									<div className="mt-8">
										<div className="flow-root">
											<ul
												role="list"
												className="-my-6 divide-y divide-gray-500"
											>
												{cartItemsList}
											</ul>
										</div>
									</div>
								</div>

								<div className="border-t border-gray-500 px-4 py-6 sm:px-6">
									<div className="flex justify-between text-base font-medium text-amber-100">
										<div>Subtotal</div>
										<div className="text-gray-100">
											{" "}
											{subtotal > 0 ? formatPrice(subtotal) : "$0.00"}
										</div>
									</div>
									<p className="mt-1 text-sm text-gray-100">
										Delivery fee and taxes calculated at
										checkout.
									</p>
									<div className="mt-6">
										<a
											href="#"
											className="flex items-center justify-center rounded-md border border-transparent bg-rose-600 px-6 py-3 text-base font-medium text-gray-100 shadow-sm hover:bg-amber-100"
										>
											Checkout
										</a>
									</div>
									<div className="mt-6 flex justify-center text-center text-sm ">
										<p>
											<button
												type="button"
												onClick={() => setOpen(false)}
												className="font-medium text-rose-400 hover:text-amber-100"
											>
												Continue Shopping
												<span aria-hidden="true">
													{" "}
													&rarr;
												</span>
											</button>
										</p>
									</div>
								</div>
							</div>
						</DialogPanel>
					</div>
				</div>
			</div>
		</Dialog>
	);
};

export default React.memo(ShoppingCart);
