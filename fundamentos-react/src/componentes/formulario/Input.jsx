import React, { useState } from 'react'

export default props => {
  const [valor, setValor] = useState('')
  const handleChange = ({target}) => {
    setValor(target.value)
  }
  return(
    <div 
      style={{
        display:'flex',
        flexDirection:'column'
      }}
    >
      <input
        value={valor}
        onChange={handleChange}
      />
      <input
        value={valor}
        readOnly
      />
      <input
        value={undefined}
      />
    </div>
  );
};