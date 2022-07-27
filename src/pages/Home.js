import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

//components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
    const{ tourdates, dispatch} = useWorkoutsContext()
    useEffect(() => { 
        const fetchWorkouts = async () => {
            const res = await fetch('/api/tourdates')
            console.log(res)
            const json = await res.json();
            if(res.ok){
                dispatch({type: 'SET_TOURDATES', payload: json})
            }
        }
        fetchWorkouts()
    }, [dispatch])
    return (
        <div className="home">
            <div className="tourdates">
            <h1> Tourdates in db</h1>
                {tourdates && tourdates.map(tourdate => (
                    <WorkoutDetails key={tourdate._id} tourdate={tourdate}     />  
                ))}
            </div>
            <WorkoutForm />
        </div>
     );
}
 
export default Home;
