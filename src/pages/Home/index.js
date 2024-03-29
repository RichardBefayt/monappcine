/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

import MovieCard from './MoviesCard';

import './home.css';

const Home = () => {
    const { currentUser } = useContext(UserContext);
    const API_BASE_URL = "https://api.themoviedb.org/3";

    const API_URL = `${API_BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_THEMOVIEDB_KEY}&language=fr-FR`;

    const [ movies, setMovies ] = useState([]);
    const [ query, setQuery ] = useState("");

    const searchMovie = async (event) => {
        event.preventDefault();
        console.log("Searching");
        try {
            const url = `${API_BASE_URL}/search/movie?api_key=${process.env.REACT_APP_THEMOVIEDB_KEY}&language=fr-FR&page=1&include_adult=false&query=${query}`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setMovies(data.results);
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (event) => {
        setQuery(event.target.value);
    }

    
    useEffect(
        () => {
            fetch(API_URL)
            .then((response) => response.json())
            .then(data => {
                console.log("data useEffect :", data);
                setMovies(data.results);
            })
        }, 
        [],
    );

    return (
        <div className='home'>
            <div className="home-welcome">
                <h1 className="home-welcome">
                    {currentUser ? "Bienvenue à toi !" : "Bienvenue ! Inscrivez-vous ou Connectez-vous !"}
                </h1>
            </div>
            <div className='nav-home'>
                <ul className='nav-home-container'>
                    <Link to='/' className="nav-home-link">
                        <i className="fa-solid fa-film"></i>
                        <p className="nav-home-text">Accueil</p>
                    </Link>
                    
                    <Link to='/boutique' className="nav-home-link">
                        <i className="fa-solid fa-shop"></i>
                        <p className="nav-home-text">Boutique</p>
                    </Link>
                    
                    <Link to='/contact' className="nav-home-link">
                        <i className="fa-solid fa-address-card"></i>
                        <p className="nav-home-text">Contact</p>
                    </Link>
                </ul>
            </div>

            <div className='nav-movies'>
                <ul className='nav-movies-link'>
                    <Link to='/affiche'>A l'affiche</Link>
                    <Link to='/prochainement'>Prochainement</Link>

                    <div className='search-bar'>
                        <form onSubmit={searchMovie}>
                            <input
                                type="text"
                                id="search-movies"
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
            
            <div className='movies-card-container'>
                {
                    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                }
            </div>
        </div>
    );
}

export default Home;

/** 2 filtres :
 * - A l'affiche
 * - Prochainement
 * 
 * Remarque : les 2 donnent accès à MovieCard car quelque soit la date de sortie, la composition de MovieCard reste la même.
**/