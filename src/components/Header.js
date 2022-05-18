import { Link } from 'react-router-dom';
import Nav from './Nav';
import logo from '../images/Logo.png';
import { useState, useEffect } from 'react';



function Header() {
    return(
        <header className='site-header'>
            <Link to="/"><img className='site-logo' src={logo} alt="Green FilmFanDB Logo" /></Link>
            <Nav />
        </header>
    );
}

export default Header;