import React, { useEffect } from "react";
import Search from "../search/Search";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../redux/actions/genreActions";
import { getPlatforms } from "../../redux/actions/platformAction";
import FilterGenre from "../filter/FilterGenre";
import FilterPlatforms from "../filter/FilterPlatforms";
import styles from "./SearchBar.module.css"

const SearchBar = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genre.genres);
  const platforms = useSelector((state) => state.platform.platforms);
  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <FilterGenre props={genres} />
      <FilterPlatforms props={platforms} />
      <Search />
    </div>
  );
};

export default SearchBar;
