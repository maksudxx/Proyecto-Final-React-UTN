import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Videogames.module.css";
import { getVideogames } from "../../redux/actions/videogameActions";
import Card from "../../components/card/Card";
import GameNotFound from "../../components/gameNotFound/GameNotFound"
import SearchBar from "../../components/searchbar/SearchBar";
import Sesion from "../../components/sesion/Sesion"

const Videogames = () => {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogame.videogames);
  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  //pagination
  const initialState = {
    page: 0,
  };
  const [videogameState, setVideogameState] = useState(initialState);
  const { page } = videogameState;
  const postsPorPagina = 20;
  const pagesVisited = page * postsPorPagina;
  const pageCount = Math.ceil(videogames?.length / postsPorPagina);
  const changePage = ({ selected }) => {
    setVideogameState({ ...videogameState, page: selected });
  };

  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>LISTA DE JUEGOS</p>
        <SearchBar />
        <ReactPaginate
        id="pagination"
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={styles.paginationBttns}
        previousLinkClassName={styles.previousBttn}
        nextLinkClassName={styles.nextBttn}
        disabledClassName={styles.paginationDisabled}
        activeClassName={styles.paginationActive}
      />
        <ul className={styles.containerCards}>
          
          {videogames?.length > 0 ? (
            videogames
            ?.slice(pagesVisited, pagesVisited + postsPorPagina)
            .map((v, index) => (
              <Card
                key={index}
                id={v.videogame_id}
                idApi={v.videogame_id_api}
                name={v.videogame_name}
                image={v.videogame_image}
                rating={v.videogame_rating}
                genres={v.genres}
                platforms={v.platforms}
                release={v.videogame_release_date}
              />
            ))
          ): <div className={styles.containerNotFound}><GameNotFound /></div>}
        </ul>
      </div>
      <br /><br />
      
    </>
  );
};

export default Videogames;
