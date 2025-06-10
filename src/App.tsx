import React from "react";
import "./App.css";
import "./estilos/Home.css"
import terraDasAguas from "./assets/terra_das_aguas.jpg";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="home">
      <div className="banner">
        <img src={terraDasAguas} alt="" />
      </div>
      <h1>Bem vindo ao Restaurante Terra das Aguas SENAC - MS</h1>
      <div className="lista-pratos">
        <div className="prato-card">
          <img src="https://source.unsplash.com/featured/?brazilian-food" alt="Feijoada brasileira" />
          <h2 className="nome-prato">Feijoada</h2>
          <p className="cozinha-prato">Brasileira</p>
          <p className="descricao-curta-prato">Feijoada completa, com pedaços suculentos de carne suína e aquele sabor brasileiro incomparável.</p>
          {/* <Link to="/prato/1" className="btn">Ver detalhes</Link> */}
        </div>
      </div>
    </div>
  );
}

export default App;
