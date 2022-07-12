

import './movieCard.css';

const MovieCard = ({ movie }) => {
    const imgCode = "https://image.tmdb.org/t/p/w500";

    return (
        <div className='movieCard'>
            <img src={movie.poster_path ? imgCode+movie.poster_path : "./img/poster.jpg"} alt={movie.title} />
            <h2>{movie.title}</h2>
            {/* <p className='movieCard-list'>{genre} - {duration}</p>
            <p>{description}</p> */}
            <div className='movieCard-buttons'>
                <button className='btn reservation'>Réserver</button>
                <button className='btn moreInfo'>Plus d'infos</button>
            </div>
        </div>
    );
}

export default MovieCard;