import axios from "axios";
import { GET_TAG } from "../types";

export function getTags() {
    return async function (dispatch) {
      const response = await axios.get("http://localhost:3001/tags");
      const json = response.data;
      dispatch({ type: GET_TAG, payload: json });
    };
  }