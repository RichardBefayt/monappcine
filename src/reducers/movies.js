import { SAVE_MOVIES, SET_CURRENT_SEARCH } from "../actions/movies.js";

// import moviesData from "../data/movies";

export const initialState = {
    movies: [],
    currentSearch: "",
};

const moviesReducer = (state = initialState, action = {}) => {
    switch (action.type) {   
        case SAVE_MOVIES:
            return {
                ...state,
                movies: action.movies,
            }

        case SET_CURRENT_SEARCH:
            return {
                ...state,
                currentSearch: action.value,
            }


        default:
            return state;
    }
};

export default moviesReducer;