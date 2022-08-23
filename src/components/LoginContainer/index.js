import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config.js";

import SignUp from "../../components/SignUp";
import SignIn from "../../components/SignIn";

import './login-container.css';

const LoginContainer = () => {

    const { toggleModals } = useContext(UserContext);

    const logOut = async () => {
        try {
            await signOut(auth);
            navigate("/");

        } catch (error) {
            alert("Désolé, nous ne pouvons vous déconnecter. Merci de vérifier votre connexion internet")
        }
    }

    const navigate = useNavigate();

    return (
        <div className="login-container">
            <button
                className="login-container-button"
                onClick={() => toggleModals("signUp")}
            >
                Inscription
            </button>
            
            <button
                className="login-container-button"
                onClick={() => toggleModals("signIn")}
            >
                Connexion
            </button>
            
            <button
                className="login-container-button"
                onClick={logOut}
            >
                Déconnexion
            </button>

            <SignUp />
            <SignIn />
        </div>
    );
}

export default LoginContainer;