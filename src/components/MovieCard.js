import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import React, {useState} from 'react';
import { favourite, unFavourite } from "../faves-utilities/favSlice";
import { useDispatch } from "react-redux";
import MovieRating from './MovieRating';




function MovieCard( { movie, isFav } ) {


    const dispatch = useDispatch();

  function handleFavClick(addToFav, obj){
    if(addToFav === true){
        dispatch(favourite(obj));
    }else{
        dispatch(unFavourite(obj));
    }   
}


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
                        <h3 className='hover-title'>{movie.title.length > 30 ? `${movie.title.substring(0, 30)}...` : movie.title}</h3>
                        <MovieRating  rating={movie.vote_average}/>
                        <p className='hover-overview'>{MOVIE_OVERVIEW.substr(0,110)}...</p>
                        <Link className='hover-link' to={`/movie/${movie.id}`}>More Info</Link>
                        
                    </div>
                )}
            </div>
            
        </div>
        </>
    )
}

export default MovieCard;



  