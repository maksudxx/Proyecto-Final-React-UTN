import { GET_GENRES } from "../types";
import api from '../../axios'; 

export function getGenres() {
    return async function (dispatch) {
      try {
        const response = await api.get("/genres");
        dispatch({ type: GET_GENRES, payload: response.data });
      } catch (error) {
        console.error("Error al obtener géneros:", error);
      }
    };
}