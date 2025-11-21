import axios from "axios";
import {
  FILTER_VIDEOGAME_GENRE,
  FILTER_VIDEOGAME_PLATFORM,
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_ID,
  GET_VIDEOGAMES_NAME,
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
  };
}

export function getVideogameId(videogame_id) {
  return async function (dispatch) {
    const response = await axios.get(
      "http://localhost:3001/videogames/" + videogame_id
    );
    const json = response.data;
    dispatch({ type: GET_VIDEOGAMES_ID, payload: json });
  };
}

export function createVideogame(body) {
  return async function (dispatch) {
    try {
      return await axios.post("http://localhost:3001/videogame", body);
    } catch (err) {
      console.log(err);
      return;
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
