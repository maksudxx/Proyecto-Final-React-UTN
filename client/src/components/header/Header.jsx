import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { CgGames } from "react-icons/cg";
import Search from "../search/Search";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
const Header = ({ isAuthenticated }) => {
  const [click, setClick] = useState(false);

  const changeClick = () => {
    setClick(!click);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.menuResponsive}>
        <FaBars />
      </div>
      <Link to="/" className={styles.logo}>
        <CgGames color="white" size={150} />
      </Link>
      <Search />
      <div className={styles.containerOptions}>
        {!isAuthenticated ? (
          <Link className={styles.option} to="/login">
            Iniciar Sesión
          </Link>
        ) : (
          <Link className={styles.option} to="/newGame">
            Agregar juego
          </Link>
        )}
        <Link className={styles.option} to="/about">
          Acerca de
        </Link>
      </div>
    </div>
  );
};

export default Header;
