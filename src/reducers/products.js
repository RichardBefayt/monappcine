// import projectsData from '../data/projectsData';
import productsData from "../data/products";

export const initialState = {
    productsData,
};

const productsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default productsReducer;