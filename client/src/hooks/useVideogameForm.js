import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getGenres } from "../redux/actions/genreActions";
import { getPlatforms } from "../redux/actions/platformAction";
import { createVideogame } from "../redux/actions/videogameActions";
import { useCloudinaryUpload } from "./useCloudinary";

export const useVideogame = () => {
  const [input, setInput] = useState({
    videogame_name: "",
    videogame_description: "",
    videogame_release_date: "",
    videogame_rating: "",
    videogame_image: "",
    arrayGenres: [],
    arrayPlatforms: [],
    arrayTags: [],
    arrayDevelopers: [],
  });

  const { upload, loading } = useCloudinaryUpload();
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

  const handleSelectChange = (selectedOptions, field) => {
    setInput((prev) => ({
      ...prev,
      [field]: selectedOptions ? selectedOptions.map((opt) => opt.value) : [],
    }));
  };

  const genreOptions = genres.map((g) => ({
    value: g.genre_id,
    label: g.genre_name,
  }));

  const platformsOptions = platforms.map((p) => ({
    value: p.platform_id,
    label: p.platform_name,
  }));

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    console.log("Archivo seleccionado:", file);
    if (!file) return;

    try {
      const result = await upload(file);
      setInput((prev) => ({
        ...prev,
        videogame_image: result.secure_url,
      }));
    } catch (err) {
      console.error("Error subiendo la imagen:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = dispatch(createVideogame(input));
    if (result.message === "el juego ya existe en la base de datos") {
      alert(result.message);
      return;
    }

    alert("Videojuego creado..!");
    history.push("/");
  };

  return {
    handleImageUpload,
    handleInputChange,
    handleSelectChange,
    handleSubmit,
    genreOptions,
    platformsOptions,
    input,
    loading
  };
};
