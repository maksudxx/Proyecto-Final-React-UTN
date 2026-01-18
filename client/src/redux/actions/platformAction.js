import { GET_PLATFORMS } from "../types";
import api from '../../axios';

export function getPlatforms() {
    return async function (dispatch) {
      try {
        const response = await api.get("/platforms");
        dispatch({ type: GET_PLATFORMS, payload: response.data });
      } catch (error) {
        console.error("Error al obtener plataformas:", error);
      }
    };
}