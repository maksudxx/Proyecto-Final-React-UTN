import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterVideogamesGenre,
  getVideogames,
} from "../../redux/actions/videogameActions";
import styles from "./Filter.module.css";

const FilterGenre = ({ props }) => {
  const [genre, setGenre] = useState("");
  const dispatch = useDispatch();
  const handleChangeGenre = (e) => {
    setGenre(e.target.value);
    console.log(genre);
    if(e.target.value === '1-Todos los generos'){
      dispatch(getVideogames())
    }else{
      dispatch(filterVideogamesGenre(e.target.value));
    }
  };
  return (
    <select
      name="genre"
      value={genre}
      onChange={handleChangeGenre}
      className={styles.select}
    >
      
      {props.map((g, index) => (
       
        <option key={index}>{g.genre_name}</option>
      ))}
    </select>
  );
};

export default FilterGenre;
