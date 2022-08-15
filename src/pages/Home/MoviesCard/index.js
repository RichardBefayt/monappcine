import { Link } from "react-router-dom";

import './movieCard.css';

const MovieCard = ({ movie }) => {
    const imgCode = "https://image.tmdb.org/t/p/w500";

    return (
        <div className='movie-card'>
            <img src={movie.poster_path ? imgCode+movie.poster_path : "./img/poster.jpg"} alt={movie.title} />
            <h2>{movie.title}</h2>
            {/* A mettre dans détails du film (plus d'infos)
            <p className='movie-card-list'>{movie.genre} - {movie.duration}</p>
            <p>{movie.description}</p> */}
            <div className='movie-card-buttons'>
                <Link to="/reserver">
                    <button
                        className='btn more-infos'
                    >
                        Plus d'infos
                    </button>
                </Link>

                <Link to="/details-film">
                    <button
                        className='btn reservation'
                    >
                        Réserver
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default MovieCard;