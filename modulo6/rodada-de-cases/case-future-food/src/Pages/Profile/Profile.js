import React from "react";
import { Header } from "../../Components/Header/Header";
import { Menu as MenuMain } from "../../Components/Menu/Menu";

export const Profile = () => {
  return (
    <div>
      <Header title={"Meu perfil"} />
      <MenuMain page={"profile"} />
    </div>
  );
};
