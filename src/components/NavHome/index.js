import { Link } from "react-router-dom";

import NavMovies from '../NavMovies';
import './navHome.css';

const NavHome = ({ movies }) => (
    <div className='navHome'>
        <ul className='navHome-link'>
            <Link to='/home'>Accueil</Link>
            <Link to='/boutique'>Boutique</Link>
            <Link to='/contact'>Contact</Link>
        </ul>
            <NavMovies movies={movies} />
    </div>
);

export default NavHome;