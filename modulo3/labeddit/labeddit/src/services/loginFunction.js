import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goTofeed } from "../routes/Coordinator"

export const loginFunction = (body, navigate) => {
    axios.post(`${BASE_URL}users/login`, body)
    .then((res)=>{
        console.log('deu certo', res.data)
        localStorage.setItem('token', res.data.token)
        goTofeed(navigate)
    })
    .catch((err)=>{
        console.log('deu errado', err.response)
        alert(err.response.data)
    })
}