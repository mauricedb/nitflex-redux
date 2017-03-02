const movies = (state = {}, action) => {
  switch (action.type) {
    case "MOVIES-LOADED":
      return Object.assign({}, state, { movies: [...action.payload] });

    case 'START-PLAYING':
      return Object.assign({}, state, { playing: action.payload });

    case 'STOP-PLAYING':
      return Object.assign({}, state, { playing: null });

    default:
      return state;
  }
};

export default movies;
