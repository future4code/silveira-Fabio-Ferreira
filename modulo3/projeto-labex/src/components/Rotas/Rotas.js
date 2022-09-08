import React from "react"
import { Home } from '../Home/Home'
import { AdminHome } from '../Private/AdminHome'
import { CreateTrip } from '../Private/CreateTrip'
import { Login } from '../Private/Login'
import { TripDetails } from '../Private/TripDetails'
import { ApplicationForm } from '../Public/ApplicationForm'
import { ListTrips } from '../Public/ListTrips'
import { BrowserRouter, Routes, Route } from "react-router-dom"



export const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="AdminHome" element={<AdminHome />} />
                <Route path="CreateTrip" element={<CreateTrip />} />
                <Route path="Login" element={<Login />} />
                <Route path="TripDetails" element={<TripDetails />} />
                <Route path="ApplicationForm" element={<ApplicationForm />} />
                <Route path="ListTrips" element={<ListTrips />} />
            </Routes>
        </BrowserRouter>
    )
}