import SignIn from './SignIn';
import SignUp from './SignUp';

import './login.css';

const Login = () => (
    <div className='login'>
        <SignIn />
        <SignUp />
    </div>
);

export default Login;