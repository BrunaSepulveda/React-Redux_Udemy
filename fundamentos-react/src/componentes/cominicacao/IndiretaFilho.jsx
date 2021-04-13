import React from 'react';


export default props => {
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={event => props.click("Antônio", 53, false)}
      >
        Fornecer Informações
      </button>
    </div>
  )
}