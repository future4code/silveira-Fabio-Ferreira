import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const getPostFunction = (body, navigate) => {
    const token = localStorage.getItem('token')
    axios.get(`${BASE_URL}posts`, {
        headers: {
            'Authorization': `${token}`
        }
    } , body)
    .then((res)=>{
        // console.log(res.data)
        localStorage.getItem('token')
    })
    .catch((err)=>{
        console.log(err.response)
    })
}