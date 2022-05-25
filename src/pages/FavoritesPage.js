import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import MovieCard from '../components/MovieCard';


function FavoritesPage(){
    const favs = useSelector((state => state.favs.items))

  useEffect(() => {
		document.title = `${appTitle} - Favs`;
	}, []);

    return (
        <section className="favs-page">
            <h2>Favorites</h2>
            {favs.length < 1 ? <p className='faves-p'>There's nothing here! head back to the <Link to="/">home</Link> page and add some favourite movies!.</p> : 
                <div className="movies-container">
                    {favs.map((movie, i) => {
                        return <MovieCard key={i} 
                                       movie={movie}
                                       isFav={true} />
                    })}
               </div>}
            <div className='link-div'>
                <Link className="link" to="/">Back To Home</Link>
            </div>
            
        </section>
    )
}

export default FavoritesPage