import React from 'react';
import './Button.css';

export default function Button ({ click, operation, double, triple, label}) {
  return (
    <button
      onClick={() => click && click(label)}
      type='button'
      className={`
        button
        ${operation && 'operation'}
        ${double && 'double'}
        ${triple && 'triple'}
      `}>
      {label}
    </button>
  );
}