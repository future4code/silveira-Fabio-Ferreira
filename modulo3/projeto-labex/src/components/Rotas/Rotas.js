import React from "react"
import { Home } from '../components/Home/Home'
import { AdminHome } from '../components/Private/AdminHome'
import { CreateTrip } from '../components/Private/CreateTrip'
import { Login } from '../components/Private/Login'
import { TripDetails } from '../components/Private/TripDetails'
import { ApplicationForm } from '../components/Public/ApplicationForm'
import { ListTrips } from '../components/Public/ListTrips'
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