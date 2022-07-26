import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardRestaurant } from "../../Components/CardRestaurant";
import { BASE_URL } from "../../Constants/url";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { CardRestaurants, ContainerFeed } from "./styled";

export const Feed = () => {
  useProtectedPage();

  const [restaurants, setRestaurants] = useState([]);

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
  return (
    <ContainerFeed>
      <CardRestaurants>
        {restaurants.map((restaurants) => {
          return <CardRestaurant restaurants={restaurants} />;
        })}
      </CardRestaurants>
    </ContainerFeed>
  );
};
