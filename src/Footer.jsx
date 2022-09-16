import React from "react"
import logo from "./assets/Logo.svg"

export const Footer = () => {
	return (
		<footer className='bg-lightOrange'>
			<div className='container'>
				<nav className='flex justify-between items-center min-h-[145px] pt-2 md:min-h-[70px] md:justify-center md:items-center'>
					<a href='.' className='md:hidden'>
						<img src={logo} className='w-full max-w-[200px]' alt='Logo' />
					</a>
					<ul className='flex gap-12 md:gap-8 flex-wrap '>
						<li>
							<a
								className='font-bold text-sm hover:text-black leading-5'
								href='.'>
								Support
							</a>
						</li>
						<li>
							<a
								className='font-bold text-sm hover:text-black leading-5'
								href='.'>
								Premium
							</a>
						</li>
						<li>
							<a
								className='font-bold text-sm hover:text-black leading-5'
								href='.'>
								Pricing
							</a>
						</li>
						<li>
							<a
								className='font-bold text-sm hover:text-black leading-5'
								href='.'>
								Blog
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	)
}
