import noPoster from '../images/no-movie-poster.jpg';
import {AiFillStar} from 'react-icons/ai';
import {BsFillSuitHeartFill} from 'react-icons/bs';
import  {useDispatch}  from "react-redux";
import FavButton from './FavButton';
import { favourite, unFavourite } from "../faves-utilities/favSlice";


function SingleMovie({ movie, isFav }) {

    
  const dispatch = useDispatch();

  function handleFavClick(addToFav, obj){
    if(addToFav === true){
        dispatch(favourite(obj));
    }else{
        dispatch(unFavourite(obj));
    }  
     
}
  

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
            <p className='single-date'>{movie.release_date}</p>
            <p className='single-overview'>{movie.overview}</p>
            <p className='single-rating'>{movie.vote_average}<AiFillStar className='rating-star' /></p>
        </div>
        <div className='fav-btn'>
                {isFav ? 
                    <FavButton movie={movie} remove={true} handleFavClick={handleFavClick} /> : 
                    <FavButton movie={movie} handleFavClick={handleFavClick} />
                }
        </div>
      </>
  )
}

export default SingleMovie