import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterVideogamesGenre,
  getVideogames,
} from "../../redux/actions/videogameActions";
import styles from "./Filter.module.css";

const FilterGenre = ({ data }) => {
  const [genre, setGenre] = useState("");
  const dispatch = useDispatch();
  const handleChangeGenre = (e) => {
    setGenre(e.target.value);
    e.target.value === "TODOS LOS GENEROS"
      ? dispatch(getVideogames())
      : dispatch(filterVideogamesGenre(e.target.value));
  };
  const newArrayGenre = [{ name: "TODOS LOS GENEROS" }, ...data];

  return (
    <select
      name="genre"
      value={genre}
      onChange={handleChangeGenre}
      className={styles.select}
    >
      {newArrayGenre.map(({ name }) => (
        <option key={name}>{name}</option>
      ))}
    </select>
  );
};

export default FilterGenre;
