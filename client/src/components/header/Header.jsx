import React from "react";
import LOGO from "../../assets/joystick.png";
import { Navbar } from "../navbar/Navbar";
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.containerTitle}>
       
        <img src={LOGO} alt="logo" className={styles.image}/>
        <h3 className={styles.title}>Videogames API</h3>
      </div>
      <Navbar/>
      
    </header>
  );
};

export default Header;
