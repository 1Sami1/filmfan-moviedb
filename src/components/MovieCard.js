import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';


function movieCard( { movie } ) {
    const MOVIE_OVERVIEW = movie.overview;

    return(
        <div className='movie-card'>
            <div className="movie-poster">
                {movie.poster_path === null ? 
                    <img src={noPoster} alt="No poster available" /> :
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                }
            </div>

            <div className="movie-info">
                <h3>{movie.vote_average}</h3>
                
            </div>
            <div className='on-hover'>
                <h3 className='hover-title'>{movie.title}</h3>
                <p className='hover-overview'>{MOVIE_OVERVIEW.substr(0,110)}...</p>
                <Link to={`/movie/${movie.id}`}>More Info</Link>
                <p>{movie.release_date}</p>
            </div>
            

        </div>
    )
}

export default movieCard