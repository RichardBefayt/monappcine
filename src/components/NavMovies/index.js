import SearchBar from '../SearchBar';

import './navMovies.css';

const NavMovies = () => (
    <div className='navMovies'>
        <ul className='navMovies-link'>
            <li>A l'affiche</li>
            <li>Prochainement</li>
            <SearchBar />
        </ul>
    </div>
);

export default NavMovies;