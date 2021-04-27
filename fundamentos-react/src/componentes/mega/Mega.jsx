import React, { useState } from 'react';
import './Mega.css'

export default props => {
  const [qtde, setQtde] = useState(props.qtde || 6);

  const gerarNumerosUnicos = (max, min, array) => {
    const n = Math.floor(Math.random() * (max - min) + 1) + min;
    return array.includes(n) ?
      gerarNumerosUnicos(max, min, array) :
      n
  };

  const numerosMega = (qtde) => {
    const numeros = Array(qtde || 6).fill(0).reduce(
      (acc) => {
        const novoNumero = gerarNumerosUnicos(1, 60, acc);
        return [...acc, novoNumero]
      }
      , [])
      .sort();
    return numeros;
  };

  const [numeros, setNumeros] = useState(numerosMega(qtde));
  return (
    <div className="Mega">
      <h2>Surpresinha da Mega</h2>
      <label>
        Quantidade de números
        <input
          min='6'
          max='15'
          type="number"
          value={qtde}
          onChange={event => {
            setQtde(Number(event.target.value))
            setNumeros(numerosMega(Number(event.target.value)))
          }}
        />
      </label>
      <p> 
        {numeros.map( element => <span className='numerosGerados'>{element}</span>)}
      </p>
      <button
        onClick={e => setNumeros(numerosMega(qtde))}
      >
        Gerar Números
      </button>
    </div>
  )
}
