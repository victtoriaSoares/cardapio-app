import React from "react";
import "../estilos/CardPrato.css";

const CardPrato = () => {
  return (
    <>
      <div className="prato-card">
        <div className="menu-container">
          <button className="menu-button" onClick={() => {}}>
            &#x22EE;
          </button>
          <div className="dropdown-menu">
            <a href="#" className="dropdown-item">
              Editar
            </a>
            <a href="#" className="dropdown-item">
              Deletar
            </a>
            <a href="#" className="dropdown-item">
              Ver Detalhes
            </a>
          </div>
        </div>
        <img
          src="https://media.istockphoto.com/id/899497396/pt/foto/delicious-brazilian-feijoada.jpg?s=2048x2048&w=is&k=20&c=OO_JGRT2AgsybJxSFB-mFP2vsOn7QtsbqEd1sZiUzuw="
          alt="Feijoada brasileira"
        />
        <h2 className="nome-prato">Feijoada</h2>
        <p className="cozinha-prato">Brasileira</p>
        <p className="descricao-curta-prato">
          Feijoada completa, com pedaços suculentos de carne suína e aquele
          sabor brasileiro incomparável.
        </p>
        <a href="#" className="btn">
          Ver Detalhes
        </a>
      </div>
    </>
  );
};

export default CardPrato;
