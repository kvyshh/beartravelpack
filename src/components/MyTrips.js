import { useState } from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import Search from './Search'
import AddTripForm from './AddTripForm'
import '../App.css';


function MyTrips() {
    const [open, setOpen] = useState(false)
    const [trips, setTrips] = useState([])
    const [tripsList, setTripsList] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() =>{
        fetch ('http://http://localhost:9292/trips')
        .then (r => r.json())
        .then (trips => {
        setTripList(trips)
        setTrips(trips)
        })
    }, [])
    
    return (
        <>
        <h1>My Trips</h1>
        <div>
            <Search />
            <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Add a Trip</Button>}
            >
                <AddTripForm />
            </Modal>

        </div>
        </>
    )

}

export default MyTrips;