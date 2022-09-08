import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { goTofeed } from '../../routes/Coordinator';
import { createComentFunction } from '../../services/createComentFunction';
import { getPostComentsFunction } from '../../services/getPostComentsFunction';
import { CardComments } from './CardComents';

export const PostDetailPage = () => {
    const [coments, setComents] = useState();
    const [form, handleInputChange] = useForm({body:''})

    const navigate = useNavigate();
    const params = useParams();
    useEffect(()=>{
        getPostComentsFunction(params.id, setComents)
    }, []);

    
//passa o id como parametro pro routes poder saber qual post abrir e ir aos detalhes:


//manda props pro cardComent
    const comentList = coments && coments.map((item)=>{
        return(
            <CardComments
            itemComent={item}
            getComents={getPostComentsFunction(setComents)}
            postComents={createComentFunction}
            />
        )
    })

    const onSubmit = (e) => {
        e.preventDefault()
        createComentFunction(params.id, form)
        console.log('entrei', params.id, form)
    }
    return(
        <div>
            <button onClick={()=>goTofeed(navigate)}>voltar</button>
            <h1>Detail Page</h1>
            <form onSubmit={onSubmit}>
                <input 
                 name='body'
                 value={form.body}
                 onChange={handleInputChange}
                 placeholder='escreva um comentario'
                 />
                <button type='submit'>comentar</button>
            </form>            
            {comentList}
        </div>
    )
}