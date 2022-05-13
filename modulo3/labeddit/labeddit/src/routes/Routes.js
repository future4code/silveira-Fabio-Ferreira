import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { FeedPage } from "../pages/FeedPage/FeedPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { PostDetailPage } from "../pages/PostDetailPage/PostDetailPage";
import { SingupPage } from "../pages/SingupPage/SingupPage";

export const Router = ({nameButton, setNameButton}) => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/feed' element={<FeedPage nameButton={nameButton} setNameButton={setNameButton}  />} />
                <Route path='/' element={<LoginPage nameButton={nameButton} setNameButton={setNameButton}  />} />
                <Route path='/cadastro' element={<SingupPage nameButton={nameButton} setNameButton={setNameButton}  />} />
                <Route path='/detalhes/:id' element={<PostDetailPage nameButton={nameButton} setNameButton={setNameButton}  />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}