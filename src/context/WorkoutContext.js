import { useReducer } from "react";
import { createContext } from "react";

export const  WorkoutsContext  = createContext()

export const workoutsReducer = (state, action) => {
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

export const WorkoutsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(workoutsReducer, {
        tourdates: null
    })

    return (
        <WorkoutsContext.Provider value={{...state, dispatch}}>
            { children }
        </WorkoutsContext.Provider >  
    ) 
}
