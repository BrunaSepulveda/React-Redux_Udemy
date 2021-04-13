import './TabelaProdutos.css'
import React from 'react';
import produtos from '../../data/produtos';

export default props => {
  
  function getLinhas() {
    return produtos.map((produto, index) => {
      return(
          <tr className={index % 2 == 0 ? 'Par' : 'Impar' } key={index}>
            <td>{produto.id}</td>
            <td>{produto.name}</td>
            <td>R$ {produto.price.toFixed(2).replace('.',',')}</td>
          </tr>
      )
    })
  }

  return (
    <div className="TabelaProdutos" >
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          { getLinhas() }
        </tbody>
      </table>
    </div>
  )
};