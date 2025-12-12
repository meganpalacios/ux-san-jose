import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Instalaciones from "./pages/Instalaciones";
import Doctores from "./pages/Doctores";
import Especialidades from "./pages/Especialidades";
import Agendar from "./pages/Agendar";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/instalaciones" element={<Instalaciones />} />
          <Route path="/doctores" element={<Doctores />} />
          <Route path="/especialidades" element={<Especialidades />} />
          <Route path="/agendar" element={<Agendar />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
