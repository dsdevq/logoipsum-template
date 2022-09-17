import React from "react"

export const Popup = () => {
	return (
		<article className='alert bg-purple text-white shadow-lg fixed bottom-1 right-1 w-fit transition-all'>
			<div>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='stroke-current flex-shrink-0 h-6 w-6'
					fill='none'
					viewBox='0 0 24 24'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
					/>
				</svg>
				<span>Your have successfully subscribed!</span>
			</div>
		</article>
	)
}
