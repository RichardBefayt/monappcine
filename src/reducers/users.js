import { CONNECT_USER, LOGOUT, SET_USER_FIELD } from "../actions/users";

export const initialState = {
    // Défini si l'utilisateur est loggé ou pas
    logged: false,
    
    // Email de l'utilisateur
    email: '',
    
    // Password de l'utilisateur
    password: '',
    
    // Pseudo de l'utilisateur
    pseudo: null,
    
    // Jwt de l'utilisateur
    token: null,
};

const usersReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_USER_FIELD:
            return {
                ...state,
                [action.name]: action.value,
            };

        case CONNECT_USER:
            return {
                ...state,
                pseudo: action.data.pseudo,
                token: action.data.token,
                logged: action.data.logged,
                email: '',
                password: '',
            };

        case LOGOUT:
            return {
                ...state,
                pseudo: null,
                logged: false,
                token: null,
            };

        default:
            return state;
    }
};

export default usersReducer;