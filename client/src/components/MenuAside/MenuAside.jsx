import { useEffect, useState } from "react";
import { genresList, platformsList } from "../../data/DataMenu";
import styles from "./MenuAside.module.css";
import { useDispatch } from "react-redux";
import {
  filterVideogamesGenre,
  filterVideogamesPlatform,
  getVideogames,
} from "../../redux/actions/videogameActions";

export const MenuAside = () => {
  const [genre, setGenre] = useState("");
  const [platform, setPlatform] = useState("");
  const dispatch = useDispatch();

  const searchGenre = (name) => {
    setGenre(name);
    dispatch(filterVideogamesGenre(name));
  };

  const searchPlatform = (name) => {
    setPlatform(name);
    dispatch(filterVideogamesPlatform(name));
  };

  const getVideogamesAll = () => {
    dispatch(getVideogames());
  };

  const { data: datagenres } = genresList;
  const { data: dataPlatforms } = platformsList;

  return (
    <aside className={styles.menuContainer}>
      <div>
        <p className={styles.title} onClick={() => getVideogamesAll()}>
          INICIO
        </p>
      </div>
      <div>
        <p className={styles.title}>REVIEWS</p>
      </div>
      <div>
        <p className={styles.title}>GENEROS</p>
        {datagenres.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className={styles.item}
            onClick={() => searchGenre(name)}
          >
            <p className={styles.option}>
              <span>
                <Icon />
              </span>{" "}
              {name}
            </p>
          </div>
        ))}
      </div>
      <div>
        <p className={styles.title}>PLATAFORMAS</p>
        {dataPlatforms.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className={styles.item}
            onClick={() => searchPlatform(name)}
          >
            <p className={styles.option}>
              <span>
                <Icon />
              </span>{" "}
              {name}
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
};
