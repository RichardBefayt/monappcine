/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchMovies } from '../../actions/movies';

import NavHome from '../../components/NavHome';
import MovieCard from './MoviesCard';

import './home.css';

const Home = () => {
    // const movies = useSelector((state) => state.movies.moviesData);
    
    const movies = useSelector((state) => state.movies.movies);
    // const [search, setSearch] = useState("");

    const dispatch = useDispatch();
    useEffect(
        () => {
            dispatch(fetchMovies());
        }, 
        [],
    );

    return (
        <div className='home'>
            <NavHome />
            <div className='moviesCard-container'>
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