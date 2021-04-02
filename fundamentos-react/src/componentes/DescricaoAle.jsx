import React, { useState } from 'react';
import Aleatorio from './Aleatorio';

const DescricaoAle = () => {
  const [numeros, setNumeros] = useState({min: 0, max: 0});
  const handleInputNumbers = ({ target }) => {
    setNumeros({ ...numeros, [target.name]: Number(target.value) });
  };       
  return(
    <div>
      Para gerar os numeros aleatórios escreva o intervalo numerico
      <p>Valor mínimo:
        <input
          type="number"
          name="min"
          onChange={ (event) => handleInputNumbers(event) }
        />
        Valor máximo:
        <input 
          type="number"
          name="max" 
          onChange={ (event) => handleInputNumbers(event) }
        />
      </p>
      <Aleatorio min={ numeros.min } max={ numeros.max } />
    </div>
  )
};

export default DescricaoAle;