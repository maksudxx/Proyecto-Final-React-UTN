import { useVideogame } from "../../hooks/useVideogameForm";
import styles from "./NewVideogame.module.css";

const NewVideogame = () => {
  const {
    handleCheckboxChange,
    handleInputChange,
    handleSubmit,
    platforms,
    genres,
    input
  } = useVideogame();
  
  return (
    <div className={styles.container}>
      <p className={styles.title}>PUBLICAR UN NUEVO JUEGO</p>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.containerInput}>
          <br />
          <p>Nombre del juego:</p>
          <input
            type="text"
            name="videogame_name"
            value={input.videogame_name}
            placeholder="Ingrese nombre"
            onChange={handleInputChange}
            className={styles.input}
            required="true"
          />
        </div>
        <div className={styles.containerInput}>
          <p>Descripcion:</p>
          <input
            type="text"
            name="videogame_description"
            value={input.videogame_description}
            placeholder="Ingrese una descripcion"
            onChange={handleInputChange}
            className={styles.input}
            required="true"
          />
        </div>
        <div className={styles.containerInput}>
          <p>Fecha de lanzamiento: </p>
          <input
            type="date"
            name="videogame_release_date"
            value={input.videogame_release_date}
            onChange={handleInputChange}
            className={styles.input}
            required="true"
          />
        </div>

        <div className={styles.containerInput}>
          <p>Rating:</p>
          <input
            type="number"
            name="videogame_rating"
            value={input.videogame_rating}
            onChange={handleInputChange}
            className={styles.input}
            required="true"
          />
        </div>

        <div className={styles.containerInput}>
          <p>Imagen: </p>
          <input
            type="text"
            name="videogame_image"
            value={input.videogame_image}
            disabled={true}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <p className={styles.titleCkeckbox}>Generos </p>
        <div className={styles.containerCheckbox}>
          {genres.map((g, index) => (
            <div key={index} className={styles.checkbox}>
              <p className={styles.nameCheck}>{g.genre_name}</p>
              <input
                type="checkbox"
                name="genres"
                value={g.genre_id}
                onChange={(e) => handleCheckboxChange(e, "arrayGenres")}
              />
            </div>
          ))}
        </div>
        <br />
        <p>Plataformas</p>
        <div className={styles.containerCheckbox}>
          {platforms.map((plat, index) => (
            <div key={index} className={styles.checkbox}>
              <p className={styles.nameCheck}>{plat.platform_name}</p>
              <input
                type="checkbox"
                name="platforms"
                value={plat.platform_id}
                onChange={(e) => handleCheckboxChange(e, "arrayPlatforms")}
              />
            </div>
          ))}
        </div>

        <input type="submit" value="Guardar" className={styles.button} />
        <br />
      </form>
      <br />
      <br />
    </div>
  );
};

export default NewVideogame;
