import { capitalize } from '@/assets/helpers/capitalize';
import { useCart } from '@/context/CartContext';
import { useProduct } from '@/context/ProductContext';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import { Product as ProductType } from '../../types/interfaces';
import Image from 'next/image';

const ProductId: NextPage = () => {
	const router = useRouter();
	const { productId } = router.query;
	const { products } = useProduct();
	const { addToCart } = useCart();

	const productData = products.find(
		(product: ProductType) => product?.id === productId,
	);

	return (
		<>
			<ToastContainer position='top-left' />
			<div className='card lg:card-side bg-base-100 shadow-xl'>
				<figure>
					<Image
						src={productData?.image}
						alt={productData?.name}
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>{productData?.name}</h2>
					<p>{productData?.description}</p>
					<div className='card-actions justify-end'>
						<button
							className='btn btn-primary'
							onClick={() => {
								addToCart(productData);
								toast.success(`${capitalize(productData?.name)} added to cart!`);
							}}>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductId;
