import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function TripCard ( {tripObj, handleDeleteTrip, onUpdateTrip }) {
    const { title, startDate, endDate, destination } = tripObj;

    const [updatedTitle, setUpdatedTitle] = useState(title);

    function handleTitleFormSubmit (e) {
        e.preventDefault();
        fetch(`http://localhost:9292/trips/${tripObj.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({ title: tripObj.updatedTitle }),
        })
        .then(r => r.json())
        .then((updatedTrip) => {
            onUpdateTrip(updatedTrip);
        });
    }

    return (
        <>
            <div class="card">
                    <div class="content">
                    <div class="header">{title}</div>
                    <div class="meta">
                        <p>From {startDate} to {endDate}</p>
                    </div>
                    <div class="description">
                        {destination}
                    </div>
                    </div>
                    <div class="extra content">
                    <span class="right floated">
                        <Link to={`/trips/${tripObj.id}`}>
                        <button>View Itinerary</button>
                        </Link>
                    </span>
                    <span>
                        <form onSubmit={handleTitleFormSubmit}>
                            <input
                                type="text"
                                placeholder="New Title..."
                                value={updatedTitle}
                                onChange={(e) => setUpdatedTitle(e.target.value)}
                            />
                            <button type="submit">Update Title</button>
                        </form>
                    </span>
                    <span>
                        <button onClick={() => {handleDeleteTrip(tripObj)}}>Delete</button>
                    </span>
                    </div>
            </div>
        </>
    )
}

export default TripCard;