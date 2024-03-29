import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { appTitle } from "../globals/globals";
import isFav from '../faves-utilities/isFav';
import SingleMovie from "../components/SingleMovie";
import { API_KEY } from "../globals/globals";
import {Link} from 'react-router-dom';
 
function PageSingleMovie() {

  const [movieData, setMovieData] = useState(false);
  const [error, setError] = useState(false);
  const favs = useSelector((state) => state.favs.items);

  const errorMessage = 'Oh no...Something went wrong...Please try again later.';

  const { id } = useParams()

  useEffect(() => {

    const fetchMovie = async () => {

      // The "catch()" will only run if the request is bad...
      // for example: no response at all from the server...
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
                          .catch( _ => {
                              movieData !== false && setMovieData(false);
                              setError(errorMessage);
                          });
      
      const data = await res.json();

      // This code will only run...if we get a response (good or bad) from the API
      if(data.success === false){
          // Bad response from the API...
          // Reset the movies if it is not false...
          movieData !== false && setMovieData(false);
          error !== false && setError(false);
          setError(errorMessage);
      }else{
          // Good response fromt he API
          // Reset the error if it is not false...
          error !== false && setError(false);
          // Grab the first 12 movies from the API
          //const first12Movies = data.results.splice(0,12);
          //setMovieData(first12Movies);
          //console.log(data)
          setMovieData(data);
      }
      
  }

  fetchMovie()


  }, []);

  useEffect(() => {
    if (movieData) {
      document.title = `${movieData.title} - ${appTitle}`
    }
    window.scrollTo(0, 0)
  }, [movieData])

  

  return (
    <>
    

    <section className='single-movie-container'>
        {error !== false && <p className="api-error">{error}</p>}
        {movieData !== false && <SingleMovie movie={movieData} isFav={isFav(favs, null, id)} />}
    </section>
    <div className='single-link-div'>
      <Link className="single-link" to="/">Back To Home</Link>
    </div>
    </>
  )
}

export default PageSingleMovie