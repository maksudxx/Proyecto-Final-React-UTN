import {
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_ID,
  GET_VIDEOGAMES_NAME,
} from "../types";

const initialState = {
  videogames: [],
  videogame: {},
};
export default function videogameReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
      };
    case GET_VIDEOGAMES_NAME: {
      return {
        ...state,
        videogames: action.payload,
      };
    }

    case GET_VIDEOGAMES_ID:
      return {
        ...state,
        videogame: action.payload,
      };

    default:
      return state;
  }
}
