import { useSelector, useDispatch } from "react-redux";

import "./login.css";

const Settings = () => {
    const dispatch = useDispatch();

    const email = useSelector((state) => state.email);
    const password = useSelector((state) => state.password);

    return (
        <div className="login">
            <form className="login-form">
                <input
                    className="input input-email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => dispatch({ type: "SET_EMAIL", value: event.target.value })}
                />
                
                <input
                    className="input input-password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => dispatch({ type: "SET_PASSWORD", value: event.target.value })}
                />
                
                <button className="login-submit" type="submit">
                    Se connecter
                </button>
            </form>
        </div>
    );
};

export default Settings;