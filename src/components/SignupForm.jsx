import { useState } from "react";

function SignupForm(){
    const [formError, setFormError] = useState({
        lastName: "",
        firstName: "",
        email: "",
        login: "",
        password: ""
    })

    const [formState, setFormState] = useState({
        lastName: "",
        firstName: "",
        email: "",
        login: "",
        password: ""
    })

    const regName = new RegExp("([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+")
    const regEmail = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
    const regLogin = new RegExp("[a-zA-Z0-9-_]")
    const regPassword = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")

    function handleChange(e) {
        switch(e.target.id){
            case "lastName":
                const lastName = e.target.value
                if (!regName.test(lastName)){
                    setFormError({
                        lastName: "Veuillez saisir un nom correct",
                        firstName: formError.firstName,
                        email: formError.email,
                        login: formError.login,
                        password: formError.password
                    })
                } else {
                    setFormError({
                        lastName: "",
                        firstName: formError.firstName,
                        email: formError.email,
                        login: formError.login,
                        password: formError.password
                    })
                }
                break
            case "firstName":
                const firstName = e.target.value
                if (!regName.test(firstName)){
                    setFormError({
                        lastName: formError.lastName,
                        firstName: "Veuillez saisir un prénom correct",
                        email: formError.email,
                        login: formError.login,
                        password: formError.password
                    })
                } else {
                    setFormError({
                        lastName: formError.lastName,
                        firstName: "",
                        email: formError.email,
                        login: formError.login,
                        password: formError.password
                    })
                }
                break
            case "email":
                const email = e.target.value
                if (!regEmail.test(email)){
                    setFormError({
                        lastName: formError.lastName,
                        firstName: formError.firstName,
                        email: "Veuille saisir un email correct",
                        login: formError.login,
                        password: formError.password
                    })
                } else {
                    setFormError({
                        lastName: formError.lastName,
                        firstName: formError.firstName,
                        email: "",
                        login: formError.login,
                        password: formError.password
                    })
                }
                break
            case "login":
                const login = e.target.value
                if (!regLogin.test(login)){
                    setFormError({
                        lastName: formError.lastName,
                        firstName: formError.firstName,
                        email: formError.email,
                        login: "Veuillez saisir un login correct",
                        password: formError.password
                    })
                } else {
                    setFormError({
                        lastName: formError.lastName,
                        firstName: formError.firstName,
                        email: formError.email,
                        login: "",
                        password: formError.password
                    })
                }
                break
            case "password":
                const password = e.target.value
                if (!regPassword.test(password)){
                    setFormError({
                        lastName: formError.lastName,
                        firstName: formError.firstName,
                        email: formError.email,
                        login: formError.login,
                        password: "Votre mot de passe doit contenir 8 caractères minimum avec au moins un chiffre et une majuscule"
                    })
                } else {
                    setFormError({
                        lastName: formError.lastName,
                        firstName: formError.firstName,
                        email: formError.email,
                        login: formError.login,
                        password: ""
                    })
                }
                break 
            //no default
        }
    }

    function handleClick(){
        //envoie du state au serveur
    }

    return(
        <form>
            <h3>Inscription</h3>
            <div className="field">
                <label htmlFor="last-name">nom</label>
                <input type="text" name="last-name" id="last-name" onChange={(e) => handleChange(e)}></input>
                <span>{formError.lastName}</span>
            </div>
            
            <div>
                <label htmlFor="first-name">prénom</label>
                <input type="text" name="first-name" id="first-name" onChange={(e) => handleChange(e)}></input>
                <span>{formError.firstName}</span>
            </div>

            <div>
                <label htmlFor="email">email</label>
                <input type="email" name="email" id="email" onChange={(e) => handleChange(e)}></input>
                <span>{formError.email}</span>
            </div>

            <div>
                <label htmlFor="login">pseudo</label>
                <input type="text" name="login" id="login" onChange={(e) => handleChange(e)}></input>
                <span>{formError.login}</span>
            </div>

        <div>
            <label htmlFor="password">mot de passe</label>
            <input type="password" name="password" id="password" onChange={(e) => handleChange(e)}></input>
            <span>{formError.password}</span>
        </div>
        
        <button onClick={() => handleClick() }>S'inscrire</button>

        </form>
    )
}

export default SignupForm;