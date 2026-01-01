import { Switch, Route, Redirect } from "react-router-dom";
import { Videogames } from "./pages/videogames/Videogames";
import { Header } from "./components/header/Header";
import { VideogameDetails } from "./pages/videogameDetails/VideogameDetails";
import { FormVideogame } from "./pages/formVideogame/FormVideogame";
import { About } from "./pages/about/About";
import { Footer } from "./components/footer/Footer";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";
import { Sesion } from "./components/sesion/Sesion";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkAuthAction } from "./redux/actions/authActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Videogame() {
  const dispatch = useDispatch();

  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);
  if (loading) return <div>Verificando...</div>;
  return (
    <div className="App">
      <Header />
      <Sesion />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
      ;
      <Switch>
        {/* Rutas públicas */}
        <Route exact path="/login">
          {!isAuthenticated ? <Login /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/register">
          {!isAuthenticated ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/" component={Videogames} />
        <Route exact path="/videogames/:videogame_id">
          <VideogameDetails isAuthenticated={isAuthenticated} />
        </Route>
        <Route exact path="/about" component={About} />

        {/* Rutas privadas */}
        <Route exact path="/newGame">
          <PrivateRoute
            component={FormVideogame}
            isAuthenticated={isAuthenticated}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default Videogame;
