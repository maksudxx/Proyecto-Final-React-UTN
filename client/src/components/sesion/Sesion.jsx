import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../redux/actions/authActions";
import styles from "./Sesion.module.css";
export const Sesion = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated || !user) return null;
  console.log(user)
  return (
    <div className={styles.container}>
      <span className={styles.containerLogin}>
        <span>Bienvenido {user.user_name}</span>
        <button
          onClick={() => dispatch(logoutAction())}
          className={styles.buttonLogout}
        >
          Cerrar sesion
        </button>
      </span>
    </div>
  );
};
