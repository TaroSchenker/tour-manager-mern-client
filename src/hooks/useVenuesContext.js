import { VenuesContext } from "../context/VenueContext";
import { useContext } from "react";

export const useVenuesContext = () => {
    const context = useContext(VenuesContext)

    if(!context) {
        throw Error('useWorkoutsContext must be used inside a WorkoutsContextProvider')
    }
    return context
}
 

