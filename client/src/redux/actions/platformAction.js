import axios from "axios";
import { GET_PLATFORMS } from "../types";

export function getPlatforms() {
    return async function (dispatch) {
      const response = await axios.get("http://localhost:3001/platforms");
      const json = response.data;
      dispatch({ type: GET_PLATFORMS, payload: json });
    };
  }