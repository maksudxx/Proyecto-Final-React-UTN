import { Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";
import Videogames from "./pages/videogames/Videogames";
import Landing from "./pages/landing/Landing";
import Header from "./components/header/Header";
import VideogameDetails from "./pages/videogameDetails/VideogameDetails";
import NewVideogame from "./pages/newVideogame/NewVideogame";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          exact
          path="/login"
          render={(props) =>
            !isAuthenticated ? (
              <Login {...props} setAuth={setAuth} />
            ) : (
              <Redirect to="/videogames" />
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
          <Route exact path="/videogames" component={Videogames} />
          <Route
            exact
            path="/videogames/:videogame_id"
            component={VideogameDetails}
          />
          <Route exact path="/newGame" component={NewVideogame} />
          <Route exact path="/about" component={About} />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
