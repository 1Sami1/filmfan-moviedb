import { Link } from 'react-router-dom';
import Nav from './Nav';
import logo from '../images/Logo.png';



function Header() {
    return(
        <header className='site-header'>
            <img src={logo} alt="" />
            <Nav />
        </header>
    );
}

export default Header;