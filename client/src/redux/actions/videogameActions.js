import axios from "axios";
import { GET_VIDEOGAMES } from "../types/index";


export function getVideogames() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/videogames");
    const json = response.data;
    dispatch({ type: GET_VIDEOGAMES, payload: json });
  };
}