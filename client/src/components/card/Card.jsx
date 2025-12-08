import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { AiOutlineStar } from "react-icons/ai";

const Card = ({ id, name, image, rating, genres, platforms, release }) => {
  let date = new Date(release);
  const formatDate = (date) => {
    let formatted_date =
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    return formatted_date;
  };

  return (
    <li className={styles.containerCard}>
      <div>
        <Link to={`/videogames/${id}`} className={styles.link}>
          <img src={image} alt={name} className={styles.image} />
          <p className={styles.titleGame}>{name}</p>
        </Link>
        <div className={styles.containerInfo}>
          <div className={styles.info}>
            <p className={styles.pagraph}>Fecha de Lanzamiento: </p>
            <p>{formatDate(date)}</p>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.info}>
            <p className={styles.pagraph}>Generos:</p>
            <div className={styles.info}>
              {genres?.map((g) => (
                <p className={styles.namePlatform}>{g.genre_name}</p>
              ))}
            </div>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.info}>
            <p className={styles.pagraph}>Calificacion: </p>
            <div className={styles.calification}>
              <AiOutlineStar className={styles.star} />
              <p>{rating}</p>
            </div>
          </div>
          <div className={styles.separator}></div>
          <div className={`${styles.info} ${styles.wrap}`}>
            <p className={styles.pagraph}>Plataformas: </p>
            {platforms?.map((p) => (
              <p className={styles.namePlatform}>{p.platform_name}</p>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
