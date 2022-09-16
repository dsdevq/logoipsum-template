import React, {
	createContext,
	useContext,
	// useState
} from "react"

const AppContext = createContext({})

export function useAppContext() {
	return useContext(AppContext)
}

export function AppProvider({ children }) {
	// const [plan, setPlan] = useState({})

	// const handlePlant = () => {

	// }

	return <AppProvider.Provider value={{}}>{children}</AppProvider.Provider>
}
