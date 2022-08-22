

import './sign-up.css';

const SignUp = ({ closeSignUpModal }) => {

    
    
    return (
        <div className='sign-up'>
            <div className="sign-up-container">
                <div className="sign-up-close">
                    <button onClick={() => closeSignUpModal(false)}>X</button>
                </div>
            </div>

            <div className="sign-up-title">
                <h2>Inscription</h2>
            </div>

            <div className='sign-up-body'>
                <form className='sign-up-form'>
                    <div className="form-section">
                        <label htmlFor="signUpEmail" className="form-label">Adresse Mail</label>
                        <input 
                            className="form-control"
                            id="signUpEmail"
                            // ref={addInputs}
                            type="email"
                            name="email"
                            required
                        />
                    </div>

                    <div className="form-section">
                        <label htmlFor="signUpPwd" className="form-label">Mot de passe</label>
                        <input 
                            className="form-control"
                            id="signUpPwd"
                            // ref={addInputs}
                            type="password"
                            name="pwd"
                            required
                        />
                    </div>

                    <div className="form-section">
                        <label htmlFor="repeatPwd" className="form-label">Repeat Password</label>
                        <input
                            className="form-control"
                            id="repeatPwd"
                            // ref={addInputs}
                            type="password"
                            name="pwd"
                            required
                        />
                        {/* <p className="text-danger mt-1">{validation}</p> */}
                    </div>
                </form>
            </div>

            <div className="sign-up-footer">
            <button onClick={() => closeSignUpModal(false)}>Annuler</button>
            <button>Confirmer</button>
            </div>



        </div>
    );
}

export default SignUp;