export const moviesLoaded = movies => ({
  type: "MOVIES-LOADED",
  payload: movies
});

export const loadMovies = () =>
  dispatch =>
    fetch("/movies.json")
      .then(rsp => rsp.json())
      .then(movies => dispatch(moviesLoaded(movies)));

export const login = user => dispatch => {
  dispatch({
    type: "LOGIN",
    payload: user
  });
  dispatch(loadMovies());
};
