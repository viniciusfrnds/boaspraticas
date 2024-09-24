import React, { useState } from 'react';
import './index.css';

function App() {
  const [points, setPoints] = useState(0);

  const handleButtonClick = () => {
    setPoints(points + 10); // Adiciona 10 pontos a cada clique
    alert('Jogo Iniciado! Você ganhou 10 pontos!');
  };

  return (
    <div className="app">
      <h1>Bem-vindo ao Meu Jogo!</h1>
      <p>Prepare-se para se divertir!</p>
      <p>Pontuação: {points}</p>
      <button onClick={handleButtonClick}>Iniciar Jogo</button>
    </div>
  );
}

export default App;
