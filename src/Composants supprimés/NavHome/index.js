import { Link } from "react-router-dom";

import NavMovies from '../NavMovies';
import './nav-home.css';

const NavHome = ({ movies }) => (
    <div className='nav-home'>
        <ul className='nav-home-link'>
            <Link
                to='/'
                className=''
            >
                Accueil
            </Link>
            <Link
                to='/boutique'
                className=''
            >
                Boutique
            </Link>
            <Link
                to='/contact'
                className=''
            >
                Contact
            </Link>
        </ul>
            <NavMovies movies={movies} />
    </div>
);

export default NavHome;