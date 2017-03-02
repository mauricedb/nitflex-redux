const user = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      if (action.payload.rememberMe) {
        localStorage.user = JSON.stringify(action.payload);
      }

      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default user;

