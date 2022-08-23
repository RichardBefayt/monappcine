import Header from "../Header";
import LoginContainer from "../LoginContainer";

import './app-header.css';

const AppHeader = () => {
    
    return (
        <div className="app-header">
            <Header />
            <LoginContainer />
        </div>
    );
}

export default AppHeader;