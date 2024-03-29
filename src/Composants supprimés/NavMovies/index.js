import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import './nav-movies.css';

const NavMovies = ({ movies, setMovies }) => {
    const API_URL = "https://api.themoviedb.org/3";
    const API_SEARCH = `${API_URL}/search/movie?api_key=${process.env.REACT_APP_THEMOVIEDB_KEY}&language=fr-FR&page=1&include_adult=false&query`;

    const [ query, setQuery ] = useState("");

    const searchMovie = async (event) => {
        event.preventDefault();
        console.log("Searching");
        try {
            const url = `${API_URL}/search/movie?api_key=${process.env.REACT_APP_THEMOVIEDB_KEY}&language=fr-FR&page=1&include_adult=false&query=${query}`;
            const response = await fetch(url);
            const data = JSON.parse(response.json);
            console.log("data :", data);
            setMovies(data.results);
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (event) => {
        setQuery(event.target.value);
    }

    const inputRef = useRef();
    useEffect(
        () => {
            inputRef.current.focus();
        },
        [],
    );
    return (
        <div className='nav-movies'>
            <ul className='nav-movies-link'>
                <Link to='/affiche'>A l'affiche</Link>
                <Link to='/prochainement'>Prochainement</Link>

                <div className='search-bar'>
                    <form onSubmit={searchMovie}>
                        <input
                            type="text"
                            id="search-movies"
                            ref={inputRef}
                            placeholder="Nom du film recherché"
                            value={query}
                            onChange={handleChange}
                        />
                        <button 
                            type="submit"
                            className="search-button"
                        >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>

            </ul>
        </div>
    );
};

export default NavMovies;