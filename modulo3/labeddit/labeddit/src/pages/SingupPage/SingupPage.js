import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { goToLogin } from '../../routes/Coordinator';
import { singupFunction } from '../../services/singupFuncion';
import { Header } from '../Header/Header';

export const SingupPage = ({nameButton, setNameButton}) => {
    const [form, handleInputChange] = useForm({username:'', email:'', password:''})
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault()
        singupFunction(form, navigate)
    }
    return(
        <div>
            <Header nameButton={nameButton} setNameButton={setNameButton} />
            <h1>Singup Page</h1>
                <button onClick={goToLogin}>Entrar</button>
            <form onSubmit={onSubmit}>               
                    <input
                    name='username'
                    value={form.username}
                    onChange={handleInputChange}
                    placeholder='nome' />

                    <input
                    name='email'
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder='email' />
                
                    <input 
                    name='password'
                    value={form.password}
                    onChange={handleInputChange}
                    placeholder='senha' />               
                <button type='submit'>cadastrar</button>
            </form>
        </div>
    )
}