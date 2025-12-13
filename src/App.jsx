import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Instalaciones from "./pages/Instalaciones";
import Doctores from "./pages/Doctores";
import Especialidades from "./pages/especialidades";
import Agendar from "./pages/Agendar";
import CrearCuenta from "./pages/CrearCuenta";
import Ingresar from "./pages/Ingresar";
import Layout from "./components/Layout";
import Dashboard from "./pages/perfil";
import AgendarCita from "./pages/perfil/AgendarCita";
import Historial from "./pages/perfil/Historial";
import Ortodoncia from "./pages/especialidades/Ortodoncia";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/instalaciones" element={<Instalaciones />} />
          <Route path="/doctores" element={<Doctores />} />
          <Route path="/especialidades" element={<Especialidades />} />
          <Route path="/especialidades/ortodoncia" element={<Ortodoncia />} />
          <Route path="/agendar" element={<Agendar />} />
          <Route path="/crear-cuenta" element={<CrearCuenta />} />
          <Route path="/iniciar-sesion" element={<Ingresar />} />
          <Route path="/perfil" element={<Dashboard />} />
          <Route path="/perfil/agendar-cita" element={<AgendarCita />} />
          <Route path="/perfil/historial" element={<Historial />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
