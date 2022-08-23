import { createContext, useState, useEffect } from "react";

import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";

import { auth } from "../firebase-config";


// Création du contexte.
export const UserContext = createContext();

// Création du composant d'ordre supérieur qui permet de faire passer la logique à notre application.
export function UserContextProvider(props) {

    // Partie modales
    const [ modalState, setModalState ] = useState({
        signUpModal: false,
        signInModal: false
    });

    const toggleModals = (modal) => {
        if(modal === "signIn") {
            setModalState({
                signUpModal: false,
                signInModal: true
            })
        }
        if(modal === "signUp") {
            setModalState({
                signUpModal: true,
                signInModal: false
            })
        }
        if(modal === "close") {
            setModalState({
                signUpModal: false,
                signInModal: false
            })
        }
    };

    return (
        // On retourne le Provider qui lui permettra d'envoyer les données à tout ce qu'il va entourer (enfants)
        <UserContext.Provider value={{modalState, toggleModals}}>
            {props.children}
        </UserContext.Provider>
    );
}