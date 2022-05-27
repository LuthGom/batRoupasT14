import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { msg } from "../mensagem";
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

function App() {
  const [mensagem, setMensagem] = useState("");
  return (
    <div className="App">
      <h1>{mensagem}</h1>
      <button onClick={() => setMensagem(msg)}>Clique Aqui!</button>
    </div>
  );
}

export default App;
