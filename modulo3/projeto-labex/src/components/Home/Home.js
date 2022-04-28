import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate()

  const goToList = () => {
    navigate('/ListTrips')
  }
  
  const goToAdmin = () => {
    navigate('/Login')
  }

  return (
    <div>
      <h1>home</h1>
      <button onClick={goToList}>goToList</button>
      <button onClick={goToAdmin}>goToAdmin</button> 
    </div>
  );
}