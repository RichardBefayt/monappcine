import { useContext, useRef, useState } from "react";
import { UserContext } from "../../context/userContext.js";
// import { useNavigate } from "react-router-dom";

import './sign-up.css';

const SignUp = () => {
    const { modalState, toggleModals } = useContext(UserContext);
    // console.log("modalState:", modalState, 'toggleModals:', toggleModals);

    const [validation, setValidation] = useState("");

    const inputs = useRef([]);

    const addInputs = (element) => {
        // Si l'élément existe et qu'il n'est pas déjà dans mon tableau
        if (element && !inputs.current.includes(element)) {
            // Alors je l'ajoute
            inputs.current.push(element);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log("inputs :", inputs);

        // Validation côté client
        // Longueur de la valeur de nos inputs
        // 1. Mots de passe
        if ((inputs.current[2].value.length || inputs.current[3].value.length) < 6) {
            setValidation("6 caractères minimum");
            return;

        } else if (inputs.current[2].value !== inputs.current[3].value) {
            setValidation("Les 2 mots de passe ne correspondent pas");
            return;
        }

    }

    return (
        <>
        {modalState.signUpModal && (
        <div className='sign-up'>
            <div className="sign-up-container">
                <div className="sign-up-close">
                    <button onClick={() => toggleModals("close")}>X</button>
                </div>
            
                <div className="sign-up-title">
                    <h2>Inscription</h2>
                </div>

                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <div className='sign-up-body'>
                        <div className="form-section">
                            <label htmlFor="signUpFirstName" className="form-label">Prénom ou Pseudo</label>
                            <input 
                                className="form-control"
                                id="signUpFirstName"
                                ref={addInputs}
                                type="text"
                                name="name"
                                required
                            />
                        </div>
                    
                        <div className="form-section">
                            <label htmlFor="signUpEmail" className="form-label">Email</label>
                            <input 
                                className="form-control"
                                id="signUpEmail"
                                ref={addInputs}
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
                                ref={addInputs}
                                type="password"
                                name="pwd"
                                required
                            />
                        </div>

                        <div className="form-section">
                            <label htmlFor="repeatPwd" className="form-label">Confirmer le mot de passe</label>
                            <input
                                className="form-control"
                                id="repeatPwd"
                                ref={addInputs}
                                type="password"
                                name="pwd"
                                required
                            />
                        </div>
                        
                        <p className="form-validation">{validation}</p>

                    </div>
                    
                    <div className="sign-up-footer">
                        <button id="cancel-button" onClick={() => toggleModals("close")}>Annuler</button>
                        <button>Confirmer</button>
                    </div>
                </form>
            </div>
        </div>
        )}
        </>
    );
}

export default SignUp;