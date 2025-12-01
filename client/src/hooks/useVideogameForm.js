import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getGenres } from "../redux/actions/genreActions";
import { getPlatforms } from "../redux/actions/platformAction";
import { createVideogame } from "../redux/actions/videogameActions";
import IMGPRUEBA from "../../../client/src/assets/prueba_post.jpg";

export const useVideogame = () => {
  const [input, setInput] = useState({
    videogame_name: "",
    videogame_description: "",
    videogame_release_date: "",
    videogame_rating: "",
    videogame_image: IMGPRUEBA,
    arrayGenres: [],
    arrayPlatforms: [],
    arrayTags: [],
    arrayDevelopers: [],
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const genres = useSelector((state) => state.genre.genres);
  const platforms = useSelector((state) => state.platform.platforms);

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

  const handleCheckboxChange = (e, field) => {
    const { value, checked } = e.target;
    setInput((prev) => {
      const updatedArray = checked
        ? [...prev[field], value]
        : prev[field].filter((id) => id !== value);
      return { ...prev, [field]: updatedArray };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(createVideogame(input));
    if (result.message === "el juego ya existe en la base de datos") {
      alert(result.message);
      return;
    }

    alert("Videojuego creado..!");
    history.push("/videogames");
  };

  return {
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
    genres,
    platforms,
    input,
  };
};
