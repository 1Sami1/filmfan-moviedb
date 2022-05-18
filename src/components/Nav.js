import { NavLink } from 'react-router-dom';
import {BiSearchAlt} from 'react-icons/bi'
import { Twirl as Hamburger } from 'hamburger-react'
import Burger from './Burger'

function Nav() {
    return(
        <nav className='site-nav'>
            <ul className='nav-ul'>
                <li><NavLink tabIndex={1} to="/">Home</NavLink></li>
                <li><NavLink tabIndex={2} to="/about">About</NavLink></li>
                <li><NavLink tabIndex={3} to="/favs">Favorites</NavLink></li>
                <li><BiSearchAlt /></li>
            </ul>
            <div className='burger-menu'>
                <Burger />
            </div>
        </nav>
    )
}

export default Nav