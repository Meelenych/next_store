'use client';
import Link from 'next/dist/client/link';
import Image from 'next/image';
import React, { useState } from 'react';
import s from './header.module.css';

const Header = () => {
	const [logIn, setLogIn] = useState(false);

	return (
		<>
			<header className='sticky top-0 z-50 bg-base-100'>
				<div className='flex justify-between'>
					<div className='dropdown md:hidden'>
						<div
							tabIndex={0}
							role='button'
							className='btn m-1'>
							Menu
						</div>
						<ul
							tabIndex={0}
							className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'>
							<li>
								<Link
									href='/'
									className='btn btn-ghost text-xl'>
									E-Store
								</Link>
							</li>
							<li>
								<Link
									href='/about'
									className='link link-info p-1'>
									About our store
								</Link>
							</li>
							<li>
								<Link
									href='/products'
									className='link link-info p-1'>
									Products
								</Link>
							</li>
							<li>
								<Link
									href='/cart'
									className='link link-info p-1'>
									Cart
								</Link>
							</li>
						</ul>
					</div>

					<nav className='md:flex-1'>
						<div className='navbar bg-base-100 justify-between'>
							<ul className='flex-1 justify-around hidden md:flex'>
								<li className={`${s.navItem} flex text-xl items-center `}>
									<svg
										className={`mr-3 ${s.svgIcon}`}
										width='36px'
										height='36px'
										viewBox='-1.5 0 13 13'>
										<path
											id='Path_1'
											data-name='Path 1'
											d='M80.974,837h-10V825.969h1.989A2.023,2.023,0,0,1,75,824H76.88a2.021,2.021,0,0,1,2.042,1.969h2.052Zm-5-12.011c-1.374,0-2.015.339-2.033.98h4.035C77.961,825.368,77.207,824.978,75.974,824.989Zm4,2.011H78.926v.994h-.943V827H73.934v.994H72.96V827H71.943v9h8.031Z'
											transform='translate(-70.974 -824)'
										/>
									</svg>
									<Link
										href='/'
										className={s.headerLink}>
										<span className={`${s.linkText}`}>E-Store</span>
									</Link>
								</li>
								<li className={` text-xl `}>
									<Link
										href='/about'
										className={s.headerLink}>
										About our store
									</Link>
								</li>
								<li className={` text-xl `}>
									<Link
										href='/products'
										className={s.headerLink}>
										Products
									</Link>
								</li>
								<li className={` text-xl `}>
									<Link
										href='/cart'
										className={s.headerLink}>
										Cart
									</Link>
								</li>
							</ul>

							<div className='flex-none gap-2'>
								{logIn ? (
									<div className='dropdown dropdown-end'>
										<div
											tabIndex={0}
											role='button'
											className='btn btn-ghost btn-circle avatar'>
											<div className='w-10 rounded-full'>
												<Image
													alt='Tailwind CSS Navbar component'
													src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
												/>
											</div>
										</div>
										<ul
											tabIndex={0}
											className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'>
											<li>
												<Link
													href='/account'
													className='link link-info p-1'>
													My account
												</Link>
											</li>
											<li>
												<Link
													href='/cart'
													className='link link-info p-1'>
													My order
												</Link>
											</li>
											<li>
												<Link
													onClick={() => setLogIn(!logIn)}
													href='/auth/logout'
													className='link link-info p-1'>
													Log out
												</Link>
											</li>
										</ul>
									</div>
								) : (
									<Link
										onClick={() => setLogIn(!logIn)}
										href='/auth/login'
										className='btn btn-primary'>
										Log in
									</Link>
								)}
							</div>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
