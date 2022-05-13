import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const getPostFunction = (setPost) => {
    const token = localStorage.getItem('token')
    axios.get(`${BASE_URL}posts`, {
        headers: {
            'Authorization': `${token}`
        }
    } )
    .then((res)=>{
        //  console.log(res.data)
         setPost(res.data)
    })
    .catch((err)=>{
        console.log(err.response)
    })
}