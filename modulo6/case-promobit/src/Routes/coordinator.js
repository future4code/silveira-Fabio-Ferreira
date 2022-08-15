export const goToHome = (navigate) => {
  navigate("/");
};

export const goToMovie = (navigate, id) => {
  navigate(`/movie/${id}`);
};
