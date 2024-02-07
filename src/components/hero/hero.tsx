import Link from 'next/link.js';

export default function Hero() {
	return (
		<div className='mx-auto max-w-2xl px-4 py-20 sm:py-48 lg:py-56'>
			<section className='text-center'>
				<h1 className=' text-5xl font-bold tracking-tight text-gray-900   '>
					Welcome to Our E-Store
				</h1>
			</section>
			<div className='text-center'>
				<h1 className='text-2xl font-bold leading-7 text-gray-900 '>
					Discover amazing products and enjoy a seamless shopping experience.
				</h1>
				<p className='mt-6 text-lg leading-8 text-gray-600'>
					Find the perfect products for you.
				</p>
				<div className='mt-10 flex items-center justify-center gap-x-6'>
					<Link
						href='/top'
						className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
						Our top
					</Link>
					<Link
						href='/products'
						className='text-sm font-semibold leading-6 text-gray-900 flex hover:translate-x-2 ease-in duration-300'>
						All products <span aria-hidden='true'>→</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
