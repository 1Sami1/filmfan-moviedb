import BrowseBy from "../components/BrowseBy";
import BsFillArrowUpSquareFill from 'react-icons/bs'
import { useEffect, useState, useCallback } from 'react';
import Movies from '../components/Movies';
import { API_KEY } from '../globals/globals';


function HomePage({sort}) {
        const selectedMovieFilter = sort;
    // Movie List
    const [moviesData, setMovieList] = useState(false);
    // Flag for if more pages can be loaded
    const [canLoadMore, setCanLoadMore] = useState(true);
    // Last loaded page
    const [moviePage, setMoviePage] = useState(1);

    const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
    });
    };



    const fetchMovies = useCallback(async (page) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${selectedMovieFilter}?api_key=${API_KEY}&language=en-US&page=${page}`);
    const data = await res.json();
    const selectedMovies = data.results.splice(0,12);
    if (page === 1) {
        setMovieList(selectedMovies)
    } else {
        setMovieList(moviesData => [...moviesData, ...selectedMovies]);
    }
    // If the total page limit has been reached set the canLoadMore flag
    if (page >= data.total_pages) {
        setCanLoadMore(false)
    }
    }, [selectedMovieFilter])

    // Handle loadMore button
    const handleLoadMore = () => {
    fetchMovies(moviePage + 1);
    setMoviePage(moviePage + 1);
    }

    // Re-fetch movies if the selectedMovieFilter changes - this will also occur on page load
    useEffect(() => {
    fetchMovies(1)
    setMoviePage(1);
    setCanLoadMore(true)
    }, [fetchMovies, selectedMovieFilter])
    

    return(
        <section className="home-page">
                <BrowseBy /> 
            {moviesData  && <Movies moviesData={moviesData}  />}
            <div className="btns-div">
                {canLoadMore && <button onClick={handleLoadMore} className="load-more">Load More</button>}         
            <button className="top-btn" onClick={scrollToTop}>To Top</button>
            </div>
            
        </section>
    )
    
}

export default HomePage