import React from "react"
import { Section1 } from "./Section1"
import { Section2 } from "./Section2"
import { Section3 } from "./Section3"

export const Main = () => {
	return (
		<main className='pt-[104px] pb-[132px] md:pt-12 flex flex-col gap-20'>
			<Section1 />
			<Section2 />
			<Section3 />
		</main>
	)
}
