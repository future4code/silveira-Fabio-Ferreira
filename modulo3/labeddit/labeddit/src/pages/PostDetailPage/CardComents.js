import axios from "axios";
import React from "react";
import { BASE_URL } from "../../constants/urls";

export const CardComments = (props) => {

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
            axios.post(`${BASE_URL}comments/${postId}/votes`, body, headers)
            .then((res)=>{
                console.log(res)
                props.getPostComentsFunction()
            })
            .catch((err)=>{
                console.log(err)
            })
        } else if (direction === -1){
            axios.put(`${BASE_URL}comments/${postId}/votes`, body, headers)
            .then((res)=>{
                console.log(res)
                props.getPostComentsFunction()
            })
            .catch((err)=>{
                console.log(err)
            })
        }else{
            axios.delete(`${BASE_URL}comments/${postId}/votes`, headers)
            .then((res)=>{
                console.log(res)
                props.getPostComentsFunction()
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }

    return(
        <div>
            <form>
              <h3>enviado por:{props.itemComent && props.itemComent.username}</h3>
              <p>{props.itemComent && props.itemComent.body}</p>
              <button onClick={buttonLike}>curtir</button>
              <button onClick={buttonDislke}>descurtir</button>
            </form>
        </div>
    )
}