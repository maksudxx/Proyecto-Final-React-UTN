import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Register.module.css";

const Register = ({ setAuth }) => {
  const [input, setInput] = useState({
    user_name: "",
    user_email: "",
    user_password: "",
  });
  const handleInputChange = function (e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      let { user_name, user_email, user_password } = input;
      let data = {
        user_name,
        user_email,
        user_password,
      };

      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const parseRes = await response.json();
      localStorage.setItem("token", parseRes.token);
      setAuth(true);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className={styles.container}>
      <p className={styles.title}>CREAR UNA NUEVA CUENTA</p>
      <form onSubmit={onSubmitForm} className={styles.containerForm}>
        <div className={styles.containerInput}>
          <span className={styles.spanInput}>Nombre: </span>
          <input
            type="text"
            name="user_name"
            placeholder="nombre de usuario"
            value={input.user_name}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.containerInput}>
          <span className={styles.spanInput}>Email: </span>
          <input
            type="email"
            name="user_email"
            placeholder="email"
            value={input.user_email}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.containerInput}>
          <span className={styles.spanInput}>Contraseña: </span>
          <input
            type="password"
            name="user_password"
            placeholder="password"
            value={input.user_password}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <input type="submit" value="Registrarse" className={styles.button} />
      </form>
      <div>
        <span className={styles.spanInfo}>Esta registrado? </span>{" "}
        <Link to="/login" className={styles.link}>
          Inicie Sesion
        </Link>
      </div> <br />
      <Link to="/videogames" className={styles.link}>
        {" "}
        Volver a lista de juegos{" "}
      </Link>
    </div>
  );
};

export default Register;
