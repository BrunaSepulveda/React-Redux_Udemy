import React from 'react';
import DiretaFilho from './DiretaFilho'

export default props => {
  return (
    <div>
      <DiretaFilho
        nome="Flavia"
        idade={20}
        isNerd={true}
      />
      <DiretaFilho
        nome="Guilherme"
        idade={17}
        isNerd={false}
      />
    </div>
  )
}