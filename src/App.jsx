import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Home from "./pages/Home";
// import Contato from "./pages/Contato";
// import Sobre from "./pages/Sobre";
// import Header from "./compenents/Header";
// import Footer from "./compenents/Footer";
// import Pagina404 from "./pages/Pagina404";
// import Login from "./pages/Login";
// import Cadastro from "./pages/Cadastro";
// import Masculino from "./pages/Masculino";
// import Feminino from "./pages/Feminino";
// import LGBT from "./pages/LGBTQIA+";
import logotipo from "./assets/logotipo.gif";
function App() {
  const [mensagem, setMensagem] = useState("");
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1>{mensagem}</h1>
      <img
        src={logotipo}
        style={{ display: mensagem === "" ? "none" : "block" }}
        width="300"
      />
      <button onClick={() => setMensagem("Código funcionando! Nos vemos sábado, às 14h. Vou mandar o link do meet alguns minutos antes lá no discord. Até mais ⚛ (O que acharam da nossa logo? haha)")}>Clique Aqui!</button>
    </div>
  );
}

export default App;
