import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
// import Home from "./pages/Home";
// import Contato from "./pages/Contato";
// import Sobre from "./pages/Sobre";
import Header from "./components/Header/Header";
// import Footer from "./compenents/Footer";
// import Pagina404 from "./pages/Pagina404";
// import Login from "./pages/Login";
// import Cadastro from "./pages/Cadastro";
// import Masculino from "./pages/Masculino";
// import Feminino from "./pages/Feminino";
// import LGBT from "./pages/LGBTQIA+";
import logotipo from "./assets/logotipo.gif";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Pagina404 from "./pages/Pagina404/Pagina404";
import Cadastro from "./pages/Cadastro/Cadastro";
import LGBTQIA from "./pages/LGBTQIA+/LGBTQIA";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/lgbt" element={<LGBTQIA />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
