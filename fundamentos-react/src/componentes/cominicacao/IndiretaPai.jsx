import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho';

export default props => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [isNerd, setIsNerd] = useState(false);

  const fornecerInformacoes = (nome,idade,isNerd) => {
    setNome(nome);
    setIdade(idade);
    setIsNerd(isNerd);
  }
  return (
    <div>
      <div>
        Pai:
        <span> {nome} , {idade} anos.</span>
        <p>O pai é nerd? {isNerd ? 'Sim, ele é bem nerd, acredite!' : 'Não, ele é um cara comum!'}</p>
      </div>
      <IndiretaFilho click={fornecerInformacoes}/>
    </div>
  )
}