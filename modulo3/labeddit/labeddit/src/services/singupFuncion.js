import axios from "axios"
import {BASE_URL} from '../constants/urls'
import { goTofeed } from "../routes/Coordinator"

export const singupFunction = (body, navigate) => {
    axios.post (`${BASE_URL}users/signup`, body)
    .then((res)=>{
        console.log('deu certo:', res.data)
        localStorage.setItem('token', res.data.token)
        goTofeed(navigate)
    })
    .catch((err)=>{
        alert('Algo deu errado, procure saber!')
    })
    
}