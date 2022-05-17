import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      <header className={styles.container}>
        {" "}
        <Link to="/videogames" className={styles.link}>
          <div className={styles.containerTitle}>
            <img src={LOGO} alt="logo" className={styles.image} />
            <h3 className={styles.title}>Videogames API</h3>
          </div>
        </Link>
        <Navbar isAuthenticated={isAuthenticated} />
      </header>
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
    </div>
  );
};

export default Header;
