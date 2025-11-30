import NOTFOUND from "../../assets/Game-not-found.webp";
import styles from "./GameNotFound.module.css";

const GameNotFound = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Videojuego no encontrado</h1>
      </div>
      <img src={NOTFOUND} alt="error" className={styles.image} />
    </div>
  );
};

export default GameNotFound;
