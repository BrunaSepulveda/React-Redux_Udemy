import './Aleatorio.css'
import React, { useState } from 'react';

const Aleatorio = ({ min, max }) => {
  const [number, setNumber] = useState(0)
  const randomNumber = () => {

    setNumber(Math.floor(Math.random() * (max - min) + 1) + min);
    return
  };
  return (
    <div className="Aleatorio"> 
      <p>Número sorteado entre o {min} e o {max} é:</p>
      <p> {number} </p>
      <button onClick={randomNumber}>Clique para gerar o número</button>
    </div>
  )
};

export default Aleatorio;
