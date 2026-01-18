import {
  FILTER_VIDEOGAME_GENRE,
  FILTER_VIDEOGAME_PLATFORM,
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_ID,
  GET_VIDEOGAMES_NAME,
  DELETE_VIDEOGAME_SUCESS,
  PUT_VIDEOGAME,
} from "../types/index";

// Importamos tu instancia configurada
import api from '../../axios'; 

export function getVideogames() {
  return async function (dispatch) {
    try {
      const response = await api.get("/videogames");
      dispatch({ type: GET_VIDEOGAMES, payload: response.data });
    } catch (error) {
      console.error("Error al obtener videojuegos:", error);
    }
  };
}

export function getVideogameName(name) {
  return async function (dispatch) {
    try {
      // Usar params es más limpio que concatenar "?name="
      const response = await api.get("/videogames", { params: { name } });
      dispatch({ type: GET_VIDEOGAMES_NAME, payload: response.data });
      return response.data;
    } catch (error) {
      console.error("Error al buscar por nombre:", error);
    }
  };
}

export function getVideogameId(videogame_id) {
  return async function (dispatch) {
    try {
      const response = await api.get(`/videogames/${videogame_id}`);
      dispatch({ type: GET_VIDEOGAMES_ID, payload: response.data });
      return response.data;
    } catch (error) {
      console.error("Error al obtener ID:", error);
    }
  };
}

export function createVideogame(body) {
  return async function () {
    try {
      const response = await api.post("/videogames", body);
      return response.data;
    } catch (err) {
      console.log(err);
      return err.response?.data || "Error al crear";
    }
  };
}

export function filterVideogamesGenre(payload) {
  return {
    type: FILTER_VIDEOGAME_GENRE,
    payload,
  };
}

export function filterVideogamesPlatform(payload) {
  return {
    type: FILTER_VIDEOGAME_PLATFORM,
    payload,
  };
}

export function deleteVideogame(id, dispatch) {
  return async function () {
    try {
      const response = await api.delete(`/videogames/${id}`);
      dispatch({ type: DELETE_VIDEOGAME_SUCESS, payload: id });
      return response.data;
    } catch (err) {
      console.log(err);
      return;
    }
  };
}

export function updateVideogame(id, body) {
  return async function (dispatch) {
    try {
      const response = await api.put(`/videogames/${id}`, body);
      dispatch({ type: PUT_VIDEOGAME, payload: id });
      return response.data;
    } catch (err) {
      console.log(err);
      return err.response?.data || "Error al actualizar";
    }
  };
}