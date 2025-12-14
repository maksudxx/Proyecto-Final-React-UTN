import SelectForm from "../../components/SelectForm/SelectForm";
import { useVideogame } from "../../hooks/useVideogameForm";
import styles from "./NewVideogame.module.css";
const NewVideogame = () => {
  const {
    handleInputChange,
    handleSelectChange,
    handleSubmit,
    input,
    genreOptions,
    platformsOptions,
  } = useVideogame();
  
  return (
    <div className={styles.container}>
      <p className={styles.title}>PUBLICAR UN NUEVO JUEGO</p>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.containerInput}>
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
            onFocus={(e) => e.target.showPicker?.()}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.containerInput}>
          <p>Rating:</p>
          <input
            type="number"
            min={1}
            max={5}
            name="videogame_rating"
            value={input.videogame_rating}
            onChange={handleInputChange}
            className={styles.input}
            required="true"
            placeholder="del 1 al 5"
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

        <SelectForm
          title={"Generos"}
          option={genreOptions}
          field="arrayGenres"
          handleSelectChange={handleSelectChange}
        />
        
        <SelectForm
          title={"Plataformas"}
          option={platformsOptions}
          field="arrayPlatforms"
          handleSelectChange={handleSelectChange}
        />

        <input type="submit" value="Guardar" className={styles.button} />
      </form>
    </div>
  );
};

export default NewVideogame;
