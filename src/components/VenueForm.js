import { useState, useEffect } from 'react'
import { useVenuesContext } from '../hooks/useVenuesContext'
import AsyncSelect from 'react-select/async'
// import VenueList from './VenueList'

const VenueForm = () => {
  const { dispatch } = useVenuesContext()
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [capacity, setCapacity] = useState('')
  const [notes, setNotes] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  useEffect(() => { 
    const fetchWorkouts = async () => {
        const res = await fetch('/api/venues')
        console.log(res)
        const json = await res.json();
        if(res.ok){
            dispatch({type: 'SET_VENUES', payload: json})
        }
    }
    fetchWorkouts()
}, [])

//   const handleChange = (selectedOption) => {
//     setVenue(selectedOption.value)
//     }

//   const fetchVenues = async () => {
//     const res = await fetch('/api/venues')
//     const json = await res.json();
//     return json
//  }

//  const loadOptions = async (searchValue, callback) => {
//   const json = await fetchVenues()
//   const venueObject = json.map(i => {
//       return {value: i._id, label: i.name}
//   })
//   const filteredOptions = venueObject.filter(venue => venue.label.toLowerCase().includes(searchValue.toLowerCase()));
//   callback(filteredOptions)
// }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const tourDate = { name, city, capacity, notes }
    
    const response = await fetch('/api/venues', {
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
      setName('')
      setCity('')
      setCapacity('')
      setNotes('')
      dispatch({type: 'CREATE_VENUE', payload: json})
  
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Venue</h3>

      <label>Venue Name:</label>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        value={name}
        className={emptyFields.includes('date') ? 'error' : ''}
      />

      <label>City</label>
      <input 
        type="string" 
        
        onChange={(e) => setCity(e.target.value)} 
        value={city}
        className={emptyFields.includes('load') ? 'error' : ''}
      />
      

      <label>Capacity:</label>
      <input 
        type="number" 
        onChange={(e) => setCapacity(e.target.value)} 
        value={capacity}
        className={emptyFields.includes('reps') ? 'error' : ''}
      />
      {/* <AsyncSelect key={venue} loadOptions={loadOptions}  defaultOptions onChange={handleChange} /> */}

      <label>day notes:</label>
      <input 
        type="string" 
        onChange={(e) => setNotes(e.target.value)} 
        value={notes}
        className={emptyFields.includes('reps') ? 'error' : ''}
      />
  

      <button>Add Venue</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default VenueForm
