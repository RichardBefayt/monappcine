// J'ai finalement opté pour plus simple en passant directement par useState pour l'affichage et la recherche de films

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

export const SAVE_SEARCH = 'SAVE_SEARCH';
export const saveSearch = (search) => (
  {
    type: SAVE_SEARCH,
    search,
  }
);