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

    const signUp = (email, pwd) => {
        createUserWithEmailAndPassword(auth, email, pwd);
    }
    
    const signIn = (email, pwd) => {
        signInWithEmailAndPassword(auth, email, pwd);
    }

    // Inscription
    const [currentUser, setCurrentUser] = useState(); // Utilisateur qui se connecte
    const [loadingData, setLoadingData] = useState(true); // Loading le temps de recevoir une réponse de Firebase

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser);
            setLoadingData(false);
        })
        return unsubscribe;
    }, []);

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
        <UserContext.Provider value={{modalState, toggleModals, signUp, currentUser, signIn}}>
            {!loadingData && props.children}
        </UserContext.Provider>
    );
}