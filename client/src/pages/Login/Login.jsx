import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = ({ setAuth }) => {
  const [input, setInput] = useState({
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

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      let { user_email, user_password } = input;
      let data = { user_email, user_password };
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const parseRes = await response.json();
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        alert("Bienvenido");
      } else {
        setAuth(false);
        alert(JSON.stringify(parseRes));
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>INICIAR SESION</p>
      <form onSubmit={onSubmitLogin} className={styles.containerForm}>
        <div className={styles.containerInput}>
          <span className={styles.spanInput}>Email:</span>
          <input
            type="text"
            name="user_email"
            value={input.user_email}
            onChange={handleInputChange}
            placeholder="example@mail.com"
            className={styles.input}
          />
        </div>

        <div className={styles.containerInput}>
          <span className={styles.spanInput}>Contraseña: </span>
          <input
            type="password"
            name="user_password"
            value={input.user_password}
            onChange={handleInputChange}
            placeholder="**********"
            className={styles.input}
          />
        </div>
        <input type="submit" value="Iniciar Sesion" className={styles.button} />
      </form>
      <div>
        <span className={styles.spanInfo}>No estas registrado? </span>{" "}
        <Link to="/register" className={styles.link}>
          Registrate
        </Link>
      </div>
      <br />

      <Link to="/" className={styles.link}>
        Volver atras
      </Link>
    </div>
  );
};

export default Login;
