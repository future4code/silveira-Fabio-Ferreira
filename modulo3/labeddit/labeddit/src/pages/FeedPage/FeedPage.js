import React from 'react';
import { goToDetalhes } from '../../routes/Coordinator';
import { CardPost } from './CardPost';

export const FeedPage = () => {
    return(
        <div>
            <h1>Feed Page</h1>
            <CardPost/>
        </div>
    )
}