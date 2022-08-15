/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


import NavMovies from '../../components/NavMovies';
import MovieCard from './MoviesCard';

import './home.css';

const Home = () => {
    const API_BASE_URL = "https://api.themoviedb.org/3";

    const API_URL = `${API_BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_THEMOVIEDB_KEY}&language=fr-FR`;

    const [ movies, setMovies ] = useState([]);

    useEffect(
        () => {
            fetch(API_URL)
            .then((response) => response.json())
            .then(data => {
                console.log("data :", data);
                setMovies(data.results);
            })
        }, 
        [],
    );

    return (
        <div className='home'>
            <div className='nav-home'>
                <ul className='nav-home-link'>
                    <Link to='/home'>Accueil</Link>
                    <Link to='/boutique'>Boutique</Link>
                    <Link to='/contact'>Contact</Link>
                </ul>
            </div>

            <NavMovies
                movies={movies}
                setMovies={setMovies}
            />
            
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