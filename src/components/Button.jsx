import React from "react"

export const Button = ({ text, classes }) => {
	return (
		<button className='transition-all active:scale-[1.015] text-[17px] font-bold leading-6 text-center py-[19px] px-[60px] rounded-[10px] bg-orange text-white sm:px-5 sm:py-3 md:hidden'>
			{text}
		</button>
	)
}
