import React from 'react'

function AddTripsForm ({ handleChange, handleAddTrip, formData }) {

return (
    <>
    <div className="ui segment">
        <h3>Add a Trip</h3>
            <form onSubmit={handleAddTrip} className="ui form">
                <div className="inline fields">
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                        />
                    <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        />
                    <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        />
                    <input
                        type="text"
                        name="destination"
                        placeholder="Destination"
                        value={formData.destination}
                        onChange={handleChange}
                        />

                    </div>
                        <button className="ui button" type="submit" onSubmit={e => handleAddTrip(e)}>
                    Add Trip
                </button>
            </form>
    </div>
    </>
)
}

export default AddTripsForm;
