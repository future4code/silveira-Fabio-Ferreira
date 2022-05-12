import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goTofeed } from '../../routes/Coordinator';

export const PostDetailPage = () => {
    const navigate = useNavigate();
    return(
        <div>
            <h1>Detail Page</h1>
            <button onClick={()=>goTofeed(navigate)}>voltar</button>
        </div>
    )
}