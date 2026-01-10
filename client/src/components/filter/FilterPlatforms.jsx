import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterVideogamesPlatform,
  getVideogames,
} from "../../redux/actions/videogameActions";
import styles from "./Filter.module.css";

const FilterPlatforms = ({ data }) => {
  const [platform, setPlatform] = useState("");
  const dispatch = useDispatch();
  const handleChangePlatform = (e) => {
    setPlatform(e.target.value);
    e.target.value === "TODAS LAS PLATAFORMAS"
      ? dispatch(getVideogames())
      : dispatch(filterVideogamesPlatform(e.target.value));
  };

  const newArrayPlatforms = [{name: "TODAS LAS PLATAFORMAS"}, ...data]

  return (
    <select
      value={platform}
      onChange={handleChangePlatform}
      className={styles.select}
      name="platform"
    >
      {newArrayPlatforms.map(({name}) => (
        <option key={name}>{name}</option>
      ))}
    </select>
  );
};

export default FilterPlatforms;
