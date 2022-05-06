import axios from "axios";
import { GET_GENRES } from "../types";

export function getGenres() {
    return async function (dispatch) {
      const response = await axios.get("http://localhost:3001/genres");
      const json = response.data;
      dispatch({ type: GET_GENRES, payload: json });
    };
  }