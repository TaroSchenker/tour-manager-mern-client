import { useEffect } from "react";
import { useVenuesContext } from "../hooks/useVenuesContext"

//components
import VenueDetails from "../components/VenueDetails";
import VenueForm from "../components/VenueForm";

const Venues = () => {
    const{ venues, dispatch} = useVenuesContext()   
    useEffect(() => { 
        const fetchVenues = async () => {
            const res = await fetch('/api/venues')
            const json = await res.json();
            console.log('venue page fetch',json)
            if(res.ok){
                dispatch({type: 'SET_VENUES', payload: json})
            }
        }
        fetchVenues()
    }, [dispatch])
    return (
        <div className="home">
            <div className="tourdates">
            <h1> Venues in db</h1>
                {venues && venues.map(venue => (
                    <VenueDetails key={venue._id} venue={venue}     />  
                ))}
            </div>
            <VenueForm />
        </div>
     );
}
export default Venues;
