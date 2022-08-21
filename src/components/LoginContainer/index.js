import { Link } from "react-router-dom";

import './login-container.css';

const LoginContainer = () => (
    <div className='login-container'>
        <Link to='/inscription' className="login-container-link">
            <button className="login-container-button">Inscription</button>
        </Link>
        
        <Link to='/connexion' className="login-container-link">
            <button className="login-container-button">Connexion</button>
        </Link>
    </div>
);

export default LoginContainer;