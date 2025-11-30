import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogameId } from "../redux/actions/videogameActions";
import { useParams } from "react-router";

export const useVideogameDetails = () => {
  const videogame = useSelector(({ videogame }) => videogame.videogame);
  const dispatch = useDispatch();
  const { videogame_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

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
  return { isLoading, videogame };
};
