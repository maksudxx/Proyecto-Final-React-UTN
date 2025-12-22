import axios from "axios";
import {
  FILTER_VIDEOGAME_GENRE,
  FILTER_VIDEOGAME_PLATFORM,
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_ID,
  GET_VIDEOGAMES_NAME,
  DELETE_VIDEOGAME_SUCESS,
} from "../types/index";

export function getVideogames() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/videogames");
    const json = response.data;
    dispatch({ type: GET_VIDEOGAMES, payload: json });
  };
}

export function getVideogameName(name) {
  return async function (dispatch) {
    const response = await axios.get(
      "http://localhost:3001/videogames?name=" + name
    );
    const json = response.data;
    dispatch({ type: GET_VIDEOGAMES_NAME, payload: json });
    return json;
  };
}

export function getVideogameId(videogame_id) {
  return async function (dispatch) {
    const response = await axios.get(
      "http://localhost:3001/videogames/" + videogame_id
    );
    const json = response.data;
    dispatch({ type: GET_VIDEOGAMES_ID, payload: json });
    return json;
  };
}

export function createVideogame(body) {
  return async function () {
    try {
      const response = await axios.post(
        "http://localhost:3001/videogames",
        body
      );
      return response.data;
    } catch (err) {
      console.log(err);
      return err.response.data;
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
      const response = await axios.delete(
        "http://localhost:3001/videogames/" + id
      );
      //Actulizamos la lista de videojuegos
      dispatch({ type: DELETE_VIDEOGAME_SUCESS, payload: id });
      return response.data;
    } catch (err) {
      console.log(err);
      return;
    }
  };
}
