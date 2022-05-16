import { NavLink } from 'react-router-dom';


function BrowseBy() {
  return (
        <ul className='browse-by'>
            <li className='facet-link'><NavLink to="/sort/top-rated">Top Rated</NavLink></li>
            <li className='facet-link'><NavLink to="/sort/popular">Popular</NavLink></li>
            <li className='facet-link'><NavLink to="/sort/upcoming">Upcoming</NavLink></li>
            <li className='facet-link'><NavLink to="/sort/now-playing">Now Playing</NavLink></li>
        </ul>
    
  )
}

export default BrowseBy