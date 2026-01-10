import ReactPaginate from "react-paginate";
import styles from "./Videogames.module.css";
import Card from "../../components/card/Card";
import GameNotFound from "../../components/gameNotFound/GameNotFound";
import SearchBar from "../../components/searchbar/SearchBar";
import { useVideogameList } from "../../hooks/useVideogameList";

import Grid from "@mui/material/Grid";
import { MenuAside } from "../../components/MenuAside/MenuAside";

export const Videogames = () => {
  const { changePage, pageCount, pagesVisited, videogames, postsPorPagina } =
    useVideogameList();

  return (
    <>
      <Grid container spacing={2}>
        <Grid
          size={{ md: 2 }}
          sx={{ display: { xs: "none", md: "block" } }}
          className={styles.asideGrid}
        >
          <MenuAside />
        </Grid>
        <Grid size={{ xs: 12, md: 10 }} className={styles.container}>
          <SearchBar />
          <p className={styles.title}>LISTA DE JUEGOS</p>
          <ul className={styles.containerCards}>
            {videogames?.length > 0 ? (
              videogames
                ?.slice(pagesVisited, pagesVisited + postsPorPagina)
                .map((v) => (
                  <Card
                    key={v.videogame_name}
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
            ) : (
              <GameNotFound />
            )}
          </ul>
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
        </Grid>
      </Grid>
    </>
  );
};
