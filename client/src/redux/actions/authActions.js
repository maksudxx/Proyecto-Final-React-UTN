import { AUTH_LOADING, AUTH_SUCCESS, AUTH_ERROR, LOGOUT } from "../types";

//Función que me trae datos del usuario
const fetchUserData = async (token) => {
  const response = await fetch("http://localhost:3001/user", {
    method: "GET",
    headers: { token: token },
  });
  return await response.json();
};

export const checkAuthAction = () => {
  return async (dispatch) => {
    dispatch({ type: AUTH_LOADING });
    try {
      const response = await fetch("http://localhost:3001/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const isVerified = await response.json();

      if (isVerified === true) {
        const userRes = await fetch("http://localhost:3001/user", {
          method: "GET",
          headers: { token: localStorage.token },
        });
        const userData = await userRes.json();

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
    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const parseRes = await response.json();

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
    return { success: false, msg: error.message };
  }
};

// Acción de Register
export const registerAction = (userData) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const parseRes = await response.json();

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
    return { success: false, msg: error.message };
  }
};
export const logoutAction = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: LOGOUT });
  };
};
