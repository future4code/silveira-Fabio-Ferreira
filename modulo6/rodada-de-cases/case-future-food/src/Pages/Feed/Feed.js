import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardRestaurant } from "../../Components/CardRestaurant/CardRestaurant";
import { BASE_URL } from "../../Constants/url";
import { Header } from "../../Header/Header";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import {
  CardRestaurants,
  ContainerFeed,
  InputMaterialSearch,
  Menu,
  MenuItem,
} from "./styled";

export const Feed = () => {
  useProtectedPage();

  const [restaurants, setRestaurants] = useState([]);
  const [inputSearch, setInputSearch] = useState([]);

  const getRestaurants = async () => {
    await axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setRestaurants(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const filterRestaurant = restaurants
    .filter((restaurant) =>
      inputSearch
        ? restaurant.name
            .toLowerCase()
            .includes(inputSearch.toString().toLowerCase())
        : true
    )
    .map((restaurants) => {
      return <CardRestaurant restaurants={restaurants} />;
    });

  return (
    <ContainerFeed>
      <Header title={"iFuture"} />
      <CardRestaurants>
        <InputMaterialSearch
          id="outlined-basic"
          type={"text"}
          label="Buscar"
          variant="outlined"
          placeholder={"Buscar"}
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />

        <Menu>
          <MenuItem select={false}>Burger</MenuItem>
          <MenuItem select={false}>Asiática</MenuItem>
          <MenuItem select={false}>Massas</MenuItem>
          <MenuItem select={false}>Saudável</MenuItem>
          <MenuItem select={false}>Burger</MenuItem>
          <MenuItem select={false}>Burger</MenuItem>
        </Menu>
        {filterRestaurant}
      </CardRestaurants>
    </ContainerFeed>
  );
};
