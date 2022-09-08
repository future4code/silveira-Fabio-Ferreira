import React from "react"
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../../routes/Coordinator";

export const Header = ({nameButton, setNameButton}) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')


    const logout = () => {
        localStorage.removeItem('token')
    }

    const changeButton = () => {
        if (token){
            logout()
            goToLogin(navigate)
            setNameButton('login')
        }else{
            goToLogin(navigate)
        }
    }
    return(
        <div>
            <h1>logo</h1>
            <button onClick={changeButton}>{nameButton}</button>
        </div>
    )
}