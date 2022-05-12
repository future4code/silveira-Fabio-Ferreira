import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { goTofeed } from '../../routes/Coordinator';
import { getPostComentsFunction } from '../../services/getPostComentsFunction';

export const PostDetailPage = () => {
    const navigate = useNavigate();
    
    const params = useParams()
    console.log(params.id)
    getPostComentsFunction(params.id)
    return(
        <div>
            <h1>Detail Page</h1>
            <button onClick={()=>goTofeed(navigate)}>voltar</button>
        </div>
    )
}