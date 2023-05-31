import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cadastro from "./pages/Cadastro";
import CadastroPaciente from "./pages/Cadastro-paciente";
import Login from "./pages/Login";
import HomeInstitucional from "./pages/HomeInstitucional";
import Switch from "./pages/SwitchPage";
import DashBoard from "components/dashboard/Dashboard";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomeInstitucional />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/switch"} element={<Switch />} />
        <Route path={"/cadastro-psicologo"} element={<Cadastro />} />
        <Route path={"/cadastro-paciente"} element={<CadastroPaciente />} />
        <Route path={"/dashboard"} element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
