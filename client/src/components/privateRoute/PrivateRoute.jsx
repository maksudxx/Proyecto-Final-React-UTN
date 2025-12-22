import { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";

export const PrivateRoute = ({ children, isAuthenticated, checkAuth }) => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    async function verify() {
      const result = await checkAuth();
      setAuth(result);
      setLoading(false);
    }
    verify();
  }, [checkAuth]);

  if (loading) return <Spinner />;

  return auth || isAuthenticated ? children : <Redirect to="/login" />;
}
