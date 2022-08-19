import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

function SearchGrid({searchData}){

    const favs = useSelector((state) => state.favs.items);

    return (
        <div className='movies-container'>
            {searchData.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
      )
}

export default SearchGrid;