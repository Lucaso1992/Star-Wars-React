import { createContext, useContext } from "react";
import useResources from "../hooks/useResources.js"

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const people = useResources("people");
    const vehicles = useResources("vehicles");
    const planets = useResources("planets");

    const store = {
        people, vehicles, planets
    }

    return (<AppContext.Provider value={{store}}>
        {children}
    </AppContext.Provider>)
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;