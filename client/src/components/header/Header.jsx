import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { CgGames } from "react-icons/cg";
import Search from "../search/Search";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";

export const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [click, setClick] = useState(false);

  const changeClick = () => {
    setClick(!click);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.menuResponsive} onClick={changeClick}>
        <FaBars />
      </div>

      <Link to="/" className={styles.logo}>
        <CgGames color="white" size={120} />
      </Link>

      <div className={styles.search}>
        <Search />
      </div>

      <div
        className={`${styles.containerOptions} ${click ? styles.active : ""}`}
      >
        {!isAuthenticated ? (
          <Link className={styles.option} to="/login" onClick={changeClick}>
            Iniciar Sesión
          </Link>
        ) : (
          <Link className={styles.option} to="/newGame" onClick={changeClick}>
            Agregar juego
          </Link>
        )}

        <Link className={styles.option} to="/about" onClick={changeClick}>
          Acerca de
        </Link>
      </div>
    </div>
  );
};
