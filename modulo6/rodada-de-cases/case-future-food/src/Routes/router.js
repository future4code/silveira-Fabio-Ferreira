import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "../Pages/Cart/cart";
import { Feed } from "../Pages/Feed/Feed";
import { Login } from "../Pages/Login/login";
import { Perfil } from "../Pages/Perfil/perfil";
import { Restaurante } from "../Pages/Restaurant/restaurant";
import { Singup } from "../Pages/Singup/singup";
import { SingupAddress } from "../Pages/SingupAddress/singupAddress";

export const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/singup/address" element={<SingupAddress />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/feed/:restaurantId" element={<Restaurante />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
