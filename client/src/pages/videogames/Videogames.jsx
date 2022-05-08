import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Videogames.module.css";
import { getVideogames } from "../../redux/actions/videogameActions";
import Card from "../../components/card/Card";
import SearchBar from "../../components/searchbar/SearchBar";

const Videogames = () => {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogame.videogames);
  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  //pagination
  const initialState = {
    order: "asc",
    page: 0,
  };
  const [videogameState, setVideogameState] = useState(initialState);
  const { order, page } = videogameState;
  const postsPorPagina = 9;
  const pagesVisited = page * postsPorPagina;
  const pageCount = Math.ceil(videogames?.length / postsPorPagina);
  const changePage = ({ selected }) => {
    setVideogameState({ ...videogameState, page: selected });
  };

  return (
    <>
      <Outlet />
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
      <div className={styles.container}>
        <ul className={styles.containerCards}>
          {videogames
            ?.slice(pagesVisited, pagesVisited + postsPorPagina)
            .map((v, index) => (
              <Card
                id={v.videogame_id}
                idApi={v.videogame_id_api}
                name={v.videogame_name}
                image={v.videogame_image}
                rating={v.videogame_rating}
                genres={v.genres}
                platforms={v.platforms}
                release={v.videogame_release_date}
              />
            ))}
        </ul>
      </div>
    </>
  );
};

export default Videogames;
