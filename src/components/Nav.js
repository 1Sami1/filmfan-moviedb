import { NavLink } from 'react-router-dom';

function Nav() {
    return(
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
            </ul>
        </nav>
    )
}