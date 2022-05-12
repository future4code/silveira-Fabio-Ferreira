import React from "react"
import { useNavigate } from "react-router-dom"
import useForm from "../../hooks/useForm"
import { goToDetalhes } from "../../routes/Coordinator"
import { getPostFunction } from "../../services/getPostFunction"

export const CardPost = () => {
    const [form, handleInputChange] = useForm()
    
    const navigate = useNavigate()

    
    const post = getPostFunction(navigate)
    console.log(post)

    // const {body, title, userName, commentCount, id, userVote, voteSum } = post
    
    return(
        <div>
            <form>
              <p>enviado por:</p>
              <h2>post </h2>
              <button>curtir</button>
              <button>descurtir</button>
              <button onClick={()=>goToDetalhes(navigate)}>comentarios</button>
            </form>
        </div>
    )
}