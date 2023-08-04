import { createContext, useContext, useState } from "react";
import useResources from "../hooks/useResources.js"

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const people = useResources("people");
    const vehicles = useResources("vehicles");
    const planets = useResources("planets");
    const [favorites, setFavorties] = useState([]); 
    const[loggedIn, setLoggedIn] = useState(false);

    const addFavorites = ( id, type, name) => {
        console.log(favorites);
        setFavorties((prev) => {
            const newFavorite = {
                id,
                type,
                name
            }
            const filter = prev.filter(e=>e.id === id) 
            if (filter.length > 0){
                console.log("hola");
                return prev.filter(e=>e.id != id)
            }
            return ([...prev, newFavorite])
        }
        )
    }
    const store = {
        people, vehicles, planets, favorites
    }

    const actions = {
        addFavorites,
        setLoggedIn
    }

    return (<AppContext.Provider value={{store, actions}}>
        {children}
    </AppContext.Provider>)
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;