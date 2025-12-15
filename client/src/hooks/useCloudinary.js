import { useState } from "react";
import { uploadImageToCloudinary } from "../Services/Cloudinary";

export const useCloudinaryUpload = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const upload = async (file) => {
    setLoading(true);
    setError(null);

    try {
      const data = await uploadImageToCloudinary(file);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { upload, loading, error };
};
