import React from 'react'
import { Button } from './Button'
import './Form.css'

function Form() {
    return (
        <>
        <div className="form__container">
            <div className="form-content-left">
                <img src="images/online-payments.svg" className="form-img" alt="form-img"/>
            </div>
            <div className="form-content-right">
                <form className="form">
                    <h1>Consulta si eres apto!</h1>
                    <div className="form-inputs">
                        <label htmlFor="username" className="form-label">
                            Usuario:   
                        </label>
                        <input id="username" type="text" name="username" className="form-input" placeholder="Ingrese su Usuario"/>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="email" className="form-label">
                            Correo Electrónico:
                        </label>
                        <input id="email" type="email" name="email" className="form-input" placeholder="Ingrese su Correo Electrónico"/>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="password" className="form-label">
                            Contraseña:
                        </label>
                        <input id="password" type="password" name="password" className="form-input" placeholder="Ingrese su Contraseña"/>
                    </div>
                    <Button buttonSize="btn--wide" buttonColor="bbva" type="submit">Enviar</Button>
                    
                </form>
            </div>
        </div>
        </>
    )
}

export default Form
