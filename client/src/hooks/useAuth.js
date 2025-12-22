// src/hooks/useAuth.js
import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => setIsAuthenticated(boolean);

  const checkAuth = async () => {
    try {
      const response = await fetch("http://localhost:3001/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();
      setIsAuthenticated(parseRes === true);
    } catch (error) {
      console.error(error.message);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return { isAuthenticated, setAuth, checkAuth };
};
