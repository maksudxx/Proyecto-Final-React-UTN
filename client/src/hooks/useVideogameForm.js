import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getGenres } from "../redux/actions/genreActions";
import { getPlatforms } from "../redux/actions/platformAction";
import { createVideogame } from "../redux/actions/videogameActions";
import { useCloudinaryUpload } from "./useCloudinary";
import { getTags } from "../redux/actions/tagActions";

export const useVideogame = () => {
  const [input, setInput] = useState({
    videogame_name: "",
    videogame_description: "",
    videogame_release_date: "",
    videogame_rating: "",
    videogame_image: "",
    developers: "",
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
  const tags = useSelector((state) => state.tag.tags);

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
    dispatch(getTags());
  }, [dispatch]);

  const handleInputChange = function (e) {
    const { name, value } = e.target;
    if (name === "developers") {
      const arrayDevs = value.split(",").map((dev) => ({
        id: null,
        name: dev,
      }));
      setInput({
        ...input,
        [name]: value,
        arrayDevelopers: arrayDevs,
      });
    } else {
      setInput({
        ...input,
        [name]: value,
      });
    }
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

  //crear tagsoptions y desarrolladesOptions

  const tagsOptions = tags.map(({ tag_id, tag_name }) => ({
    value: tag_id,
    label: tag_name,
  }));

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
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
    const result = await dispatch(createVideogame(input));
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
    tagsOptions,
    input,
    loading,
  };
};
