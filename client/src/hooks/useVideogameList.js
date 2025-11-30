import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../redux/actions/videogameActions";

export const useVideogameList = () => {
      //pagination
  const initialState = {
    page: 0,
  };
  const [videogameState, setVideogameState] = useState(initialState);
  const dispatch = useDispatch();
  const videogames = useSelector(({ videogame }) => videogame.videogames);
  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  const { page } = videogameState;
  const postsPorPagina = 20;
  const pagesVisited = page * postsPorPagina;
  const pageCount = Math.ceil(videogames?.length / postsPorPagina);
  const changePage = ({ selected }) => {
    setVideogameState({ ...videogameState, page: selected });
  };
  return {
    changePage,
    videogames,
    pagesVisited,
    pageCount,
    postsPorPagina
  };
};
