import { GET_PLATFORMS } from "../types";

const initialState = {
  platforms: [],
};

export default function genreReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLATFORMS:
      return {
        ...state,
        platforms: action.payload,
      };

    default:
     return state;
  }
}
