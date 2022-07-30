import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import { useParams } from "react-router-dom";
import { CardRestaurantDetail } from "../../Components/CardRestaurantDetails/CardRestaurantDetail";
import { CardRestaurant, SectionProductByCategory, Category } from "./styled";
import { CardProduct } from "../../Components/CardProduct/CardProduct";

export const Restaurante = () => {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [categories, setCategories] = useState([]);
  console.log("hook", restaurant);

  const getRestaurant = () => {
    axios
      .get(`${BASE_URL}/restaurants/${restaurantId}`, {
        headers: {
          auth: window.localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setRestaurant(res.data.restaurant);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  useEffect(() => {
    if (restaurant.products) {
      const newCategories = [];
      for (const product of restaurant.products) {
        if (!newCategories.includes(product.category)) {
          newCategories.push(product.category);
        }
      }
      setCategories(newCategories);
    }
  }, [restaurant]);

  return (
    <div>
      <CardRestaurant>
        <CardRestaurantDetail restaurant={restaurant} />
        {restaurant.products &&
          categories.map((category) => {
            return (
              <SectionProductByCategory>
                <Category>{category}</Category>
                {restaurant.products
                  .filter((products) => {
                    return products.category === category;
                  })
                  .map((products) => {
                    return (
                      <CardProduct products={products} key={products.id} />
                    );
                  })}
              </SectionProductByCategory>
            );
          })}
      </CardRestaurant>
    </div>
  );
};
