import axios from "axios";

import { FETCH_MOVIES, saveMovies } from '../actions/movies';

const apiMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            axios
            .get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_THEMOVIEDB_KEY}&language=fr-FR`
            )
            .then((response) => store.dispatch(saveMovies(response.data.results)));
            
            next(action);
            break;
        
        default:
            next(action);
    }
};

export default apiMiddleware;