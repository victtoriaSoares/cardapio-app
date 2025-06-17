import React from "react";
import "../estilos/Home.css";
import terraDasAguas from "../assets/terra_das_aguas.jpg";
import { Link } from "react-router-dom";
import CardPrato from "./CardPrato";

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <img src={terraDasAguas} alt="" />
      </div>
      <h1>Bem vindo ao Restaurante Terra das Aguas SENAC - MS</h1>
      <div className="lista-pratos">
        <CardPrato />
        <CardPrato />
        <CardPrato />
        <CardPrato />
      </div>
    </div>
  );
}

export default Home;
