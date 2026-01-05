import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getGenres } from "../redux/actions/genreActions";
import { getPlatforms } from "../redux/actions/platformAction";
import {
  createVideogame,
  getVideogameName,
  getVideogameId,
  updateVideogame,
} from "../redux/actions/videogameActions";
import { useCloudinaryUpload } from "./useCloudinary";
import { getTags } from "../redux/actions/tagActions";
import { toast } from "react-toastify";

export const useVideogame = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { videogame_id } = useParams();
  const isEdit = Boolean(videogame_id);

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

  const genres = useSelector((state) => state.genre.genres);
  const platforms = useSelector((state) => state.platform.platforms);
  const tags = useSelector((state) => state.tag.tags);

  // 1. Carga inicial de opciones (Géneros, etc)
  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
    dispatch(getTags());
  }, [dispatch]);

  // 2. Lógica de AUTO-RELLENADO para Edición
  useEffect(() => {
    if (isEdit) {
      dispatch(getVideogameId(videogame_id)).then((game) => {
        if (game) {
          const devsData = game.developers || game.Developers || [];
          const devsString = devsData.map((d) => d.developer_name).join(", ");
          const devsArray = devsData.map((d) => ({ name: d.developer_name }));
          setInput({
            videogame_name: game.videogame_name,
            videogame_description: game.videogame_description,
            videogame_release_date:
              game.videogame_release_date?.split("T")[0] || "", // Formatear fecha para input date
            videogame_rating: game.videogame_rating,
            videogame_image: game.videogame_image,
            developers: devsString, // Esto llena el value={developers} del input
            arrayDevelopers: devsArray,
            arrayGenres: game.genres?.map((g) => g.genre_id) || [],
            arrayPlatforms: game.platforms?.map((p) => p.platform_id) || [],
            arrayTags: game.tags?.map((t) => t.tag_id) || [],
          });
          setImagePreview(game.videogame_image);
        }
      });
    }
  }, [dispatch, videogame_id, isEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "developers") {
      const arrayDevs = value
        .split(",")
        .map((dev) => ({ videogame_id: null, name: dev.trim() }));
      setInput({ ...input, [name]: value, arrayDevelopers: arrayDevs });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const handleSelectChange = (selectedOptions, field) => {
    setInput((prev) => ({
      ...prev,
      [field]: selectedOptions ? selectedOptions.map((opt) => opt.value) : [],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Si no es edición, validar si el nombre ya existe
    if (!isEdit) {
      const exists = await dispatch(getVideogameName(input.videogame_name));
      if (exists && exists.length > 0) {
        toast.warning("El juego ya existe en la base de datos");
        return;
      }
    }

    // 2. Subir imagen (solo si el usuario seleccionó un archivo nuevo)
    let imageUrl = input.videogame_image;
    if (imageFile) {
      const uploadResult = await upload(imageFile);
      imageUrl = uploadResult.secure_url;
    }

    const payload = { ...input, videogame_image: imageUrl };

    // 3. Decidir si es UPDATE o CREATE
    if (isEdit) {
      const result = await dispatch(updateVideogame(videogame_id, payload));
      if (result.message === "OK") {
        toast.success("Juego actualizado exitosamente");
        history.push("/");
      } else {
        toast.error(result.message);
      }
    } else {
      const result = await dispatch(createVideogame(payload));
      if (result.message === "OK") {
        toast.success("Juego creado exitosamente");
        history.push("/");
      } else {
        toast.error(result.message);
      }
    }
  };

  // Mapeo de opciones para los Selects
  const genreOptions = genres.map((g) => ({
    value: g.genre_id,
    label: g.genre_name,
  }));
  const platformsOptions = platforms.map((p) => ({
    value: p.platform_id,
    label: p.platform_name,
  }));
  const tagsOptions = tags.map((t) => ({ value: t.tag_id, label: t.tag_name }));

  // Filtramos las opciones para encontrar los objetos completos que coinciden con los IDs en el input
  const selectedGenres = genreOptions.filter((opt) =>
    input.arrayGenres?.includes(opt.value)
  );

  const selectedPlatforms = platformsOptions.filter((opt) =>
    input.arrayPlatforms?.includes(opt.value)
  );

  const selectedTags = tagsOptions.filter((opt) =>
    input.arrayTags?.includes(opt.value)
  );
  return {
    handleImageUpload: (e) => {
      const file = e.target.files[0];
      if (file) {
        setImageFile(file);
        setImagePreview(URL.createObjectURL(file));
      }
    },
    handleInputChange,
    handleSelectChange,
    handleSubmit,
    selectedGenres,
    selectedPlatforms,
    selectedTags,
    genreOptions,
    platformsOptions,
    tagsOptions,
    input,
    loading,
    imagePreview,
    isEdit,
  };
};
