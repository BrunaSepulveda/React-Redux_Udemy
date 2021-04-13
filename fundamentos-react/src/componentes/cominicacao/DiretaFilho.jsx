import React from 'react';

export default props => {
  return (
    <p>
      <span>{props.nome}, </span>
      <span>{props.idade} anos </span>
      <span><strong>{props.isNerd ? 'Verdadeiro' : 'Falso'}</strong></span>
    </p>
  )
}