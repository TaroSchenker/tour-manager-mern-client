import { useVenuesContext } from "../hooks/useVenuesContext"
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const VenueDetails = ({ venue }) => {
    console.log('i am in venue tails',venue)
    const { dispatch } = useVenuesContext()
    const handleClick = async() => {
        const res = await fetch(`/api/venues/${venue._id}`, {
            method: 'DELETE', 
        })
        const json = await res.json();

        if(res.ok){   
            dispatch({type: 'DELETE_VENUE', payload: json})
        }
    }

    return ( 
        <div className="tourdate-details">
            {/* if venue exists */}
           <p><strong>Venue Name:</strong>{venue.name}</p>
           <p><strong>Venue City:</strong>{venue.city}</p>
           <p><strong>Venue Capacity:</strong>{venue.capacity}</p>
            <p><strong>Notes:</strong>{venue.notes}</p>
            <p> {formatDistanceToNow(new Date(venue.createdAt), {addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>


     );
}
 
export default VenueDetails;
