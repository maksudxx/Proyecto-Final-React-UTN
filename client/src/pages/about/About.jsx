import styles from "./About.module.css";

const TECH_STACK = [
  "React", "CSS Modules", "Redux", "NodeJs", "Express", 
  "Sequelize ORM", "PostgreSQL", "JWT", "Cloudinary"
];

const SECTIONS_INFO = [
  {
    title: "Lista de juegos",
    content: "Visualiza tarjetas con juegos de la base de datos. Incluye detalles, búsqueda automática y filtros por plataformas o géneros."
  },
  {
    title: "Agregar un juego",
    content: "Formulario para crear juegos propios. Requiere registro previo para almacenar la información en la base de datos."
  },
  {
    title: "Gestión de juegos",
    content: "Funcionalidades completas para modificar o eliminar registros existentes en la aplicación."
  },
  {
    title: "Autenticación",
    content: "Sistema de registro e inicio de sesión para gestionar permisos de creación de contenido."
  }
];

export const About = () => {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Acerca de "Videogames API" (V1.0)</h1>
        <div className={styles.imageWrapper}>
          <img
            src="https://res.cloudinary.com/djh4udgqb/image/upload/v1765769562/fondoabout_xdq0um.jpg"
            alt="Personajes de videojuegos"
            className={styles.image}
          />
        </div>
      </header>

      <section className={styles.containerInformation}>
        <div className={styles.intro}>
          <p>
            Página desarrollada por <strong>Facundo Maksud</strong> con fines educativos. 
            Esta aplicación consume la API de{" "}
            <a href="https://rawg.io/" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Rawg.io
            </a>.
          </p>
          
          <h3>Tecnologías utilizadas:</h3>
          <ul className={styles.techList}>
            {TECH_STACK.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <h2 className={styles.title2}>Estructura de la aplicación</h2>
        
        <div className={styles.gridSections}>
          {SECTIONS_INFO.map((section) => (
            <section key={section.title} className={styles.sectionCard}>
              <h3 className={styles.subTitle}>{section.title}</h3>
              <p>{section.content}</p>
            </section>
          ))}
        </div>
      </section>
    </article>
  );
};