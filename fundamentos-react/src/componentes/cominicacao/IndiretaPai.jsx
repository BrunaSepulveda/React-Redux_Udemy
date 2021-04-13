import React from 'react';
import IndiretaFilho from './IndiretaFilho'

export default props => {
  const fornecerInformacoes = (nome,idade,IsNerd) => {
    console.log({nome, idade, IsNerd})
  }
  return (
    <div>
      <div>Pai</div>
      <IndiretaFilho click={fornecerInformacoes}/>
    </div>
  )
}