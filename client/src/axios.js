import axios from 'axios';

// Definimos la URL base
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

// Creamos una instancia de axios con esa URL
const api = axios.create({
  baseURL: API_URL
});

export default api;