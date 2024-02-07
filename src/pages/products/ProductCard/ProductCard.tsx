import React, { useState } from 'react';
import { Product as ProductType } from '../../../types/interfaces';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formatter } from '../../../assets/helpers/formatter';
import { capitalize } from '../../../assets/helpers/capitalize';
import Star from '../../../assets/svg/Star';
import Link from 'next/link';

const ProductCard = ({
	product,
	addToCart,
}: {
	product: ProductType;
	addToCart: (item: ProductType) => void;
}) => {
	const [rating, setRating] = useState<number>(product.rating);

	const handleRating = (selectedRating: number) => {
		setRating(selectedRating);
		sendRatingToServer(selectedRating);
	};
	const sendRatingToServer = (newRating: number) => {
		// Make an API request to update the product rating in the database

		// axios.post('/api/updateProductRating', { productId: product.id, rating: newRating })
		//   .then((response) => {
		//     // Handle success
		//   })
		//   .catch((error) => {
		//     // Handle error
		//   });

		// For demonstration purposes, we'll just console log the new rating
		console.log(`Rating updated to ${newRating}`);
	};

	return (
		<li className='relative hover:drop-shadow-2xl hover:-translate-y-2 ease-linear duration-300'>
			<div className='badge-info opacity-50 absolute top-2 right-2 z-10 rounded-xl p-1 cursor-pointer'>
				<div className='flex'>
					{[1, 2, 3, 4, 5].map(star => (
						<Star
							key={star}
							fillColor={star <= rating ? 'yellow' : 'transparent'}
							onClick={() => handleRating(star)}
						/>
					))}
				</div>
			</div>
			<div className='card card-compact bg-base-100 shadow-xl'>
				<figure>
					<img
						src={product.image}
						alt={product.name}
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>{capitalize(product.name)}</h2>
					<p>{product.description}</p>
					<p>Price: {formatter(product.price)}</p>
					<div className='card-actions justify-between'>
						<Link
							href={`/products/[productId]`}
							as={`/products/${product.id}`}
							className='btn btn-accent'>
							Show info
						</Link>
						<button
							className='btn btn-primary'
							onClick={() => {
								addToCart(product);
								toast.success(`${capitalize(product.name)} added to cart!`);
							}}>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default ProductCard;
