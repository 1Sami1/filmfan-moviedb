import {useNavigate} from 'react-router-dom';
import {useState} from 'react';


const SearchBar = (movie) => {

    const [searchInput, setSearchInput] = useState('');

    const navigate = useNavigate();

    const searchItems = (searchValue) => {
        let uriEncodedSearchValue = encodeURIComponent(searchValue);
        setSearchInput(uriEncodedSearchValue);
    }

    function submitSearch(e){
        e.preventDefault();
        if(searchInput === ''){
            return;
        }
        e.target.elements.search.value = '';
        navigate(`/search?q=${searchInput}`, { replace: true })
    }

    return(
            <div className='search-wrapper'>
                <form action="#" autoComplete='off' onSubmit={submitSearch}>
                    <input className='search-bar' type="text" placeholder="Search for a movie ..." id="search" name="search" onChange={(e) => searchItems(e.target.value)} />
                </form>
            </div>
    )
}

export default SearchBar;