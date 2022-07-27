import { useState, useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import AsyncSelect from 'react-select/async'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import VenueList from './VenueList'


const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()
  const [date, setDate] = useState('')
  const [activity, setActivity] = useState('')
  const [venue, setVenue] = useState('')
  const [notes, setNotes] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const [startDate, setStartDate] = useState(new Date());

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
}, [dispatch, venue])

  const handleChange = (selectedOption) => {
    setVenue(selectedOption.value)
    }

  const fetchVenues = async () => {
    const res = await fetch('/api/venues')
    const json = await res.json();
    return json
 }

 const loadOptions = async (searchValue, callback) => {
  const json = await fetchVenues()
  const venueObject = json.map(i => {
      return {value: i._id, label: i.name}
  })
  const filteredOptions = venueObject.filter(venue => venue.label.toLowerCase().includes(searchValue.toLowerCase()));
  callback(filteredOptions)
}

  const handleSubmit = async (e) => {
    e.preventDefault()
    const tourDate = { date, activity, venue, notes }
    
    const response = await fetch('/api/tourdates', {
      method: 'POST',
      body: JSON.stringify(tourDate),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setDate('')
      setActivity('')
      setVenue('')
      setNotes('')
      dispatch({type: 'CREATE_TOURDATE', payload: json})
  
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New tourDate</h3>

      <label>Tour date:</label>
      <DatePicker selected={startDate} onChange={(date) => setDate(date)} />
      <label>Tour day type:</label>
      {/* <input 
        type="string" 
        // onChange={(e) => setActivity(e.target.value)} 
        // value={activity}
        className={emptyFields.includes('load') ? 'error' : ''}
      /> */}
        <select value={activity} onChange={(e) => setActivity(e.target.value)}>
        <option value="Show">Show</option>
        <option value="Travel">Tavel</option>
        <option value="Off">Off</option>
      </select>
      

      <label>Show venue:</label>
      {/* <input 
        type="number" 
        onChange={(e) => setVenue(e.target.value)} 
        value={venue}
        className={emptyFields.includes('reps') ? 'error' : ''}
      /> */}
      <AsyncSelect key={venue} loadOptions={loadOptions}  defaultOptions onChange={handleChange} />

      <label>day notes:</label>
      <input 
        type="string" 
        onChange={(e) => setNotes(e.target.value)} 
        value={notes}
        // className={emptyFields.includes('reps') ? 'error' : ''}
      />
  

      <button>Add tourDate</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm
