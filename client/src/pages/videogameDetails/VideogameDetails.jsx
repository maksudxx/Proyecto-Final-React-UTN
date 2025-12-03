import styles from "./VideogameDetails.module.css";
import { useVideogameDetails } from "../../hooks/useVideogameDetails";
import Spinner from "../../components/spinner/Spinner";

const VideogameDetails = ({ isAuthenticated }) => {
  const { isLoading, videogame, deleteGame } = useVideogameDetails();

  if (isLoading) {
    return <Spinner />;
  }

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
  return (
    <>
      {
        <div className={styles.container}>
          <p className={styles.titleGame}>{videogame_name}</p>
          <div className={styles.containerAbout}>
            <img
              src={videogame_image}
              alt={videogame_name}
              className={styles.img}
            />
            <div className={styles.containerInfo}>
              <h3 className={styles.titleAbout}>Acerca de</h3> <br />
              <p>{videogame_description}</p>
            </div>
          </div>
          <div className={styles.containerInfo2}>
            <div className={styles.div}>
              <p className={styles.titleInfo}>Fecha de Lanzamiento</p>
              <p className={styles.info}>{videogame_release_date}</p>
            </div>
            <div className={styles.div}>
              <p className={styles.titleInfo}>Tags</p>
              <p className={styles.info}>
                {tags?.map((t) => (
                  <p className={styles.nameInfo}>{t.tag_name}</p>
                ))}
              </p>
            </div>
            <div className={styles.div}>
              <p className={styles.titleInfo}>Rating</p>
              <p className={styles.info}>{videogame_rating}</p>
            </div>
            <div className={styles.div}>
              <p className={styles.titleInfo}>Desarrollador</p>
              {developers?.map((developer) => (
                <p className={styles.info}>{developer.developer_name}</p>
              ))}
            </div>
          </div>
          <div className={styles.containerPlatformAndRequirements}>
            <br />
            <h3>
              <u>Plataformas</u>
            </h3>
            <br />
            {platforms?.map((v) => (
              <div className={styles.requirements}>
                <li>{v.platform_name}</li>
              </div>
            ))}
          </div>
          {isAuthenticated ? (
            <div className={styles.btnContainer}>
              <button>Modificar</button>
              <button onClick={() => deleteGame(videogame_id)}>Eliminar</button>
            </div>
          ) : null}
        </div>
      }
    </>
  );
};

export default VideogameDetails;
