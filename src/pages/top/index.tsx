'use client';

import React from 'react';
import { useProduct } from '../../context/ProductContext';
import { useCart } from '../../context/CartContext';
import ProductCard from '../products/ProductCard/ProductCard';
import { Product as ProductType } from '../../types/interfaces';
import { ToastContainer } from 'react-toastify';

const Top: React.FC = () => {
	const { products } = useProduct();
	const { addToCart } = useCart();
	return (
		<div className='h-dvh'>
			<ToastContainer position='top-left' />
			<ul className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-3 sm:p-6 lg:p-10'>
				{products?.map(
					(product: ProductType) =>
						product.rating >= 4 && (
							<ProductCard
								key={product.id}
								product={product}
								addToCart={addToCart}
							/>
						),
				)}
			</ul>
		</div>
	);
};

export default Top;
