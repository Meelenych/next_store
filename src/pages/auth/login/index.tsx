import React from 'react';
import Link from 'next/link';

const loginPage = () => {
	return (
		<div className='flex flex-col items-center content-center mt-3 sm:mt-10 lg:mt-20'>
			<h1 className='text-3xl font-bold text-center'>Log in here</h1>
			<form
				action='submit'
				className='w-80 grid grid-cols-1 col-span-2 gap-4 m-4'>
				<input
					className='input input-bordered input-primary w-full max-w-xl'
					type='email'
					name=''
					id='email'
				/>
				<input
					className='input input-bordered input-primary w-full max-w-xl'
					type='password'
					name=''
					id='password'
				/>
				<button
					type='button'
					className='btn btn-active btn-accent'>
					Log in
				</button>
			</form>

			<Link
				href='/auth/signup'
				className='btn btn-secondary btn-outline w-80'>
				Or register now
			</Link>
		</div>
	);
};

export default loginPage;
