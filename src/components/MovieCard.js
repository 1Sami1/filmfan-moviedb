import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import React, {useState} from 'react';



function MovieCard( { movie } ) {
    const MOVIE_OVERVIEW = movie.overview;

    const [isShown, setIsShown] = useState(false);

    return(
        <>
        <div className='movie-card' >

            <div className="movie-poster"  
                 onMouseEnter={() => setIsShown(true)} 
                 onMouseLeave={() => setIsShown(false)} >

                {movie.poster_path === null ? 
                    <img src={noPoster} alt="No poster available" /> :
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                }
                {isShown && (
                    <div className='on-hover'>
                        <span className='black-bg'></span>
                        <h3 className='hover-title'>{movie.title}</h3>
                        <p className='hover-overview'>{MOVIE_OVERVIEW.substr(0,110)}...</p>
                        <Link className='hover-link' to={`/movie/${movie.id}`}>More Info</Link>
                        <p className='hover-date'>{movie.release_date}</p>
                    </div>
                )}
            </div>
            <div className="movie-info">
                <h3 className='rating'>{movie.vote_average}</h3>
            </div>
        </div>
        </>
    )
}

export default MovieCard;



  