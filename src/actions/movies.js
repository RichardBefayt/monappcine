export const FETCH_MOVIES = 'FETCH_MOVIES';
export const fetchMovies = () => ({ type: FETCH_MOVIES });

export const SAVE_MOVIES = "SAVE_MOVIES";
export const saveMovies = (movies) => ({
    type: SAVE_MOVIES,
    movies,
});

export const SET_CURRENT_SEARCH = "SET_CURRENT_SEARCH";
export const setCurrentSearch = (currentSearch) => ({
    type: SET_CURRENT_SEARCH,
    value: currentSearch,
});