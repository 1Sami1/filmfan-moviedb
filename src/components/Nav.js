import { NavLink } from 'react-router-dom';
import  search  from '../images/magnifying-glass-solid.svg'; 

function Nav() {
    return(
        <nav className='site-nav'>
            <ul className='nav-ul'>
                <li><NavLink tabIndex={1} to="/">Home</NavLink></li>
                <li><NavLink tabIndex={2} to="/about">About</NavLink></li>
                <li><NavLink tabIndex={3} to="/favs">Favorites</NavLink></li>
                <li><img src={search} alt=""/></li>
            </ul>
        </nav>
    )
}

export default Nav