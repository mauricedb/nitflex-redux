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

export const startPlayingMovie = movie => ({
  type: 'START-PLAYING',
  payload: movie,
});

export const stopPlayingMovie = () => ({
  type: 'STOP-PLAYING',
});

export const filterMovies = search => ({
  type: 'FILTER-MOVIES',
  payload: search,
});
