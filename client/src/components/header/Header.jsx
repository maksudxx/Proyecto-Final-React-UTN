import React from "react";
import LOGO from "../../assets/logo.gif";
import { Navbar } from "../navbar/Navbar";
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.containerTitle}>
        <h2 className={styles.title}>Videogames APP</h2>
        <img src={LOGO} alt="logo" className={styles.image}/>
      </div>
      <Navbar/>
    </header>
  );
};

export default Header;
