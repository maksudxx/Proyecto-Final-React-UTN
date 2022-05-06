import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Videogames from "./pages/videogames/Videogames";
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/*" element={<Header />}>
          <Route path="videogames" element={<Videogames />} />{" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
