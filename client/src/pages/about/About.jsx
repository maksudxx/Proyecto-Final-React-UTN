import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Acerca de "Videogames API"</p>
      <img
        src="https://res.cloudinary.com/djh4udgqb/image/upload/v1765769562/fondoabout_xdq0um.jpg"
        alt="personajes"
        className={styles.image}
      />
      <div className={styles.containerInformation}>
        <p>
          Aplicacion desarrollada por Facundo Maksud con fines educativos para
          el proyecto final del bootcamp de ReactJs dictado por la UTN. Esta
          aplicacion consume la api de{" "}
          <a href="https://rawg.io/" target="_blank" className={styles.a}>
            Rawg.io
          </a>{" "}
          el cual la informacion es gurdada en una Base de datos. Las
          tecnologias y/o librerias utilizadas para este proyecto para
          complementar con lo visto en el curso fueron:{" "}
          <span className={styles.p}>
            CSS Modules, Redux, NodeJs, Express, Sequelize ORM, PostgreSQL, JWT.
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
              datos de la aplicacion y se mostrara una vez guardado en la lista
              de juegos. Aclaracion: para poder ingresar nuevos juegos tiene que
              estar logueado.
            </p>
          </li>
          <br />
          <li className={styles.li}>
            <p className={styles.subTitle}>Iniciar Sesion / Registarse: </p>
            <p>
              En esta seccion vamos a poder crearnos una cuenta para poder crear
              o agregar nuevos juegos a la BD.
            </p>
          </li>
        </ul>
      </div>
      <br />
      <br />
    </div>
  );
};

export default About;
