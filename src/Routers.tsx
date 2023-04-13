import { Route, Routes } from "react-router-dom";
import { Chamados } from "./pages/Chamados";
import { AbrirChamado } from "./pages/Chamados/AbrirChamado";
import { ChamadoScreen } from "./pages/Chamados/TelaDoChamado";
import { ConfirmacaoScreen } from "./pages/Chamados/TelaDeConfirmação";
import { Login } from "./pages/Login";
import { NavigationBar } from "./Components/MenuNavegation";
import { Settings } from "./pages/Settings";

export const Routers = () => {
    return (
        <Routes>
            <Route path="/AbrirChamado" element={<AbrirChamado />} />
            <Route path="/TeladoChamado" element={<ChamadoScreen />} />
            <Route path="/TeladeConfirmação" element={<ConfirmacaoScreen />} />
            <Route path="/" element={<NavigationBar />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Chamados" element={<Chamados />} />
            <Route path="/Settings" element={<Settings />} />
            {/* <Route path="/Home" element={<Home />} /> */}
        </Routes>
    );
};
