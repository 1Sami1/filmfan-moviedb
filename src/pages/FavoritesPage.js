import { Link } from 'react-router-dom';


function FavoritesPage(){
    return (
        <section className="favs-page">
            <h2>Favorites</h2>
            <p className='faves-p'>No Movies have been added to Favorites.<br/>Add a movie by clicking 'heart' on the movie cards </p>
            <Link className="link" to="/">Back To Home</Link>
        </section>
    )
}

export default FavoritesPage