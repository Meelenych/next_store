import React from 'react';

const aboutPage = () => {
	return (
		<div className='p-3 sm:p-6 lg:p-10'>
			<h2 className='text-2xl text-center mb-4'>Greetings!</h2>
			<div className='flex flex-col md:flex-row mb-4'>
				<p className='xs:p-0 sm:pr-4 mb-4'>
					Welcome to E-Store, your premier online destination for the freshest and
					finest selection of groceries, with a special focus on premium fruits and
					vegetables. At E-Store, we are committed to bringing the farm-fresh
					goodness directly to your doorstep.
				</p>
				<div className='rounded-xl overflow-hidden ml-auto min-h-44 min-w-80 max-w-96'>
					<img
						src='https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg'
						alt=''
					/>
				</div>
			</div>
			<div className='flex flex-col md:flex-row-reverse mb-4'>
				<p className='xs:p-0 sm:pl-4 mb-4'>
					Our mission is to provide a convenient and delightful shopping experience
					for those who appreciate the importance of quality and health in their
					daily lives. With a passion for nutrition and well-being, we have curated a
					diverse range of handpicked fruits and vegetables, sourced from trusted
					local farmers and top-tier suppliers.
				</p>
				<div className='rounded-xl overflow-hidden min-h-44 min-w-80 max-w-96'>
					<img
						src='https://cdn.pixabay.com/photo/2016/04/06/06/04/farmers-1311017_1280.jpg'
						alt=''
					/>
				</div>
			</div>
			<div className='flex flex-col md:flex-row mb-4'>
				<p className='xs:p-0 sm:pr-4 mb-4'>
					What sets us apart is our dedication to delivering not only produce of the
					highest quality but also a seamless online shopping experience. Browse
					through our virtual aisles and discover a wide array of seasonal fruits,
					vibrant vegetables, and other essential groceries. From the juiciest apples
					to the crispiest greens, every item is selected with care to ensure you
					receive nothing but the best.
				</p>
				<div className='rounded-xl overflow-hidden min-h-44 min-w-80 max-w-96 ml-auto'>
					<img
						src='https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_1280.jpg'
						alt=''
					/>
				</div>
			</div>
			<div className='flex flex-col md:flex-row-reverse mb-4'>
				<p className='xs:p-0 sm:pl-4 mb-4'>
					At E-Store, we prioritize sustainability and environmentally friendly
					practices. We strive to reduce our ecological footprint by supporting
					eco-conscious farming methods and minimizing packaging waste. By choosing
					us, you are not only nourishing yourself and your family but also
					contributing to a healthier planet.
				</p>
				<div className='rounded-xl overflow-hidden min-h-44 min-w-80 max-w-96'>
					<img
						src='https://cdn.pixabay.com/photo/2017/01/26/08/51/fruit-2010100_960_720.jpg'
						alt=''
					/>
				</div>
			</div>
			<div>
				<p className='mb-4'>
					Join us on this journey towards healthier living, where the freshest
					produce meets the ease of online shopping. At E-Store, we believe that
					wholesome groceries should be accessible to everyone, and we are excited to
					be your go-to destination for a bountiful shopping experience.
				</p>
				<p className='text-center'>
					Thank you for choosing E-Store, where freshness meets convenience.
				</p>
			</div>
		</div>
	);
};

export default aboutPage;
