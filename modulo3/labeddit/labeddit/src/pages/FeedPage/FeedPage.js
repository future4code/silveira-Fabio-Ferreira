import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { goToDetalhes } from '../../routes/Coordinator';
import { createPostFunction } from '../../services/createPostFunction';
import { getPostFunction } from '../../services/getPostFunction';
import { CardPost } from './CardPost';

export const FeedPage = () => {
    const [post, setPost] = useState();
    const [form, handleInputChange] = useForm({title:'', body:''})

    const navigate = useNavigate();

    useEffect(() =>{
        getPostFunction(setPost);        
    }, [])

//--------------------------------------------------------------------//
    const getComent = (id) => {
        goToDetalhes(navigate, id)
    }
//--------------------------------------------------------------------//
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

    const onSubmit = (e) => {
        e.preventDefault()
        createPostFunction(form)
    }

    return(
        <div>
            <h1>Feed Page</h1>
            <div>
                <form onSubmit={onSubmit} >
                    <input
                     name='title'
                     value={form.title}
                     onChange={handleInputChange}
                     placeholder='Titulo do Post'
                     />
                    <input
                     name='body'
                     value={form.body}
                     onChange={handleInputChange}
                     placeholder='Escreva algo'
                     />
                    <button type='submit'>Publicar</button>
                </form>                
            </div>
            {postList}
        </div>
    )
}