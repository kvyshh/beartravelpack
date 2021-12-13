
import '../App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation'
import Welcome from './Welcome'
import MyTrips from './MyTrips'
import TripItinerary from './TripItinerary'

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element= { <Welcome /> } />
        <Route path="/trips" element= { <MyTrips /> } />
        <Route path="/trips/:id" element= { <TripItinerary /> } />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
