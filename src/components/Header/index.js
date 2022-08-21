import { Link } from "react-router-dom";

import LoginContainer from "../LoginContainer";

import './header.css';

import logo from "../../assets/img/logo.png";

const Header = () => (
    <header className='header'>
        <Link to='/' className="header-link">
            <img className="header-img" src={logo} alt="logo" />
            <h1 className='header-title'>Mon Appli Ciné</h1>
        </Link>

        <LoginContainer />
    </header>
);

export default Header;