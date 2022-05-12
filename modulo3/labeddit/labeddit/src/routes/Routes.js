import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { FeedPage } from "../pages/FeedPage/FeedPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { PostDetailPage } from "../pages/PostDetailPage/PostDetailPage";
import { SingupPage } from "../pages/SingupPage/SingupPage";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/feed' element={<FeedPage />} />
                <Route path='/' element={<LoginPage />} />
                <Route path='/cadastro' element={<SingupPage />} />
                <Route path='/detalhes/:id' element={<PostDetailPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}