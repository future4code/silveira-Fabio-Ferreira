import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constants/urls"
import { goToDetalhes } from "../../routes/Coordinator"

export const CardPost = (props) => {
    
    const buttonLike = () => {
        if(props.itemPost.userVote === 1) {
            likeandDeslike(props.itemPost.id)
        } else {
            likeandDeslike(props.itemPost.id, 1)
        }
    }

    const buttonDislke = () => {
        if(props.itemPost.userVote === -1) {
            likeandDeslike(props.itemPost.id)
        } else {
            likeandDeslike(props.itemPost.id, -1)
        }
    }

    const likeandDeslike = (postId, direction) => {
        const headers = {
            headers: {
                Authorization:
                localStorage.getItem('token')
            }
        }
        const body={
            'direction': direction
        }
        if (direction === 1){
            axios.post(`${BASE_URL}posts/${postId}/votes`, body, headers)
            .then((res)=>{
                console.log(res)
                props.getPostFunction()
            })
            .catch((err)=>{
                console.log(err)
            })
        } else if (direction === -1){
            axios.put(`${BASE_URL}posts/${postId}/votes`, body, headers)
            .then((res)=>{
                console.log(res)
                props.getPostFunction()
            })
            .catch((err)=>{
                console.log(err)
            })
        }else{
            axios.delete(`${BASE_URL}posts/${postId}/votes`, headers)
            .then((res)=>{
                console.log(res)
                props.getPostFunction()
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
    
    const navigate = useNavigate()
    
    return(
        <div>
            <form>
              <p>enviado por:{props.itemPost && props.itemPost.username}</p>
              <h2> {props.itemPost && props.itemPost.body} </h2>
              <button onClick={buttonLike}>curtir</button>
              <button onClick={buttonDislke}>descurtir</button>
              {props.itemPost.voteSum}
              <button onClick={()=>props.getComent(props.itemPost.id)}>comentarios</button>
            </form>
        </div>
    )
}