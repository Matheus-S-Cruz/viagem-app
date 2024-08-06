// Destinos.jsx
import React, { useState } from 'react';
import FormDestino from './FormDestino';
import Destino from './Destino';

const Destinos = () => {

  const [destinos, setDestinos] = useState([
    { nome: 'Paris', descricao: 'A cidade do amor.' },
    { nome: 'Nova York', descricao: 'A cidade que nunca dorme.' },
    { nome: 'Tóquio', descricao: 'A capital do Japão.' }
  ]);

  const adicionarDestino = (novoDestino) => {
    setDestinos([...destinos, novoDestino]);
  };


  return (
    <div>
      <FormDestino adicionarDestino={adicionarDestino} />
      {destinos.map((destino, index) => (
        <Destino key={index} nome={destino.nome} descricao={destino.descricao} />
      ))}
    </div>
  );
};

export default Destinos;