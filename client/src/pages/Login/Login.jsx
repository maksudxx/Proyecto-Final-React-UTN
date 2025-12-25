import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/actions/authActions";
import { toast } from "react-toastify";
import styles from "./Login.module.css";

export const Login = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    user_email: "",
    user_password: "",
  });

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    // Despachamos la acción
    const result = await dispatch(loginAction(input));
    if (result.success) {
      toast.success("Bienvenido");
    } else {
      toast.error(
        typeof result.msg === "string" ? result.msg : JSON.stringify(result.msg)
      );
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
