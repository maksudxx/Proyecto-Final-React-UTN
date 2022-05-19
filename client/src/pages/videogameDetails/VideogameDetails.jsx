import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getVideogameId } from "../../redux/actions/videogameActions";
import styles from "./VideogameDetails.module.css";
import { Loader } from "../../components/loader/Loader";

const VideogameDetails = () => {
  const videogame = useSelector((state) => state.videogame.videogame);
  const dispatch = useDispatch();
  const { videogame_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    dispatch(getVideogameId(videogame_id));
    setIsLoading(false);
  }, [dispatch, videogame_id]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <h5 className={styles.routes}>/videogames/{videogame.name}</h5>

          <p className={styles.titleGame}>{videogame.name}</p>

          <div className={styles.containerAbout}>
            <img
              src={videogame.background_image}
              alt={videogame.name}
              className={styles.img}
            />

            <div className={styles.containerInfo}>
              <h3 className={styles.titleAbout}>Acerca de</h3> <br />
              <p>{videogame.description_raw}</p>
            </div>
          </div>

          <div className={styles.containerInfo2}>
            <div className={styles.div}>
              <p className={styles.titleInfo}>Fecha de Lanzamiento</p>
              <p className={styles.info}>{videogame.released}</p>
            </div>
            <div className={styles.div}>
              <p className={styles.titleInfo}>Tags</p>
              <p className={styles.info}>
                {videogame.tags?.map((t) => (
                  <p className={styles.nameInfo}>{t.name}</p>
                ))}
              </p>
            </div>
            <div className={styles.div}>
              <p className={styles.titleInfo}>Rating</p>
              <p className={styles.info}>{videogame.rating}</p>
            </div>
            <div className={styles.div}>
              <p className={styles.titleInfo}>Desarrollador</p>
              {videogame.developers?.map((developer) => (
                <p className={styles.info}>{developer.name}</p>
              ))}
            </div>
          </div>
          <div className={styles.containerPlatformAndRequirements}>
            <br />
            <h3>
              <u>Plataformas y Requerimientos</u>
            </h3>
            <br />
            {videogame.platforms?.map((v) => (
              <div className={styles.requirements}>
                <li>{v.platform.name}</li>
                <p>{v.requirements.minimum}</p>
                <p>{v.requirements.recommended}</p>
              </div>
            ))}
          </div>
          <br />
        </div>
      )}
    </>
  );
};

export default VideogameDetails;
