import styles from "./VideogameDetails.module.css";
import { useVideogameDetails } from "../../hooks/useVideogameDetails";
import { confirmToast } from "../../utils/confirmToast";
import { Spinner } from "../../components/spinner/Spinner";

export const VideogameDetails = ({ isAuthenticated }) => {
  const { isLoading, videogame, deleteGame } = useVideogameDetails();

  if (isLoading) return <Spinner />;

  const {
    videogame_id,
    videogame_name,
    videogame_description,
    videogame_image,
    videogame_release_date,
    tags,
    developers,
    platforms,
    videogame_rating,
  } = videogame;

  // Obtener solo la descripción en inglés
  const [videogame_description_en] = videogame_description.split("Español");

  // Formateo de fecha
  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titleGame}>{videogame_name}</h1>

      {/* SECCION ACERCA DE*/}
      <section className={styles.containerAbout}>
        <img
          src={videogame_image}
          alt={videogame_name}
          className={styles.img}
        />

        <div className={styles.containerInfo}>
          <h2 className={styles.titleAbout}>Acerca de</h2>
          <p className={styles.description}>{videogame_description_en}</p>
        </div>
      </section>

      {/* GRID CON INFORMACIÓN EXTRA */}
      <section className={styles.containerInfoGrid}>
        {/* FILA 1 */}
        <div className={styles.infoBlock}>
          <p className={styles.titleInfo}>Fecha de Lanzamiento</p>
          <p>{formatDate(videogame_release_date)}</p>
        </div>

        <div className={styles.infoBlock}>
          <p className={styles.titleInfo}>Rating</p>
          <p>{videogame_rating}</p>
        </div>

        {/* FILA 2 */}
        <div className={styles.infoBlock}>
          <p className={styles.titleInfo}>Desarrolladores</p>
          <div className={styles.tagsList}>
            {developers?.map((dev) => (
              <span key={dev.developer_id} className={styles.tagItem}>
                {dev.developer_name}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.infoBlock}>
          <p className={styles.titleInfo}>Tags</p>
          <div className={styles.tagsList}>
            {tags?.map((tag) => (
              <span key={tag.tag_id} className={styles.tagItem}>
                {tag.tag_name}
              </span>
            ))}
          </div>
        </div>

        {/* FILA 3 */}
        <div className={styles.infoBlock}>
          <p className={styles.titleInfo}>Plataformas</p>
          <ul className={styles.platformListMini}>
            {platforms?.map((p) => (
              <li key={p.platform_id} className={styles.platformItem}>
                {p.platform_name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BOTONES DE MODIFICAR Y ELIMINAR */}
      {isAuthenticated && (
        <div className={styles.btnContainer}>
          <button className={styles.btn}>Modificar</button>
          <button
            className={`${styles.btnDelete} ${styles.btn}`}
            onClick={() =>
              confirmToast({
                text: "¿Seguro que querés eliminar este videojuego?",
                onConfirm: () => deleteGame(videogame_id),
              })
            }
          >
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
};
