import { NavLink } from 'react-router-dom';

function Nav() {
    return(
        <nav>
            <ul>
                <li><NavLink tabIndex={1} to="/">Home</NavLink></li>
                <li><NavLink tabIndex={2} to="/about">About</NavLink></li>
                <li><NavLink tabIndex={3} to="/favs">Favorites</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav