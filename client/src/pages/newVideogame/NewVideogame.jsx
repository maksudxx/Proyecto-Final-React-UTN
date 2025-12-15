import SelectForm from "../../components/SelectForm/SelectForm";
import Spinner from "../../components/spinner/Spinner";
import { useVideogame } from "../../hooks/useVideogameForm";
import styles from "./NewVideogame.module.css";

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

const NewVideogame = () => {
  const {
    handleImageUpload,
    handleInputChange,
    handleSelectChange,
    handleSubmit,
    input,
    genreOptions,
    platformsOptions,
    loading,
  } = useVideogame();

  const {
    videogame_name,
    videogame_description,
    videogame_rating,
    videogame_image,
    videogame_release_date,
  } = input;

  return (
    <div className={styles.container}>
      <p className={styles.title}>PUBLICAR UN NUEVO JUEGO</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Nombre del juego */}
        <div className={styles.containerInput}>
          <p>Nombre del juego:</p>
          <input
            type="text"
            name="videogame_name"
            value={videogame_name}
            placeholder="Ingrese nombre"
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </div>

        {/* Descripción */}
        <div className={styles.containerInput}>
          <p>Descripción:</p>
          <input
            type="text"
            name="videogame_description"
            value={videogame_description}
            placeholder="Ingrese una descripción"
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </div>

        {/* Fecha de lanzamiento */}
        <div className={styles.containerInput}>
          <p>Fecha de lanzamiento:</p>
          <input
            type="date"
            name="videogame_release_date"
            value={videogame_release_date}
            onChange={handleInputChange}
            onFocus={(e) => e.target.showPicker?.()}
            className={styles.input}
            required
          />
        </div>

        {/* Rating */}
        <div className={styles.containerInput}>
          <p>Rating:</p>
          <input
            type="number"
            min={1}
            max={5}
            name="videogame_rating"
            value={videogame_rating}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="del 1 al 5"
            required
          />
        </div>

        {/* Imagen principal */}
        <div className={`${styles.containerInput} ${styles.containerImage}`}>
          <p>Imagen Principal:</p>
          <input
            type="file"
            name="videogame_image"
            onChange={handleImageUpload}
            className={styles.inputFile}
            disabled={loading}
          />

          {loading && (
            <div className={styles.spinnerContainer}>
              <Spinner />
              <span>Subiendo imagen...</span>
            </div>
          )}

          {!loading && videogame_image && (
            <img
              src={
                videogame_image.startsWith("http")
                  ? videogame_image
                  : `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${videogame_image}`
              }
              alt="Preview"
              className={styles.imgPreview}
            />
          )}
        </div>

        {/* Select de géneros */}
        <SelectForm
          title="Géneros"
          option={genreOptions}
          field="arrayGenres"
          handleSelectChange={handleSelectChange}
        />

        {/* Select de plataformas */}
        <SelectForm
          title="Plataformas"
          option={platformsOptions}
          field="arrayPlatforms"
          handleSelectChange={handleSelectChange}
        />

        {/* Botón enviar */}
        <input type="submit" value="Guardar" className={styles.button} />
      </form>
    </div>
  );
};

export default NewVideogame;
