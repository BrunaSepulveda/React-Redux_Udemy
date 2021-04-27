import React from 'react'

export default props => {
  return (
    <div>
      <button
        onClick={props.decrement}
      >
        -
      </button>
      <button
        onClick={props.increment}
      >
        +
      </button>
    </div>
  )
}


/*

 */