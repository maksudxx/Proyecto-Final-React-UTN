import { GET_GENRES } from "../types";

const initialState = {
  genres: [],
};

export default function genreReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    default:
      state;
  }
}
