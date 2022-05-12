import React, { useState, useEffect } from "react";
import { getGenres } from "../../redux/actions/genreActions";
import { getPlatforms } from "../../redux/actions/platformAction";
import { useSelector, useDispatch } from "react-redux";
import styles from "./NewVideogame.module.css";
import { createVideogame } from "../../redux/actions/videogameActions";
import {useHistory } from 'react-router-dom'
import IMGPRUEBA from "../../assets/prueba_post.jpg"

const NewVideogame = () => {
  const [input, setInput] = useState({
    videogame_name: "",
    videogame_description: "",
    videogame_release_date: "",
    videogame_rating: "",
    videogame_image:IMGPRUEBA,
  });

  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genre.genres);
  const platforms = useSelector((state) => state.platform.platforms);
  const history = useHistory();
  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, [dispatch]);

  const handleInputChange = function (e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  let arrayGenres = [];
  const handleChangeGenre = (e) => {
    arrayGenres.push(e.target.value);
    console.log(arrayGenres);
  };

  const arrayPlatforms = [];
  const handleChangePlatform = (e) => {
    arrayPlatforms.push(e.target.value);
    console.log(arrayPlatforms);
  };

  const handleSubmit = (e) => {
    let {
      videogame_name,
      videogame_description,
      videogame_release_date,
      videogame_rating,
      videogame_image,
    } = input;
    e.preventDefault();
    let data = {
      videogame_name,
      videogame_description,
      videogame_release_date,
      videogame_rating,
      videogame_image,
      arrayGenres,
      arrayPlatforms,
    };

    dispatch(createVideogame(data))
    alert('Videojuego creado..!')
    setTimeout(() =>{
      history.push('/videogames')
    },1000)
  };
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
        <p className={styles.titleCkeckbox}>Generos: </p>
        <div className={styles.containerCheckbox}>
          {genres.map((g, index) => (
            <div key={index} className={styles.checkbox}>
              <p className={styles.nameCheck}>{g.genre_name}</p>
              <input
                type="checkbox"
                name="genres"
                value={g.genre_id}
                onChange={handleChangeGenre}
              />
            </div>
          ))}
        </div>
        <p>Plataformas</p>
        <div className={styles.containerCheckbox}>
          {platforms.map((plat, index) => (
            <div key={index} className={styles.checkbox}>
              <p className={styles.nameCheck}>{plat.platform_name}</p>
              <input
                type="checkbox"
                name="platforms"
                value={plat.platform_id}
                onChange={handleChangePlatform}
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
