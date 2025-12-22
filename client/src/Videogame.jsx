import { Switch, Route, Redirect } from "react-router-dom";
import Videogames from "./pages/videogames/Videogames";
import Header from "./components/header/Header";
import VideogameDetails from "./pages/videogameDetails/VideogameDetails";
import NewVideogame from "./pages/newVideogame/NewVideogame";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Sesion from "./components/Sesion/Sesion";
import { useAuth } from "./hooks/useAuth";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";

function Videogame() {
  const { isAuthenticated, setAuth, checkAuth } = useAuth();

  return (
    <div className="App">
      <Header setAuth={setAuth} isAuthenticated={isAuthenticated} />
      <Sesion setAuth={setAuth} isAuthenticated={isAuthenticated} />

      <Switch>
        {/* Rutas públicas */}
        <Route exact path="/login">
          {!isAuthenticated ? <Login setAuth={setAuth} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/register">
          {!isAuthenticated ? (
            <Register setAuth={setAuth} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route exact path="/" component={Videogames} />
        <Route exact path="/videogames/:videogame_id">
          <VideogameDetails isAuthenticated={isAuthenticated} />
        </Route>
        <Route exact path="/about" component={About} />

        {/* Rutas privadas */}
        <Route exact path="/newGame">
          <PrivateRoute isAuthenticated={isAuthenticated} checkAuth={checkAuth}>
            <NewVideogame />
          </PrivateRoute>
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default Videogame;
