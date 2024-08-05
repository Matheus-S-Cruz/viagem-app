// Destinos.jsx
import React from 'react';
import FormDestino from './FormDestino';
import Destino from './Destino';


const Destinos = () => {
    return(
        <div>
    <FormDestino adicionarDestino={adicionarDestino} />
    {destinos.map((destino, index) => (
  <Destino key={index} nome={destino.nome} descricao={destino.descricao} />
))}
</div>
    );
  };
  
  export default Destinos;