import React from 'react';


export default props => {
  const gerarIdade = () => parseInt((Math.random() * (30)), 10) + 40;
  const gerarIsNerd = () => Math.random() > 0.5;
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={_event => props.click("Antônio", gerarIdade(), gerarIsNerd())}
      >
        Fornecer Informações
      </button>
    </div>
  )
}