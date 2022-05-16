import {
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_ID,
  GET_VIDEOGAMES_NAME,
  FILTER_VIDEOGAME_GENRE,
  FILTER_VIDEOGAME_PLATFORM,
} from "../types";

const initialState = {
  videogames: [],
  filterGenres: [],
  filterPlatforms: [],
  videogame: {},
};
export default function videogameReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        filterGenres: action.payload,
        filterPlatforms: action.payload,
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

    case FILTER_VIDEOGAME_PLATFORM:
      let a = state.filterPlatforms.filter((v) => {
        return v.platforms.some((g) => g.platform_name === action.payload);
      });

      console.log(a);
      return {
        ...state,
        videogames: state.filterPlatforms.filter((v) => {
          return v.platforms.some((g) => g.platform_name === action.payload);
        })
      };

    case FILTER_VIDEOGAME_GENRE:
      return {
        ...state,
        videogames: state.filterGenres.filter((v) => {
          return v.genres.some((g) => g.genre_name === action.payload);
        }),
      };

    default:
      return state;
  }
}
