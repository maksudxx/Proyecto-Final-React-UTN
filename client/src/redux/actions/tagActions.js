import { GET_TAG } from "../types";
import api from '../../axios';

export function getTags() {
    return async function (dispatch) {
      try {
        const response = await api.get("/tags");
        dispatch({ type: GET_TAG, payload: response.data });
      } catch (error) {
        console.error("Error al obtener tags:", error);
      }
    };
}