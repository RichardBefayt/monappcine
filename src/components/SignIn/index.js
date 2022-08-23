import { useContext, useRef, useState } from "react";
import { UserContext } from "../../context/userContext.js";
import { useNavigate } from "react-router-dom";

import './sign-in.css';

const SignIn = () => {
    const { modalState, toggleModals, signIn } = useContext(UserContext);

    const navigate = useNavigate();

    const [validation, setValidation] = useState("");

    const inputs = useRef([]);

    const addInputs = (element) => {
        if (element && !inputs.current.includes(element)) {
            inputs.current.push(element);
        }
    }

    const formRef = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const cred = await signIn(
                inputs.current[0].value, 
                inputs.current[1].value
                )

            setValidation("");

            toggleModals("close");

            navigate("/prive/prive-accueil");

        } catch (error) {
            setValidation("Email ou mot de passe incorrect");
        }

    }

    const closeModal = () => {
        setValidation("");
        toggleModals("close");
    }

    return (
        <>
        {modalState.signInModal && (
        <div className='sign-up'>
            <div className="sign-up-container">
                <div className="sign-up-close">
                    <button onClick={closeModal}>X</button>
                </div>
            
                <div className="sign-up-title">
                    <h2>Connexion</h2>
                </div>

                <form
                    className='sign-up-form'
                    onSubmit={handleSubmit}
                    ref={formRef}
                >
                    <div className='sign-up-body'>
                        <div className="form-section">
                            <label htmlFor="signInEmail" className="form-label">Email</label>
                            <input 
                                className="form-control"
                                id="signInEmail"
                                ref={addInputs}
                                type="email"
                                name="email"
                                required
                            />
                        </div>

                        <div className="form-section">
                            <label htmlFor="signInPwd" className="form-label">Mot de passe</label>
                            <input 
                                className="form-control"
                                id="signInPwd"
                                ref={addInputs}
                                type="password"
                                name="pwd"
                                required
                            />
                        </div>
                        
                        <p className="form-validation">{validation}</p>

                    </div>
                    
                    <div className="sign-up-footer">
                        <button id="cancel-button" onClick={closeModal}>Annuler</button>
                        <button>Confirmer</button>
                    </div>
                </form>
            </div>
        </div>
        )}
        </>
    );
}

export default SignIn;