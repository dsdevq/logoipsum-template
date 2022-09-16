import React from "react"
import image1 from "./assets/pose_7.svg"

export const Section1 = () => {
	return (
		<div className='container'>
			<section className='flex justify-between gap-2 sm:flex-wrap'>
				<aside className='basis-[45.5%] shrink md:flex-1'>
					<h1 className='text-[80px] leading-[77px] -tracking-[2.50105px] font-bold lg:text-6xl md:text-4xl'>
						Grow your subscription business
					</h1>
					<p className='mt-7 mb-12 text-grey text-xl leading-8 -tracking-tight drop-shadow-lg shadow-black md:text-xl'>
						Outcome-centered products that reduce churn, optimize pricing, and
						grow your subscription business end-to-end.
					</p>
					<div className='flex gap-8 flex-wrap sm:gap-4'>
						<button className='transition-all active:scale-[1.015] text-[17px] font-bold leading-6 text-center py-[19px] px-[60px] rounded-[10px] bg-purple text-white sm:px-5 sm:py-3 sm:w-full flex-1'>
							Get Started
						</button>
						<button className='transition-all active:scale-[1.015] text-[17px] font-bold leading-6 text-center py-[19px] px-[60px] rounded-[10px] bg-white text-purple border-purple border-solid border min-w-max sm:px-5 sm:py-3 max-w-full flex-1 sm:max-w-none'>
							Try
						</button>
					</div>
				</aside>
				<aside className='max-w-[493px] shrink'>
					<img className='w-full ' src={image1} alt='Photo1' />
				</aside>
			</section>
		</div>
	)
}
