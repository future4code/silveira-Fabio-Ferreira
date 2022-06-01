import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const getPostComentsFunction = (id, setComents) => {
    const token = localStorage.getItem('token')
    axios.get(`${BASE_URL}posts/${id}/comments`,{
        headers: {
            'Authorization': `${token}`
        }
    })
    .then((res)=>{
        console.log(res)
        setComents(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}