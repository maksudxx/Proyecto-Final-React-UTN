import { Routes, Route } from "react-router-dom";

import Videogames from "./pages/videogames/Videogames";
import Landing from "./pages/landing/Landing";
import Header from "./components/header/Header";

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
      </Routes>
    </div>
  );
}

export default App;
