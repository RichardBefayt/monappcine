import PropTypes from 'prop-types';

import Field from './Field';

import './login.css';

const Login = ({
    email,
    password,
    changeField,
    handleLogin,
    handleLogout,
    isLogged,
    loggedMessage,
}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        handleLogin();
    };

    return (
        <div className="login">
            {isLogged && (
                <div className="login-logged">
                    <p className="login-message">
                        {loggedMessage}
                    </p>
                    <button
                        type="button"
                        className="login-button"
                        onClick={handleLogout}
                    >
                        Déconnexion
                    </button>
                </div>
            )}

            {!isLogged && (
                <form autoComplete="off" className="login-element" onSubmit={handleSubmit}>
                    <Field
                        name="email"
                        placeholder="Adresse Email"
                        onChange={changeField}
                        value={email}
                    />
                    <Field
                        name="password"
                        type="password"
                        placeholder="Mot de passe"
                        onChange={changeField}
                        value={password}
                    />
                    <button
                        type="submit"
                        className="login-button"
                    >
                        OK
                    </button>
                </form>
            )}
        </div>
    );
};

Login.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    changeField: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired,
    isLogged: PropTypes.bool,
    loggedMessage: PropTypes.string,
};

Login.defaultProps = {
    isLogged: false,
    loggedMessage: 'Connecté',
};

export default Login;
