import React from 'react';
import If from './If.js';
import IfElse, { Else } from './IfElse.js'

export default props => {
  const usuario  = props.usuario || {};
  return (
    <div>
      <p>
      <If test={usuario && usuario.nome}>
       Que bom te receber, <strong> {usuario.nome} </strong>! 
      </If>
      <If test={!usuario.nome}>
        Seja bem vinda <strong> pessoa </strong>! 
      </If>
      </p>
      <p>
      <IfElse test={usuario && usuario.nome}>
        Bom te ver, <strong> {usuario.nome} </strong>!
        <Else>
          Seja bem vinda <strong> você </strong>! 
        </Else>
      </IfElse>
      </p>
    </div>
  )
}