import { IoSearch } from "react-icons/io5";

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
          placeholder="Buscar..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          <IoSearch size={50} style={{color:"#ffffff2f"}}/>
        </button>
      </div>
    </form>
  );
};

export default Search;
