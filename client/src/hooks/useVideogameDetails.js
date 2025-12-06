import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteVideogame,
  getVideogameId,
} from "../redux/actions/videogameActions";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

export const useVideogameDetails = () => {
  const videogame = useSelector(({ videogame }) => videogame.videogame);
  const dispatch = useDispatch();
  const { videogame_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    dispatch(getVideogameId(videogame_id))
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [dispatch, videogame_id]);

  const deleteGame = async (id) => {
    if (
      !window.confirm("¿Está seguro de que desea eliminar este videojuego?")
    ) {
      return;
    }
    try {
      // Se espera a que el thunk finalice la eliminación
      const result = await dispatch(deleteVideogame(id));
      if (result && result.message === "GAME deleted") {
        alert("Juego eliminado exitosamente!");
        history.push("/"); // Redirige después del éxito
      } else {
        // Manejar el caso de éxito sin un mensaje específico
        alert("Juego eliminado exitosamente!");
        history.push("/");
      }
    } catch (error) {
      alert("Error al eliminar el juego. Consulte la consola.");
      console.error("Delete failed:", error);
    }
  };

  return { deleteGame, isLoading, videogame };
};
