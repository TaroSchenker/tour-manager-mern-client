// // import Select from 'react-select'
// import AsyncSelect from 'react-select/async'
// import { useState } from 'react'

// const VenueList = () => {
//     const [venue, setVenue] = useState('')
// const handleChange = (selectedOption) => {
// console.log('handle change', selectedOption)
// setVenue(selectedOption)
// }
//  const fetchVenues = async () => {
//     const res = await fetch('/api/venues')
//     console.log(res)
//     const json = await res.json();
//     return json
//  }
// const loadOptions = async (searchValue, callback) => {
//     const json = await fetchVenues()
//     console.log(searchValue)
//     console.log('here are the venue list items', json.map(i => {
//        return {value: i.name, label: i.name}
//     }))
//     const venueObject = json.map(i => {
//         return {value: i.name, label: i.name}
//      })
//      const filteredOptions = venueObject.filter(venue => venue.label.toLowerCase().includes(searchValue.toLowerCase()));
//     console.log(json.name)
//     callback(filteredOptions)
// }
//     return (
//         <AsyncSelect loadOptions={loadOptions}  defaultOptions onChange={handleChange} venue={venue} />
//         );
//     }
//     export default VenueList;
    




// // const VenueList = () => {
// // const venue
// // const loadOptions = async (inputText, callback) => {
// //     const res = await fetch('/api/venues')
// //     const json = await res.json();
// //     console.log(json)
// //     const filteredOptions = json.filter(v => v.name.toLowerCase().includes(searchValue.toLowerCase()))
// //     callback(filteredOptions.map( i =>{label: i.name} ))
// //     // if(res.ok){
// //     //     dispatch({type: 'SET_WORKOUTS', payload: json})
// //     // }    
// // }
// //     return (
// //         <AsyncSelect loadOptions={loadOptions} onChange={handleChange} />
// //      );
// // }
 
// // export default VenueList;
