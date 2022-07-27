import { useReducer } from "react";
import { createContext } from "react";

export const VenuesContext  = createContext()

export const VenueReducer = (state, action) => {
    switch(action.type) {
        case 'SET_VENUES':
            console.log('set venue payload',action.payload)
            return {
                venues: action.payload
            }
        case 'CREATE_VENUE':
             console.log('action payload',action.payload)
        return {
                venues: [...state.venues, action.payload]
            }  
        case 'DELETE_VENUE':
            return {
                venues: state.venues.filter((w) => w._id !== action.payload._id)
            }    
        default:
            return state
    }
}

export const VenuesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(VenueReducer, {
        tourdates: null
    })

    return (
        <VenuesContext.Provider value={{...state, dispatch}}>
            { children }
        </VenuesContext.Provider >  
    ) 
}
