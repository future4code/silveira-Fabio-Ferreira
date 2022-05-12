import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { goToCadastro } from '../../routes/Coordinator';
import { loginFunction } from '../../services/loginFunction';

export const LoginPage = () => {
    const [form, handleInputChange] = useForm({email:'', password:''})
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault()
        loginFunction(form, navigate)
    }

    return(
        <div>
            <h1>Login Page</h1>
            <form onSubmit={onSubmit}>
                <input
                 name='email'
                 value={form.email}
                 onChange={handleInputChange}
                 placeholder='email'/>
                <input
                 type='password'
                 name='password'
                 value={form.password}
                 onChange={handleInputChange}
                  placeholder='Senha'/>
                <button type='submit'>Login</button>
                <button onClick={() => goToCadastro(navigate)}>Cadastrar-se</button>
            </form>
        </div>
    )
}