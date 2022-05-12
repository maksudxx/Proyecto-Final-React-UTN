import { Switch, Route } from "react-router-dom";
import Videogames from "./pages/videogames/Videogames";
import Landing from "./pages/landing/Landing";
import Header from "./components/header/Header";
import VideogameDetails from "./pages/videogameDetails/VideogameDetails";
import NewVideogame from "./pages/newVideogame/NewVideogame";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/">
          <Header />
          <Route exact path="/videogames" component={Videogames} />
          <Route
            exact
            path="/videogames/:videogame_id"
            component={VideogameDetails}
          />
          <Route exact path="/newGame" component={NewVideogame} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
