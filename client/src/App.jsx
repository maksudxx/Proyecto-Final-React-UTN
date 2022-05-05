import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Header from "./components/header/Header";
import { getVideogames } from "./redux/actions/videogameActions";

function App() {
  const videogames = useSelector((state) => state.videogame.videogames);
  const dispatch = useDispatch();
  console.log(videogames);

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
