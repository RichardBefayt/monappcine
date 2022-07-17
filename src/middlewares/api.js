import axios from "axios";

import { FETCH_MOVIES, saveMovies, saveSearch, SET_CURRENT_SEARCH } from '../actions/movies';
import { LOGIN, connectUser } from "../actions/users";

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
                `${API_URL}/search/movie?api_key=${process.env.REACT_APP_THEMOVIEDB_KEY}&language=fr-FR&page=1&include_adult=false`
            )
            .then(
                (response) => store.dispatch(saveSearch(response.data.results))
            );

            next(action);
            break;
        
        case LOGIN:
            const state = store.getState();
            const { user } = state.users;
            const { email, password } = user;

            axios.post(
                `${API_URL}/authentication/token/validate_with_login?api_key=${process.env.REACT_APP_THEMOVIEDB_KEY}`,
                {
                    email,
                   password,
                },
            )
            .then((response) => {
                console.log("Il faut enregistrer les infos", response.data);
                store.dispatch(connectUser(response.data));
            })
            .catch((error) => {
                console.log("erreur", error);
            })

            next(action);
            break;
        
        default:
            next(action);
    }
};

export default apiMiddleware;