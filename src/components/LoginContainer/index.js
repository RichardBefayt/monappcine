import { useSelector, useDispatch } from 'react-redux';
import { login, logout, setUserField } from '../../actions/user';

import LoginForm from '../LoginForm';

const LoginFormContainer = () => {
    const dispatch = useDispatch();

    const logged = useSelector((state) => state.users.logged);
    const email = useSelector((state) => state.users.email);
    const password = useSelector((state) => state.users.password);
    const pseudo = useSelector((state) => state.users.pseudo);

    const message = pseudo ? `Connecté en tant que ${pseudo}` : '';

    // On prépare une fonction qui va permettre de gérer les changement d'un champ
    const changeField = (value, name) => {
        // console.log(`il faut changer la valeur du champ ${name} avec : ${value}`);
        dispatch(setUserField(value, name));
    };

    // On prépare une fonction qui va permettre de gérer la soumission du formulaire
    const handleLogin = () => {
        console.log('il faut se logger');
        dispatch(login());
    };

    // On prépare une fonction qui va permettre de gérer la déconnexion
    const handleLogout = () => {
        console.log('il faut se déconnecter');
        dispatch(logout());
    };

    return (
        <LoginForm
            email={email}
            password={password}
            changeField={changeField}
            handleLogin={handleLogin}
            isLogged={logged}
            loggedMessage={message}
            handleLogout={handleLogout}
        />
    );
};
export default LoginFormContainer;
