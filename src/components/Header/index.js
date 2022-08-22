import { useState } from 'react';

import { Link } from "react-router-dom";

import SignUp from "../../components/SignUp";
import SignIn from "../../components/SignIn";

import './header.css';

import logo from "../../assets/img/logo.png";

const Header = () => {
    const [openSignUpModal, setOpenSignUpModal] = useState(false);
    const [openSignInModal, setOpenSignInModal] = useState(false);
    
    return (
        <header className='header'>
            <Link to='/' className="header-link">
                <img className="header-img" src={logo} alt="logo" />
                <h1 className='header-title'>Mon Appli Ciné</h1>
            </Link>

            <button className="login-container-button" onClick={() => {setOpenSignUpModal(true);}}>Inscription</button>
            <button className="login-container-button" onClick={() => {setOpenSignInModal(true);}}>Connexion</button>
            {openSignUpModal && <SignUp closeSignUpModal={setOpenSignUpModal} />}
            {openSignInModal && <SignIn closeSignInModal={setOpenSignInModal} />}
        </header>
    );
}

export default Header;