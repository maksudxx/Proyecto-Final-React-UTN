import { GET_TAG } from "../types";

const initialState = {
  tags: [],
};

export default function TagReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TAG:
      return {
        ...state,
        tags: action.payload,
      };

    default:
      return state;
  }
}
