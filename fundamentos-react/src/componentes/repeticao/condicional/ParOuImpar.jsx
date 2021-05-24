import React from 'react';

export default props => {
  const isOdd = props.numero % 2 === 0;
  return (
    <div>
      { 
        isOdd ?
          <span> Par </span> :
          <span> Impar </span>
      }
    </div>
  )
};