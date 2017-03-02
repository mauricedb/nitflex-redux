import { combineReducers } from "redux";
import movies from "./movies";
import user from "./user";

const reducers = combineReducers({
  movies,
  user
});

export default reducers;
