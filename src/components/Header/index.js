import { Link } from "react-router-dom";

import './header.css';

import logo from "../../assets/img/logo.png";

const Header = () => {
    
    return (
        <header className='header'>
            <Link to='/' className="header-link">
                <img className="header-img" src={logo} alt="logo" />
                <h1 className='header-title'>Mon Appli Ciné</h1>
            </Link>

            
        </header>
    );
}

export default Header;