import { Routes, Route } from "react-router-dom";

import Videogames from "./pages/videogames/Videogames";
import Landing from "./pages/landing/Landing";
import Header from "./components/header/Header";
import VideogameDetails from "./pages/videogameDetails/VideogameDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/" element={<Videogames />} >
          <Route path='/videogames' element={<Header />} />
          {/* <Route path='/newGame' element={<Header />} />
          <Route path='/about' element={<Header />} /> */}
          
        </Route>
        <Route path='/videogames/:videogame_id' element={<VideogameDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
