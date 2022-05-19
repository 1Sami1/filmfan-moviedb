import { NavLink } from 'react-router-dom';
import {BiSearchAlt} from 'react-icons/bi'
import { Twirl as Hamburger } from 'hamburger-react'


function Nav({handleShowHideNav}) {

    function closeNav(e){
        if(window.innerWidth < 600){
            handleShowHideNav();
        }else{
            e.target.blur();
        }
    }


    return(
        <nav className='site-nav' onClick={closeNav}>
            <ul className='nav-ul'>
                <li><NavLink tabIndex={1} to="/">Home</NavLink></li>
                <li><NavLink tabIndex={2} to="/about">About</NavLink></li>
                <li><NavLink tabIndex={3} to="/favs">Favorites</NavLink></li>
                <li><BiSearchAlt /></li>
            </ul>
        </nav>
    )
}

export default Nav