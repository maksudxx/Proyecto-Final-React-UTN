import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterVideogamesPlatform,
  getVideogames,
} from "../../redux/actions/videogameActions";
import styles from "./Filter.module.css";

const FilterPlatforms = ({ props }) => {
  const [platform, setPlatform] = useState("");
  const dispatch = useDispatch();
  const handleChangePlatform = (e) => {
    setPlatform(e.target.value);
    e.target.value === "1-Todas las plataformas"
      ? dispatch(getVideogames())
      : dispatch(filterVideogamesPlatform(e.target.value));
  };
  return (
    <select
      value={platform}
      onChange={handleChangePlatform}
      className={styles.select}
      name="platform"
    >
      {props?.map((p, index) => (
        <option key={index}>{p.platform_name}</option>
      ))}
    </select>
  );
};

export default FilterPlatforms;
