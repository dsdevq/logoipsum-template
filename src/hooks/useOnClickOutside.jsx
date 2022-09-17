import { useEffect, useRef, useState } from "react"

export default function useOutSideAlerter(initialState) {
	const [isShow, setIsShow] = useState(initialState)
	const ref = useRef(null)

	const handleClickOutSide = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false)
		}
	}
	useEffect(() => {
		document.addEventListener("click", handleClickOutSide, true)
		return () => {
			document.removeEventListener("click", handleClickOutSide, true)
		}
	})

	return { ref, isShow, setIsShow }
}
