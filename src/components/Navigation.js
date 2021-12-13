import '../App.css';
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <h3>My Trip Planner</h3>
            <ul className="nav-links">
                <Link to="/">
                <li>Welcome</li>
                </Link>
                <Link to="/trips">
                <li>My Trips</li>
                </Link>
            </ul>
        </nav>
    )

}

export default Navigation;