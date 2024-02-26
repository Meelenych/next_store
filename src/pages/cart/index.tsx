'use client';
import React from 'react';
import { useCart } from '../../context/CartContext';
import { useProduct } from '../../context/ProductContext';
import { Product as ProductType } from '../../types/interfaces';
import { formatter } from '../../assets/helpers/formatter';
import { capitalize } from '../../assets/helpers/capitalize';
import Link from 'next/link';
import Image from 'next/image';

const CartPage = () => {
	const { cartItems }: { cartItems: { [key: string]: number } } = useCart();
	const { products } = useProduct();

	const cartItemsArray = Object.entries(cartItems).map(([id, quantity]) => ({
		id,
		quantity,
	}));

	const totalCost = cartItemsArray.reduce((acc, { id, quantity }) => {
		const item = products.find((product: { id: string }) => product.id === id);
		if (item && quantity !== undefined) {
			return acc + item.price * quantity;
		}
		return acc;
	}, 0);

	return cartItemsArray.length ? (
		<div className='p-0 sm:px-10 min-h-dvh'>
			<div className='flex flex-row items-center justify-center mt-6'>
				<svg
					width='36px'
					height='36px'
					viewBox='0 -2 19.001 19.001'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						id='Path_14'
						data-name='Path 14'
						d='M473.974,826v-1h12v1Zm0,2h11v1h-11Zm9.987,4.02h-9.992a2.664,2.664,0,0,1-2.71-2.66l-.8-7.36h-3.484v-1h4.406l.869,8.36a1.874,1.874,0,0,0,1.72,1.633h9.992v1.027Zm-10.487.98a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,473.474,833Zm-.531,1.969h1V834h-1ZM481.474,833a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,481.474,833Zm-.531,1.969h1V834h-1Z'
						transform='translate(-466.973 -821)'
						fill='#444'
					/>
				</svg>
				<h3 className='ml-4'>Check your cart</h3>
			</div>

			<div className='overflow-x-auto'>
				<table className='table'>
					<thead>
						<tr className='font-semibold text-xs sm:text-lg'>
							<th>
								<label>
									<input
										type='checkbox'
										className='checkbox checkbox-xs sm:checkbox-md'
									/>
								</label>
							</th>
							<th>Product</th>
							<th>Quantity</th>
							<th>Price</th>
							<th>Sum</th>
						</tr>
					</thead>
					<tbody>
						{cartItemsArray.map(({ id, quantity }) => {
							const item = products.find((product: ProductType) => product.id === id);
							if (item) {
								return (
									<tr key={id}>
										<th>
											<label>
												<input
													type='checkbox'
													className='checkbox checkbox-xs sm:checkbox-md'
												/>
											</label>
										</th>
										<td>
											<div className='flex items-center gap-3'>
												<div className='hidden sm:avatar'>
													<div className='mask mask-squircle w-12 h-12'>
														<Image
															src={item.image}
															alt={item.name}
														/>
													</div>
												</div>
												<div>
													<div className='font-bold text-xs sm:text-lg'>
														{capitalize(item.name)}
													</div>
												</div>
											</div>
										</td>
										<td className='text-xs sm:text-base'>
											{quantity} {quantity === 1 ? 'pc' : 'pcs'}
										</td>
										<td className='text-xs sm:text-base'>{formatter(item.price)}</td>
										<th className='text-xs sm:text-base'>
											{formatter(item.price * quantity)}
										</th>
									</tr>
								);
							}
							return null;
						})}
					</tbody>
					<tfoot>
						<tr className='font-semibold text-xs sm:text-lg'>
							<th></th>
							<th></th>
							<th></th>
							<th>Total:</th>
							<th>{formatter(totalCost)}</th>
						</tr>
					</tfoot>
				</table>
			</div>
			<div className='grid grid-cols-3 gap-9'>
				<button className=' btn btn-error'>Delete selected</button>
				<button className=' btn btn-warning'>Clear cart</button>
				<Link
					href='/checkout'
					className=' btn btn-success'>
					Confirm order
				</Link>
			</div>
		</div>
	) : (
		<div className='flex flex-row items-center justify-center min-h-dvh'>
			<svg
				className='mt-6'
				width='36px'
				height='36px'
				viewBox='0 -2 19.001 19.001'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					id='Path_14'
					data-name='Path 14'
					d='M473.974,826v-1h12v1Zm0,2h11v1h-11Zm9.987,4.02h-9.992a2.664,2.664,0,0,1-2.71-2.66l-.8-7.36h-3.484v-1h4.406l.869,8.36a1.874,1.874,0,0,0,1.72,1.633h9.992v1.027Zm-10.487.98a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,473.474,833Zm-.531,1.969h1V834h-1ZM481.474,833a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,481.474,833Zm-.531,1.969h1V834h-1Z'
					transform='translate(-466.973 -821)'
					fill='#444'
				/>
			</svg>
			<h2 className='mt-6 ml-4 font-semibold text-xl'>Your cart is empty...</h2>
		</div>
	);
};

export default CartPage;
