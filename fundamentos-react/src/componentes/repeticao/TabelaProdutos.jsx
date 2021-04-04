import './TabelaProdutos.css'
import React from 'react';
import produtos from '../../data/produtos';

export default props => {
  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, index) => {
            return (
              <tr key={index}>
                <td> {produto.id} </td>
                <td> {produto.name} </td>
                <td> {produto.price} </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}