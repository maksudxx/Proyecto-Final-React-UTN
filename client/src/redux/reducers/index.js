import { combineReducers } from "redux";
import videogameReducer from "./videogameReducer";
import genreReducer from "./genreReducer";
import platformReducer from "./platformReducer";
import TagReducer from "./TagReducer";

const reducer = combineReducers({
  videogame: videogameReducer,
  genre: genreReducer,
  platform: platformReducer,
  tag: TagReducer
});

export default reducer;
