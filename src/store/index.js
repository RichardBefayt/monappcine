import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers/';

import apiMiddleware from '../middlewares/api';
const middlewares = [apiMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(...middlewares),);

const store = createStore(reducer, enhancers);

export default store;