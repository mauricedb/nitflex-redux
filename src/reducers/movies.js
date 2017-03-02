const movies = (state = {}, action) => {
  switch (action.type) {
    case "MOVIES-LOADED":
      return Object.assign({}, state, { movies: [...action.payload] });

    default:
      return state;
  }
};

export default movies;
