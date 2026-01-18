import { AUTH_LOADING, AUTH_SUCCESS, AUTH_ERROR, LOGOUT } from "../types";
import api from '../../axios'; 

// Función que me trae datos del usuario
const fetchUserData = async (token) => {
  const response = await api.get("/user", {
    headers: { token: token },
  });
  return response.data;
};

export const checkAuthAction = () => {
  return async (dispatch) => {
    dispatch({ type: AUTH_LOADING });
    try {
      const { data: isVerified } = await api.get("/auth/is-verify", {
        headers: { token: localStorage.token },
      });

      if (isVerified === true) {
        const userData = await fetchUserData(localStorage.token);

        dispatch({
          type: AUTH_SUCCESS,
          payload: userData,
        });
      } else {
        dispatch({ type: AUTH_ERROR });
      }
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
  };
};
// Acción de Login
export const loginAction = (userData) => async (dispatch) => {
  try {
    const { data: parseRes } = await api.post("/auth/login", userData);

    if (parseRes.token) {
      localStorage.setItem("token", parseRes.token);
      const userDetails = await fetchUserData(parseRes.token);

      dispatch({
        type: AUTH_SUCCESS,
        payload: userDetails,
      });
      return { success: true };
    } else {
      dispatch({ type: AUTH_ERROR });
      return { success: false, msg: parseRes };
    }
  } catch (error) {
    dispatch({ type: AUTH_ERROR });
    return { success: false, msg: error.response?.data || error.message };
  }
};

// Acción de Register
export const registerAction = (userData) => async (dispatch) => {
  try {
    const { data: parseRes } = await api.post("/auth/register", userData);

    if (parseRes.token) {
      localStorage.setItem("token", parseRes.token);
      const userDetails = await fetchUserData(parseRes.token);

      dispatch({
        type: AUTH_SUCCESS,
        payload: userDetails,
      });
      return { success: true };
    } else {
      dispatch({ type: AUTH_ERROR });
      return { success: false, msg: parseRes };
    }
  } catch (error) {
    dispatch({ type: AUTH_ERROR });
    return { success: false, msg: error.response?.data || error.message };
  }
};
export const logoutAction = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: LOGOUT });
  };
};