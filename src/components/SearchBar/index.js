import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentSearch } from "../../actions/movies";

import './searchBar.css';

const SearchBar = () => {

    const currentSearch = useSelector((state) => state.movies.currentSearch);

    const dispatch = useDispatch();

    function handleChange(event) {
        dispatch(setCurrentSearch(event.target.value));
    }

    const inputRef = useRef();
    useEffect(
        () => {
            inputRef.current.focus();
        },
        [],
    );

    return (
        <div className='searchBar'>
            <form>
                <input
                    type="text"
                    id="searchMovies"
                    ref={inputRef}
                    placeholder="Nom du film recherché"
                    onChange={handleChange}
                    value={currentSearch}
                />
                <button 
                    type="submit"
                    className="searchButton"
                >
                        <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
    );
}
export default SearchBar;