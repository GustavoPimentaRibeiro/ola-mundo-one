import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreMim from "./pages/SobreMim";
import Inicio from "./pages/Inicio";
import Menu from "./components/Menu";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "pages/Post";
import NaoEncontrada from "pages/NaoEncontrada";
import ScrollToTop from "components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        {/*
          Na rota "/", a estrutura a ser renderizada é:
          <PaginaPadrao>
            <Inicio />
          </PaginaPadrao>

          Na rota "/sobremim", a estrutura a ser renderizada é:
          <PaginaPadrao>
            <SobreMim />
          </PaginaPadrao>
        */}

        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default App;
