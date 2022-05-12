import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { goTofeed } from '../../routes/Coordinator';
import { getPostComentsFunction } from '../../services/getPostComentsFunction';
import { CardComments } from './CardComents';

export const PostDetailPage = () => {
    const [coments, setComents] = useState();

    const navigate = useNavigate();

    useEffect(()=>{
        getPostComentsFunction(setComents)
    }, []);

    
//passa o id como parametro pro routes poder saber qual post abrir e ir aos detalhes:
    const params = useParams();
    getPostComentsFunction(params.id, setComents);

//manda props pro cardComent
    const comentList = coments && coments.map((item)=>{
        return(
            <CardComments
            itemComent={item}
            getComents={getPostComentsFunction(setComents)}
            />
        )
    })



    console.log('coments', coments)
    return(
        <div>
            <button onClick={()=>goTofeed(navigate)}>voltar</button>
            <h1>Detail Page</h1>
            {comentList}
        </div>
    )
}