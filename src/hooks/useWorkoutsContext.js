import { TourDatesContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useTourDatesContext = () => {
    const context = useContext(TourDatesContext)

    if(!context) {
        throw Error('useTourDatesContext must be used inside a TourDatesContextProvider')
    }
    return context
}
 

