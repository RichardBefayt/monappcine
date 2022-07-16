import axios from "axios";

import { FETCH_MOVIES, saveMovies, SET_CURRENT_SEARCH } from '../actions/movies';
// import { LOGIN } from "../actions/users";

const API_URL = "https://api.themoviedb.org/3"

const apiMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            axios
            .get(
                `${API_URL}/discover/movie?api_key=${process.env.REACT_APP_THEMOVIEDB_KEY}&language=fr-FR`
            )
            .then(
                (response) => store.dispatch(saveMovies(response.data.results))
            );
            
            next(action);
            break;

        case SET_CURRENT_SEARCH:
            axios
            .get(
                `${API_URL}/search/company?api_key=${process.env.REACT_APP_THEMOVIEDB_KEY}`
            )
            .then(
                (response) => store.dispatch(saveMovies(response.data.results))
            );

            next(action);
            break;
        
        // case LOGIN:
        //     const state = store.getState();
        //     const { user } = state.user;
        //     const { email, password } = user;

        //     axios.post(`${API_URL}/authentication/token/validate_with_login?api_key=${process.env.REACT_APP_THEMOVIEDB_KEY}`)
        
        default:
            next(action);
    }
};

export default apiMiddleware;