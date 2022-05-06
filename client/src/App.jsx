import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="videogames" element={<Header />} />
        <Route path="newGame" element={<Header />} />
        <Route path="about" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
