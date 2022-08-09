import { CONNECT_USER, LOGOUT, SET_USER_FIELD } from "../actions/users";

export const initialState = {
    logged: false,
    email: '',
    password: '',
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
                logged: action.data.logged,
                email: '',
                password: '',
            };

        case LOGOUT:
            return {
                ...state,
                logged: false,
            };

        default:
            return state;
    }
};

export default usersReducer;