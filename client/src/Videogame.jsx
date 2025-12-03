import { Switch, Route, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import Videogames from "./pages/videogames/Videogames";
import Header from "./components/header/Header";
import VideogameDetails from "./pages/videogameDetails/VideogameDetails";
import NewVideogame from "./pages/newVideogame/NewVideogame";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Sesion from "./components/Sesion/Sesion";

function Videogame() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
    try {
      const response = await fetch("http://localhost:3001/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    isAuth();
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/login"
          render={(props) =>
            !isAuthenticated ? (
              <Login {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          exact
          path="/register"
          render={(props) =>
            !isAuthenticated ? (
              <Register {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route path="/">
          <Header setAuth={setAuth} isAuthenticated={isAuthenticated} />
          <Sesion setAuth={setAuth} isAuthenticated={isAuthenticated} />
          <Route exact path="/" component={Videogames} />
          <Route
            exact
            path="/videogames/:videogame_id"
            render={(props) => (
              <VideogameDetails {...props} isAuthenticated={isAuthenticated} />
            )}
          />
          <Route
            exact
            path="/newGame"
            render={(props) =>
              isAuthenticated ? (
                <NewVideogame {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route exact path="/about" component={About} />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default Videogame;
