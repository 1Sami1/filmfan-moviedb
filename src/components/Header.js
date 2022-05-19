import { Link } from 'react-router-dom';
import Nav from './Nav';
import logo from '../images/Logo.png';
import { useState, useEffect } from 'react';



function Header() {

    
    const [navOpen, setNavOpen] = useState(false);

    const showHideNav = () => {
        setNavOpen(!navOpen);
    }
   
    const isDesktop = (e) => {
        if(e.matches){
            setNavOpen(false);
        }
    }
    
    useEffect(() => {
          let mediaQuery = window.matchMedia('(min-width: 600px)');
          mediaQuery.addEventListener('change', isDesktop);
          // this is the cleanup function to remove the listener
          return () => mediaQuery.removeEventListener('change', isDesktop);
    }, []);


    return(
        <header  className={navOpen ? 'show' : undefined}>
            <Link to="/"><img className='site-logo' src={logo} alt="Green FilmFanDB Logo" /></Link>
            <button className='btn-nav' onClick={showHideNav}>
                <span className='hamburger-menu'>
                    <span className='burger burger1'></span>
                    <span className='burger burger2'></span>
                    <span className='burger burger3'></span>
                </span>
            </button>
            
            <Nav handleShowHideNav={showHideNav} />
        </header>
    );
}

export default Header;