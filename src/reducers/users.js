// import projectsData from '../data/projectsData';
import usersData from "../data/users";

export const initialState = {
    usersData,
};

const usersReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default usersReducer;