import { useReducer } from "react";
import { createContext } from "react";

export const TourDatesContext  = createContext()

export const tourDatesReducer = (state, action) => {
    switch(action.type) {
        case 'SET_TOURDATES':
            console.log('set tourdate payload',action.payload)
            return {
                tourdates: action.payload
            }
        case 'CREATE_TOURDATE':
             console.log('action payload',action.payload)
        return {
                tourdates: [...state.tourdates, action.payload]
            }
        case 'DELETE_TOURDATE':
        return {
            tourdates: state.tourdates.filter((w) => w._id !== action.payload._id)
        }     
        default:
            return state
    }
}

export const TourDateContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(tourDatesReducer, {
        tourdates: null
    })

    return (
        <TourDatesContext.Provider value={{...state, dispatch}}>
            { children }
        </TourDatesContext.Provider >  
    ) 
}
