import React, { useState, useEffect } from 'react'
import Search from './Search'
import AddTripForm from './AddTripForm'
import TripList from './TripList'
import '../App.css';


function MyTrips() {
    const [trips, setTrips] = useState([])
    const [tripsList, setTripsList] = useState([])
    const [search, setSearch] = useState('')
    const [formData, setFormData] = useState({
        title: '',
        startDate: '',
        endDate: '',
        destination: '',
        user_id: 1
    })

    useEffect(() =>{
        fetch ('http://localhost:9292/trips')
        .then (r => r.json())
        .then (trips => {
        setTripsList(trips)
        setTrips(trips)
        })
    }, [])

    function handleSearch (e) {
        setSearch(e.target.value)
        const filteredTripsByDestination = trips.filter(tripObj => tripObj.destination.toLowerCase().includes(e.target.value.toLowerCase()))
        setTripsList(filteredTripsByDestination)
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleAddTrip (event) {
        event.preventDefault();
        fetch ('http://localhost:9292/trips', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(trip => {
            setTripsList([trip, ...tripsList])
        })

        setFormData({
            title: '',
            startDate: '',
            endDate: '',
            destination: '',
            user_id: 1
        })
    }

    function handleDeleteTrip(tripObj) {
        fetch (`http://localhost:9292/trips/${tripObj.id}`, {
            method: 'DELETE'
        })
        .then(() => {
            const updatedTripsArr = trips.filter((trip) => trip.id !== tripObj.id);
            setTrips(updatedTripsArr);
            setTripsList(updatedTripsArr)
        })
    }

    function handleUpdateTrip (updatedTrip) {
        const updatedTripsArr = trips.filter((trip) => {
            if (trip.id === updatedTrip.id) {
                return updatedTrip;
            } else {
                return trip;
            }
        });
        setTrips(updatedTripsArr)
        setTripsList(updatedTripsArr)
    }

    return (
        <>
        <h1>My Trips</h1>
        <div>
            <Search search={search} handleSearch={handleSearch}/>
            <AddTripForm handleAddTrip={handleAddTrip} handleChange={handleChange} formData={formData}/>
            <TripList tripsList={tripsList} handleDeleteTrip={handleDeleteTrip} onUpdateTrip={handleUpdateTrip}/>
        </div>
        </>
    )

}

export default MyTrips;