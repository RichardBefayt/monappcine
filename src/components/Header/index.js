import Login from '../Login';
import './header.css';

const Header = () => (
    <header className='header'>
        <h1 className='header-title'>Mon Appli Ciné</h1>
        <Login />
    </header>
);

export default Header;