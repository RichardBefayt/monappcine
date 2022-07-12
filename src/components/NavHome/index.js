import NavMovies from '../NavMovies';
import './navHome.css';

const NavHome = () => (
    <div className='navHome'>
        <ul className='navHome-link'>
            <li>Accueil</li>
            <li>Boutique</li>
            <li>Contact</li>
        </ul>
            <NavMovies />
    </div>
);

export default NavHome;