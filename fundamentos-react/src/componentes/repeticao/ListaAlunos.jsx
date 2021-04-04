import React from 'react';
import alunos from '../../data/alunos'

export default props => {
  return (
    <div>
      <ul>
        {alunos.map((aluno, index) => {
          return (
            <li key={index}>
              {aluno.id})  {aluno.nome} com nota {aluno.nota}
            </li>)
        })}
      </ul>
    </div>
  )
}