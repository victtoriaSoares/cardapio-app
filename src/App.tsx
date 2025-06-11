import React from "react";
import "./App.css";
import "./estilos/Home.css"
import "./estilos/DetalhesPrato.css";

function App() {
  return (
    <div className="detalhes-prato">
      <div className="detalhes-prato-card">
        <img src="https://media.istockphoto.com/id/899497396/pt/foto/delicious-brazilian-feijoada.jpg?s=2048x2048&w=is&k=20&c=OO_JGRT2AgsybJxSFB-mFP2vsOn7QtsbqEd1sZiUzuw=" alt="" />
        <h1>Feijoada</h1>
        <p><strong>Cozinha:</strong>Brasileira</p>
        <p><strong>Valor:</strong> R$28,00</p>
        <p><strong>Descrição da sua experiência Gastronômica:</strong> Sinta o sabor inigualável de nossa feijoada, preparada com ingredientes selecionados e tempero único que te leva à sensação de estar desfrutando dessa experiência gastronômica em uma fazenda lá no interior.</p>
        <button onClick={() => {}}>Voltar</button>
      </div>
    </div>
  );
}

export default App;
