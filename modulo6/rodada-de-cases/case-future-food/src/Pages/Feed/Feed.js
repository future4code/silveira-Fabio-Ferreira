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
  const [categoryRestaurant, setCategoryRestaurant] = useState([]);
  const [valueCategory, setValueCategory] = useState([]);

  /* requisição para pegar as propriedades dos restaurantes na API */
  const getRestaurants = async () => {
    await axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log(res.data);
        setRestaurants(res.data.restaurants);
        filterCategory(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  /*tratamento dos dados do estado restaurants */
  let filterCategory = (restaurants) => {
    /*cria um novo array para guardar a propriedade category que vem do estado restaurants*/
    const arrayAux = [];
    restaurants.map((restaurant) => {
      arrayAux.push(restaurant.category);
    });
    const newArray = [...new Set(arrayAux)];

    const changeObjectArray = [];

    newArray.map((category) => {
      const insertObj = { category, select: false };
      changeObjectArray.push(insertObj);
    });

    console.log(changeObjectArray);
    setCategoryRestaurant(changeObjectArray);
  };

  console.log(categoryRestaurant);

  useEffect(() => {
    getRestaurants();
  }, []);

  /*filtros de Restaurante, search, categoria e um map pra retornar um card com os restaurantes*/

  const filterRestaurant = restaurants /*filtrar restaurantes por nome */
    .filter((restaurant) =>
      inputSearch
        ? restaurant.name
            .toLowerCase()
            .includes(inputSearch.toString().toLowerCase())
        : true
    ) /*filtrar categorias no array restaurante */
    .filter((restaurant) =>
      valueCategory
        ? restaurant.category
            .toLowerCase()
            .includes(valueCategory.toString().toLowerCase())
        : true
    ) /* pega os restaurantes e manda as propriedades para a construção do card */
    .map((restaurants) => {
      return <CardRestaurant restaurants={restaurants} />;
    });

  const changeCategory = (category) => {
    setValueCategory(category);

    const result = categoryRestaurant.map((cat) => {
      if (cat.category === category) {
        return {
          ...cat,
          select: true,
        };
      } else {
        return {
          ...cat,
          select: false,
        };
      }
      return cat;
    });
    setCategoryRestaurant(result);
  };

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
          <MenuItem onClick={() => changeCategory("")}>Todos</MenuItem>
          {categoryRestaurant.map((category) => {
            return (
              <MenuItem
                select={category.select}
                onClick={() => changeCategory(category.category)}
              >
                {category.category}
              </MenuItem>
            );
          })}
        </Menu>
        {filterRestaurant}
      </CardRestaurants>
    </ContainerFeed>
  );
};
