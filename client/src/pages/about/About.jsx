import React from "react";
import styles from "./About.module.css";
import IMGABOUT from "../../assets/fondoabout.jpg";

const About = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Acerca de "Videogames API"</p>
      <img src={IMGABOUT} alt="personajes" className={styles.image} />
      <div className={styles.containerInformation}>
        <p>
          Aplicacion desarrollada por Facundo Maksud con fines educativos para
          el proyecto final del bootcamp de ReactJs dictado por la UTN. Esta
          aplicacion consume una la api de{" "}
          <a href="https://rawg.io/" target="_blank">
            Rawg.io
          </a>{" "}
          la cual la informacion es gurdada en una Base de datos. Las
          tecnologias utilizadas para este proyecto para complementar con lo
          visto en el curso fueron:{" "}
          <span className={styles.p}>
            Redux, NodeJs, Express, Sequelize ORM, PostgreSQL
          </span>
        </p>

        <br />
        <p className={styles.title2}>
          Las partes que componen esta pagina son:{" "}
        </p>
        <br />
        <ul>
          <li className={styles.li}>
            <p className={styles.subTitle}>Landing page o inicio: </p>
            <p>la misma muestra la presentacion del proyecto</p>
          </li>{" "}
          <br />
          <li className={styles.li}>
            <p className={styles.subTitle}>Lista de juegos:</p>
            <p>
              {" "}
              En esta seccion se muestra unas tarjetas con todos los juegos que
              estan almacenados en la base de datos. en esta seccion podemos ver
              la informacion detallada de cada juego al presionar sobre la
              imagen o el titulo de la misma. Tambien tenemos una barra de
              busqueda, la cual al ingresar el nombre del juego automaticamente
              lo busca. Por ultimo tenemos los filtros por plataformas y generos
              los cuales hace lo anteriormente mencionado traer todos los juegos
              de determinada plataforma o genero
            </p>
          </li>
          <br />
          <li className={styles.li}>
            <p className={styles.subTitle}>Agregar un juego:</p>{" "}
            <p>
              En esta seccion podemos crear o agregar nuestro propio juego
              llenando un formulario. este juego se almacenara en la base de
              datos de la aplicacion y se mostrara una vaz guardado en la lista
              de juegos
            </p>
          </li>
          <br />
          <li className={styles.li}>
            <p className={styles.subTitle}>Iniciar Sesion: </p>
            <p></p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
