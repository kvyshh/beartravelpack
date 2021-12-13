import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../App.css';

function TripItinerary() {
    const [trip, setTrip] = useState(null)
    const [isLoaded, setIsLoaded] = useState(null)

    const tripId = useParams().id

    useEffect(() => {
        fetch(`http://localhost:9292/trips/${tripId}`)
        .then (r => r.json())
        .then(tripData => {
            setTrip(tripData)
            setIsLoaded(true)
        })
    }, [])


    if (!isLoaded) return <h2>Loading...</h2>
    const {title, startDate, endDate, destination } = trip
    return (
        <>
        <h1>Trip Itinerary</h1>
        <h2>{title}</h2>
        <h3>{destination}</h3>
        <p>From {startDate} to {endDate}</p>
        <h2>Itinerary List</h2>
        <ul>
            <li>Item One</li>
        </ul>
        </>
    )

}

export default TripItinerary;