import { useEffect, useRef, useState } from "react";

import './searchBar.css';

const SearchBar = ({ movies }) => {

    const API_URL = "https://api.themoviedb.org/3";
    const API_SEARCH = `${API_URL}/search/movie?api_key=${process.env.REACT_APP_THEMOVIEDB_KEY}&language=fr-FR&page=1&include_adult=false&query`

    const [ query, setQuery ] = useState("");

    const searchMovie = async (event) => {
        event.preventDefault();
        console.log("Searching");
        try {
            const url = `${API_URL}/search/movie?api_key=${process.env.REACT_APP_THEMOVIEDB_KEY}&language=fr-FR&page=1&include_adult=false&query=${query}`;

            const response = await fetch(url);
            const data = JSON.parse(response.json);
            console.log("data :", data);
            // setMovies
        } catch (error) {
            
        }
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
            <form onSubmit={searchMovie}>
                <input
                    type="text"
                    id="searchMovies"
                    ref={inputRef}
                    placeholder="Nom du film recherché"
                    value=""
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