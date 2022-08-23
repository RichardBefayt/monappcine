import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import SignUp from "../../components/SignUp";
import SignIn from "../../components/SignIn";

import './login-container.css';

const LoginContainer = () => {

    const { toggleModals } = useContext(UserContext);
    
    return (
        <div className='login-container'>
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

            <SignUp />
            <SignIn />
        </div>
    );
}

export default LoginContainer;