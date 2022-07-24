import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


const WorkoutDetails = ({ tourdate }) => {
    const { dispatch } = useWorkoutsContext()
    const handleClick = async() => {
        const res = await fetch(`/api/tourdates/${tourdate._id}`, {
            method: 'DELETE', 
        })
        const json = await res.json();

        if(res.ok){   
            dispatch({type: 'DELETE_TOURDATE', payload: json})
        }
    }

    return ( 
        <div className="tourdate-details">
            {/* <h4>{tourdates.date}</h4> */}
            <p><strong>Date:</strong>{tourdate.date}</p>
            <p><strong>Type:</strong>{tourdate.activity}</p>
            {/* if venue exists */}
           {tourdate.venue &&<p><strong>Venue Name:</strong>{tourdate.venue.name}</p>}
           {tourdate.venue &&<p><strong>Venue City:</strong>{tourdate.venue.city}</p>}
           {tourdate.venue &&<p><strong>Venue Capacity:</strong>{tourdate.venue.capacity}</p>}
            <p><strong>Notes:</strong>{tourdate.notes}</p>
            <p> {formatDistanceToNow(new Date(tourdate.createdAt), {addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>


     );
}
 
export default WorkoutDetails;
