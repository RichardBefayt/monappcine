import LoginContainer from '../LoginContainer';
import './header.css';

const Header = () => (
    <header className='header'>
        <h1 className='header-title'>Mon Appli Ciné</h1>
        <LoginContainer />
    </header>
);

export default Header;