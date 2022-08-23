import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { UserContextProvider } from "./context/userContext.js";

import App from './components/App';
import store from '../src/store/index';

import "./styles/reset.css";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <UserContextProvider>
                {/* App correspond donc à {props.children} dans le fichier userContext */}
                <App />
            </UserContextProvider>
        </Provider>
    </BrowserRouter>
);

// Penser à installer sur le client les dépendances front (react-router-dom...)