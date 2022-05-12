import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constants/urls';
import { goToDetalhes } from '../../routes/Coordinator';
import { getPostComentsFunction } from '../../services/getPostComentsFunction';
import { getPostFunction } from '../../services/getPostFunction';
import { CardPost } from './CardPost';

export const FeedPage = () => {
    const [post, setPost] = useState();
    const [coment, setComent] = useState();

    

    // const goDetail = () => {
    //     getPostComentsFunction(setComent, postList.id)
    // }

    const navigate = useNavigate();

    useEffect(() =>{
        getPostFunction(setPost);        
    }, [])

//----------------------------------------------------------------------------------
    const getComent = (id) => {
        goToDetalhes(navigate, id)
    }

    const postList = post && post.map((item)=>{
        return(
            <CardPost
             key={item.id}
             itemPost={item}
             getPostFunction={getPostFunction(setPost)}
             getComent={getComent}
             />
        )
    })

    return(
        <div>
            <h1>Feed Page</h1>
            <div>
                <input placeholder='Titulo do Post'/>
                <input placeholder='Create Post'/>
            </div>
            {postList}
        </div>
    )
}