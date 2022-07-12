import { combineReducers } from 'redux';

import productsReducer from './products';
import moviesReducer from './movies';
import usersReducer from './users';

// Ici on donne les "tranches" qui seront combinées pour former le reducer principal
const rootReducer = combineReducers({
    products: productsReducer, // On accède à cette tranche du state par state.recipes
    movies: moviesReducer, // On accède à cette tranche du state par state.movies
    users: usersReducer, // On accède à cette tranche du state par state.users
});

export default rootReducer;