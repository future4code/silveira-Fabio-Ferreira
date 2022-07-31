export const goToLogin = (navigate) => {
  navigate("/");
};

export const goBack = (navigate) => {
  navigate(-1);
};

export const goToFeed = (navigate) => {
  navigate("/feed");
};

export const goToSingup = (navigate) => {
  navigate("/singup");
};

export const goToSingupAddress = (navigate) => {
  navigate("/singup/address");
};

export const goToRestaurant = (navigate, id) => {
  navigate(`/feed/${id}`);
};
