import React, { useState } from 'react';

const Aleatorio = ({ min, max }) => {
  const [number, setNumber] = useState(0)
  const randomNumber = () => {
    
    setNumber(Math.floor(Math.random() * (max - min) + 1) + min);
   return 
  };
  return (
    <div>
      Número sorteado entre o número {min} e o número {max} é: {number}
      <button onClick={randomNumber}>Clique para gerar o número</button>
    </div>
  )
};

export default Aleatorio;
