import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../redux/actions/authActions";
import styles from "./Sesion.module.css";
import { confirmToast } from "../../utils/confirmToast";
export const Sesion = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated || !user) return null;
  return (
    <div className={styles.container}>
      <span className={styles.containerLogin}>
        <span>Bienvenido {user.user_name}</span>
        <button
          onClick={() =>
            confirmToast({
              text: "¿Desea cerrar esta sesión?",
              onConfirm: () => dispatch(logoutAction()),
            })
          }
          className={styles.buttonLogout}
        >
          Cerrar sesion
        </button>
      </span>
    </div>
  );
};
