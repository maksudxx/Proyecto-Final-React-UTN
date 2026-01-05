import { Redirect } from "react-router-dom";
import SelectForm from "../../components/SelectForm/SelectForm";
import { Spinner } from "../../components/spinner/Spinner";
import { useVideogame } from "../../hooks/useVideogameForm";
import styles from "./Formvideogame.module.css";

export const FormVideogame = ({ isAuthenticated, title }) => {
  // Si no está autenticado, redirigir
  if (!isAuthenticated) return <Redirect to="/" />;

  const {
    handleImageUpload,
    handleInputChange,
    handleSelectChange,
    handleSubmit,
    selectedGenres,
    selectedPlatforms,
    selectedTags,
    input,
    genreOptions,
    platformsOptions,
    tagsOptions,
    loading,
    imagePreview,
    isEdit,
  } = useVideogame();

  const {
    videogame_name,
    videogame_description,
    videogame_rating,
    videogame_release_date,
    developers,
  } = input;
  
  return (
    <div className={styles.container}>
      {/* Ahora 'title' mostrará el texto correcto */}
      <p className={styles.title}>{title}</p>

      <form className={styles.form} onSubmit={handleSubmit}>
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

        <div className={styles.containerInput}>
          <p>Fecha de lanzamiento:</p>
          <input
            type="date"
            name="videogame_release_date"
            value={videogame_release_date}
            onChange={handleInputChange}
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
            value={videogame_rating}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="del 1 al 5"
            required
          />
        </div>

        <div className={styles.containerInput}>
          <p>Desarrollador/es:</p>
          <input
            type="text"
            name="developers"
            value={developers}
            placeholder="Ingrese desarrollador/es"
            onChange={handleInputChange}
            className={styles.input}
            required
          />
        </div>

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

        <SelectForm
          title="Géneros"
          option={genreOptions}
          value={selectedGenres}
          field="arrayGenres"
          handleSelectChange={handleSelectChange}
        />

        <SelectForm
          title="Plataformas"
          option={platformsOptions}
          value={selectedPlatforms}
          field="arrayPlatforms"
          handleSelectChange={handleSelectChange}
        />

        <SelectForm
          title="Tags"
          option={tagsOptions}
          value={selectedTags}
          field="arrayTags"
          handleSelectChange={handleSelectChange}
        />

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

          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className={styles.imgPreview}
            />
          )}
        </div>
        <input
          type="submit"
          value={isEdit ? "Guardar Cambios" : "Crear Juego"}
          className={styles.button}
        />
      </form>
    </div>
  );
};
