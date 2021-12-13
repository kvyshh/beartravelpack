import React from 'react'
import TripCard from './TripCard';

function TripList ({ tripsList, handleDeleteTrip, onUpdateTrip }) {

    const card = tripsList.map(trip => {
        return <TripCard
        key={trip.id}
        tripObj={trip}
        handleDeleteTrip={handleDeleteTrip}
        onUpdateTrip={onUpdateTrip}
        />})

    return (
        <>
        <div class="ui link cards">
            {card}
        </div>
        </>
    )
}

export default TripList;