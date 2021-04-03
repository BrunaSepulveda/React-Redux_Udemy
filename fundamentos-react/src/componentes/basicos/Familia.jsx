import React from 'react';
import MembroFamilia from './MembroFamília'

export default props => {
  return(
    <div>
      <MembroFamilia nome="Pedro" { ...props }/>
      <MembroFamilia nome="Ana" { ...props }/>
      <MembroFamilia nome="Gustavo" { ...props }/>
    </div>
  );
};