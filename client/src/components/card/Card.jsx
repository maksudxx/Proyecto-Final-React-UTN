import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { AiOutlineStar } from "react-icons/ai";

const Card = ({
  id,
  idApi,
  name,
  image,
  rating,
  genres,
  platforms,
  release,
}) => {
  let date = new Date(release);
  const formatDate = (date) => {
    let formatted_date =
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    return formatted_date;
  };

  return (
    <li className={styles.containerCard} key={id}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.containerInformation}>
        <div className={styles.platforms}>
          <div className={styles.containerInfo}>
            {platforms?.map((p) => (
              <p className={styles.namePlatform}>{p.platform_name}</p>
            ))}
          </div>
        </div>
        <h3 className={styles.titleGame}>{name}</h3>
        <div className={styles.info}>
          <p>Fecha de Lanzamiento: </p>
          <p>{formatDate(date)}</p>
        </div>
        <div className={styles.info}>
          <p>Generos:</p>
          <div className={styles.info}>
            {genres?.map((g) => (
              <p className={styles.namePlatform}>{g.genre_name}</p>
            ))}
          </div>
        </div>
        <div className={`${styles.info} ${styles.end}`}>
          <p>Calificacion: </p>
          <div className={styles.calification}>
            <p>{rating}</p>
            <AiOutlineStar className={styles.star} />
          </div>
        </div>
        {/* <Link to={`/videogames/${id}`}>Ver mas...</Link> */}
      </div>
    </li>
  );
};

export default Card;
