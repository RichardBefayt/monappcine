import { useContext } from 'react';
import { UserContext } from "../../context/userContext";
import { Outlet, useLocation, Navigate } from "react-router-dom";

import './private.css';

const Private = () => {
    const {currentUser} = useContext(UserContext);
    console.log("PRIVATE", currentUser);

    // Si currentUser n'est pas sur true
    if(!currentUser) {
        // Alors on retourne un composant qui permet de naviguer quelque part. S'il n'y a pas d'utilisateur, je te renvoie à l'accueil
        return <Navigate to="/" />
    }

    return (
        <div className='private'>
            <Outlet />
        </div>
    );
}

export default Private;