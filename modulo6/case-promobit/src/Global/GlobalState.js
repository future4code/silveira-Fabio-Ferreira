import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import { API_KEY, BASE_URL } from "../Constants/url";
import axios from "axios";
import { useParams } from "react-router-dom";

export const GlobalState = ({ children }) => {
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [releaseDate, setReleaseDate] = useState({});
  const getMovie = () => {
    axios
      .get(`${BASE_URL}/movie/popular${API_KEY}&language=pt-BR`)
      .then((res) => {
        // console.log(res.data);
        setMovie(res.data.results);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const getGenre = () => {
    axios
      .get(`${BASE_URL}/genre/movie/list${API_KEY}&language=pt-BR`)
      .then((res) => {
        // console.log(res.data);
        setGenre(res.data.genres);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const getMovieById = async (id) => {
    await axios
      .get(`${BASE_URL}/movie/${id}${API_KEY}&language=pt-BR`)
      .then((res) => {
        console.log(res.data);
        setSelectedMovie(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const getReleaseDate = async (id) => {
    await axios
      .get(`${BASE_URL}/movie/${id}/release_dates${API_KEY}&language=pt-BR`)
      .then((res) => {
        // console.log(res.data);
        setReleaseDate(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const states = { movie, genre, selectedMovie, releaseDate };
  const requests = { getMovie, getGenre, getMovieById, getReleaseDate };
  const setters = { setMovie, setGenre, setSelectedMovie, setReleaseDate };

  return (
    <GlobalStateContext.Provider value={{ states, requests, setters }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
