import { GET_VIDEOGAMES } from "../types";

const initialState = {
  videogames: [],
  videogame:{}
};
export default function videogameReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
      };

    default:
      return state;
  }
}
