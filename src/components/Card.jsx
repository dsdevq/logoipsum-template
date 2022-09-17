import React from "react"

export const Card = ({ children }) => {
	return (
		<article
			className='flex flex-col basis-1/3 flex-1 rounded-[10px] p-6 text-center even:bg-orange even:text-white
     odd:text-grey odd:bg-almostWhite even:shadow-[0_32px_34px_0px_rgba(255,112,59,0.317827)]'>
			{children}
		</article>
	)
}
