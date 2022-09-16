import React, { useState } from "react"
import image2 from "./assets/image2.svg"

export const Section2 = () => {
	const [email, setEmail] = useState("")
	const handleSubmit = (event) => {
		event.preventDefault()
		console.log("hey")
		setEmail("")
	}
	const handleOnChange = (e) => {
		e.target.value && setEmail(e.target.value)
	}

	return (
		<div className='container'>
			<section className='flex items-center justify-between gap-2 sm:flex-wrap-reverse'>
				<aside className='shrink'>
					<img src={image2} className='w-full' alt='Photo2' />
				</aside>
				<aside className='basis-7/12 flex flex-col gap-9 shrink-0  sm:flex-1'>
					<h1 className='text-5xl leading-10 font-bold tracking-[1.6px] md:text-4xl'>
						Subscription index
					</h1>
					<form onSubmit={handleSubmit} className='flex gap-10'>
						<input
							className='py-5 pl-4 placeholder-black font-bold max-w-[302px] w-full rounded-[10px] border-purple border border-solid focus:border-purple outline-none '
							type='text'
							placeholder='Email'
							value={email}
							onChange={handleOnChange}
						/>
						<button
							type='submit'
							className='transition-all active:scale-[1.015] text-[17px] font-bold leading-6 text-center py-[19px] px-[60px] rounded-[10px] bg-purple text-white hover:border hover:border-purple hover:border-solid hover:bg-white hover:text-purple min-w-max sm:px-7 flex-1 sm:max-w-none'>
							Try
						</button>
					</form>
				</aside>
			</section>
		</div>
	)
}
