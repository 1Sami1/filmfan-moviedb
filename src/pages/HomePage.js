import BrowseBy from "../components/BrowseBy";
import { useEffect, useState } from 'react';
import Movies from '../components/Movies';
import { API_KEY } from '../globals/globals';


function HomePage({sort}) {
    const [moviesData, setMoviesData] = useState(false);
    const [error, setError] = useState(false);

    const errorMessage = 'Oh no...Something went wrong...Please try again later.';

    useEffect(() => {

        const fetchMovies = async () => {

            // The "catch()" will only run if the request is bad...
            // for example: no response at all from the server...
            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?api_key=${API_KEY}&language=en-US&page=1`)
                                .catch(err => {
                                    moviesData !== false && setMoviesData(false);
                                    setError(errorMessage);
                                })
            
            const data = await res.json();

            // This code will only run...if we get a response (good or bad) from the API
            if(data.success === false){
                // Bad response from the API...
                // Reset the movies if it is not false...
                moviesData !== false && setMoviesData(false);
                error !== false && setError(false);
                setError(errorMessage);
            }else{
                // Good response fromt he API
                // Reset the error if it is not false...
                error !== false && setError(false);
                // Grab the first 12 movies from the API
                const first12Movies = data.results.splice(0,12);
                setMoviesData(first12Movies);
            }
            

        }

        fetchMovies()


    }, [sort]);
    return(
        <section className="home-page">
                <BrowseBy /> 
                {error !== false && <p className="api-error">{error}</p>}
            {moviesData !== false && <Movies moviesData={moviesData}  />}         
            
        </section>
    )
    
}

export default HomePage