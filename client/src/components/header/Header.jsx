import React, { useState, useEffect } from "react";
import LOGO from "../../assets/joystick.png";
import { Navbar } from "../navbar/Navbar";
import styles from "./Header.module.css";

const Header = ({ setAuth, isAuthenticated }) => {
  console.log(isAuthenticated);
  const [name, setName] = useState("");
  async function getName() {
    try {
      const response = await fetch("http://localhost:3001/user", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();
      setName(parseRes.user_name);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    getName();
  }, []);
  return (
    <div className={styles.header}>
      {isAuthenticated === true ? (
        <span className={styles.containerLogin}>
          <span>Bienvenido {name}</span>
          <button
            onClick={() => {
              setAuth(false);
            }}
            className={styles.buttonLogout}
          >
            Cerrar sesion
          </button>
        </span>
      ) : null}
      <header className={styles.container}>
        <div className={styles.containerTitle}>
          <img src={LOGO} alt="logo" className={styles.image} />
          <h3 className={styles.title}>Videogames API</h3>
        </div>
        <Navbar isAuthenticated={isAuthenticated} />
      </header>
      
    </div>
  );
};

export default Header;
