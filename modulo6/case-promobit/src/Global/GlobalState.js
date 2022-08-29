import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import { API_KEY, BASE_URL } from "../Constants/url";
import axios from "axios";

export const GlobalState = ({ children }) => {
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [releaseDate, setReleaseDate] = useState({});
  const [credtsCast, setCreditsCast] = useState([]);
  const [credtsCrew, setCreditsCrew] = useState([]);
  const [videos, setVideos] = useState([]);
  const [recomendations, setRecomendations] = useState([]);
  const [offset, setOffset] = useState(1);

  const getMovie = () => {
    axios
      .get(`${BASE_URL}/movie/popular${API_KEY}&language=pt-BR&page=${offset}`)
      .then((res) => {
        console.log("popular", res.data);
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const getGenre = () => {
    axios
      .get(`${BASE_URL}/genre/movie/list${API_KEY}&language=pt-BR`)
      .then((res) => {
        // console.log("data", res.data);
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

  const getCredits = async (id) => {
    await axios
      .get(`${BASE_URL}/movie/${id}/credits${API_KEY}&language=pt-BR`)
      .then((res) => {
        // console.log("creditos", res.data.crew);
        setCreditsCast(res.data.cast);
        setCreditsCrew(res.data.crew);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const getVideos = async (id) => {
    await axios
      .get(`${BASE_URL}/movie/${id}/videos${API_KEY}&language=pt-BR`)
      .then((res) => {
        // console.log("videos", res.data.results);
        setVideos(res.data.results);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const getRecomendations = async (id) => {
    await axios
      .get(`${BASE_URL}/movie/${id}/recommendations${API_KEY}&language=pt-BR`)
      .then((res) => {
        // console.log("recomendations", res.data.results);
        setRecomendations(res.data.results);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const states = {
    movie,
    genre,
    selectedMovie,
    releaseDate,
    credtsCast,
    credtsCrew,
    videos,
    recomendations,
    offset,
  };
  const requests = {
    getMovie,
    getGenre,
    getMovieById,
    getReleaseDate,
    getCredits,
    getVideos,
    getRecomendations,
  };
  const setters = {
    setMovie,
    setGenre,
    setSelectedMovie,
    setReleaseDate,
    setCreditsCast,
    setCreditsCrew,
    setRecomendations,
    setVideos,
    setOffset,
  };

  return (
    <GlobalStateContext.Provider value={{ states, requests, setters }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
