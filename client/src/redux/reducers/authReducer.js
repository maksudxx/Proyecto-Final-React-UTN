import { AUTH_LOADING, AUTH_SUCCESS, AUTH_ERROR, LOGOUT } from "../types";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_LOADING:
      return { ...state, loading: true };
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
      };
    case AUTH_ERROR:
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
      };
    default:
      return state;
  }
}
