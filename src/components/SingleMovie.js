import noPoster from '../images/no-movie-poster.jpg';
import {AiFillStar} from 'react-icons/ai';
import  {useDispatch}  from "react-redux";
import {format} from "date-fns"
import FavButton from './FavButton';
import { favourite, unFavourite } from "../faves-utilities/favSlice";
import MovieRating from './MovieRating';


function SingleMovie({ movie, isFav }) {

    
  const dispatch = useDispatch();

  function handleFavClick(addToFav, obj){
    if(addToFav === true){
        dispatch(favourite(obj));
    }else{
        dispatch(unFavourite(obj));
    }  
     
}
    // turn API runtime into mins and seconds
    let runTime = (movie.runtime);
    let hours = Math.floor(runTime /60);
    let minutes = runTime % 60;

    // Movie release date formatted version
    let date = "";
    // error handling for release dates
    if (movie.release_date === undefined || movie.release_date === ""){
        date = 1920-4-20;
    } else {
        date = new Date(movie.release_date);
    }
    const formattedDate = format(date, "MMMM do, yyyy");

  

  return (
      <>
        <div className="single-movie-backdrop"
            style={{
                backgroundImage: movie.backdrop_path !== null && `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
            }}>
        </div>   
        <div className='single-movie-poster'>
            {movie.poster_path === null ?
                        <img src={noPoster} alt="no poster available"/> :
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/> }
        </div>
        <div className="single-movie-info">
            <h2 className='single-title'>{movie.title}</h2>
            <p className='single-tagline'>{movie.tagline}</p>
            
           
            {movie.genres && movie.genres.length > 0 && <p className="single-genres">{movie.genres.map((genre) => genre.name).join(', ')}</p>}
            

            <div className='single-div-times'>
                <p className='single-runtime'>{`${hours}h ${minutes}min`}</p>
                <p className='single-date'>{formattedDate}</p>
            </div>
            
            <p className='single-overview'>{movie.overview}</p>
            <div className='bottom-div'>
                <MovieRating className='single-rating' rating={movie.vote_average}/> 
                <div className='fav-btn'>
                {isFav ? 
                    <FavButton movie={movie} remove={true} handleFavClick={handleFavClick} /> : 
                    <FavButton movie={movie} handleFavClick={handleFavClick} />
                }
                </div>
            </div>
            
        </div>
      </>
  )
}

export default SingleMovie