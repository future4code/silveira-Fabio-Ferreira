import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const createComentFunction = (id, body) => {
    const token = localStorage.getItem('token')
    axios.post(`${BASE_URL}posts/${id}/comments`, body, {
        headers:{
            'Authorization': `${token}`
        }
    })
    .then((res)=>{
        console.log('deu certo',res)
    })
    .catch((err)=>{
        console.log('deu muito errado', err.response)
    })
}