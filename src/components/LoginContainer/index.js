import { useState } from 'react';

import SignUp from "../../components/SignUp";
import SignIn from "../../components/SignIn";

import './login-container.css';

const LoginContainer = () => {
    const [openSignUpModal, setOpenSignUpModal] = useState(false);
    const [openSignInModal, setOpenSignInModal] = useState(false);
    
    return (
        <div className='login-container'>
            <button
                className="login-container-button"
                onClick={() => {setOpenSignUpModal(true);}}
            >
                Inscription
            </button>
            
            <button
                className="login-container-button"
                onClick={() => {setOpenSignInModal(true);}}
            >
                Connexion
            </button>

            {openSignUpModal && <SignUp closeSignUpModal={setOpenSignUpModal} />}
            {openSignInModal && <SignIn closeSignInModal={setOpenSignInModal} />}
        </div>
    );
}

export default LoginContainer;