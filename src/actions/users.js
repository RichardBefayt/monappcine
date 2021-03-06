export const SET_USER_FIELD = 'SET_USER_FIELD';
export const setUserField = (value, name) => (
    {
        type: SET_USER_FIELD,
        value,
        name,
    }
);

export const LOGIN = 'LOGIN';
export const login = () => (
    {
        type: LOGIN,
    }
);

export const CONNECT_USER = 'CONNECT_USER';
export const connectUser = (data) => (
    {
        type: CONNECT_USER,
        data,
    }
);

export const LOGOUT = 'LOGOUT';
export const logout = () => (
    {
        type: LOGOUT,
    }
);
