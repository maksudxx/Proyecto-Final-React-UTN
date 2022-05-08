import React from "react";
import { FcSearch } from "react-icons/fc";
import { useState, useEffect } from "react";
import {
  getVideogames,
  getVideogameName,
} from "../../redux/actions/videogameActions";
import { useDispatch } from "react-redux";
import styles from "./Search.module.css";

const Search = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  useEffect(() => {
    if (name) {
      dispatch(getVideogameName(name));
    } else {
      dispatch(getVideogames());
    }
  }, [dispatch, name]);

  return (
    <form className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Buscar"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          <FcSearch size={20} />
        </button>
      </div>
    </form>
  );
};

export default Search;
