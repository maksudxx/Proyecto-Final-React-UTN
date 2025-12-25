import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getGenres } from "../redux/actions/genreActions";
import { getPlatforms } from "../redux/actions/platformAction";
import {
  createVideogame,
  getVideogameName,
} from "../redux/actions/videogameActions";
import { useCloudinaryUpload } from "./useCloudinary";
import { getTags } from "../redux/actions/tagActions";
import { toast } from "react-toastify";

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

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

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

  const tagsOptions = tags.map(({ tag_id, tag_name }) => ({
    value: tag_id,
    label: tag_name,
  }));

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);

    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  };

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

 const handleSubmit = async (e) => {
  e.preventDefault();

  // 1. Validar si existe en la BD
  const exists = await dispatch(
    getVideogameName(input.videogame_name)
  );

  if (exists && exists.length > 0) {
    toast.warning("el juego ya existe en la base de datos");
    return;
  }

  // 2. Subir imagen SOLO si no existe
  let imageUrl = null;
  if (imageFile) {
    const uploadResult = await upload(imageFile);
    imageUrl = uploadResult.secure_url;
  }

  // 3. Crear payload con la imagen ya subida a cloudinary
  const payload = {
    ...input,
    videogame_image: imageUrl,
  };

  // 4. Crear videojuego
  const result = await dispatch(createVideogame(payload));

  if (result.message !== "OK") {
    toast.error(result.message);
    return;
  }

  toast.success("Videojuego creado..!");
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
    imagePreview,
  };
};
