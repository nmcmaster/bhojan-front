"use client";

import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CartContent } from "../utils/types";

export default function ShoppingCart({
	open,
	setOpen,
	cartContents,
	setCartContents,
}: {
	open: boolean;
	setOpen: (open: boolean) => void;
	cartContents: CartContent[];
	setCartContents: (cartContents: CartContent[]) => void;
}) {
	const subtotal = cartContents.reduce((acc, item) => {
		return acc + item.item.price * item.quantity;
	}, 0);

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
												{cartContents.length === 0 && (
													<h1 className="text-gray-100 pt-4">
														You don't have any items
														in your cart. Please
														select some delicious
														food to get started!
													</h1>
												)}
												{cartContents.map((product) => (
													<li
														key={product.item.name}
														className="flex py-6"
													>
														<div className="ml-4 flex flex-1 flex-col">
															<div>
																<div className="flex justify-between text-base font-medium">
																	<h3 className="text-amber-100 mb-1">
																		<div>
																			{" "}
																			{
																				product
																					.item
																					.name
																			}
																		</div>
																	</h3>
																	<div className="ml-4 text-gray-100">
																		$
																		{product.item.price
																			.toString()
																			.slice(
																				0,
																				-2
																			)}
																		.
																		{product.item.price
																			.toString()
																			.slice(
																				-2
																			)}
																	</div>
																</div>
															</div>
															<div className="flex flex-1 items-end justify-between text-sm">
																<div className="text-gray-100 flex space-x-1">
																	<div>
																		Qty:{" "}
																		{
																			product.quantity
																		}
																	</div>

																	<PlusIcon className="w-5 h-5 text-rose-400" />
																</div>

																<div className="flex">
																	<button
																		type="button"
																		className="font-medium text-rose-400 hover:text-gray-100"
																	>
																		Remove
																	</button>
																</div>
															</div>
														</div>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>

								<div className="border-t border-gray-500 px-4 py-6 sm:px-6">
									<div className="flex justify-between text-base font-medium text-amber-100">
										<p>Subtotal</p>
										<p className="text-gray-100">
											{" "}
											$
											{subtotal > 0
												? `${subtotal
														.toString()
														.slice(0, -2)}.${subtotal.toString().slice(-2)}`
												: "0.00"}
										</p>
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
}
