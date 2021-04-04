import React from 'react';
import './App.css'
import Primeiro from './componentes/basicos/Primeiro'
import DescricaoAle from './componentes/DescricaoAle';
import Aleatorio from './componentes/Aleatorio';
import AleatorioProfessor from './componentes/AleatorioProfessor';
import Card from './componentes/layout/Card';
import Familia from './componentes/basicos/Familia';
import Familia2 from './componentes/basicos/Familia2';
import MembroFamilia from './componentes/basicos/MembroFamília';
import ListaAlunos from './componentes/repeticao/ListaAlunos'
import TabelaProdutos from './componentes/repeticao/TabelaProdutos';
import TabelaProProfessor from './componentes/repeticao/TabelaProProfessor';

const App = () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="Primeiro Componente React Aula" color="#692033">
          <Primeiro />
        </Card>
        <Card titulo="Desafio Aleatório como eu fiz" color="#a92e42">
          <DescricaoAle />
        </Card>
        <Card titulo="Apenas o componente que gera os números" color="#5e3c54">
          <Aleatorio min={0} max={60} />
        </Card>
        <Card titulo="Resolução do professor" color="#6f3367">
          <AleatorioProfessor min={0} max={60} />
        </Card>
        <Card titulo="Componente recebendo filhos diretamente" color="#d21f3d">
          <Familia sobrenome="Ferreira" />
        </Card>
        <Card titulo="Componente recebe filhos como props" color="#f25532">
          <Familia2 sobrenome="Silva">
            <MembroFamilia nome="João" />
            <MembroFamilia nome="Paula" />
            <MembroFamilia nome="Marcos" />
          </Familia2>
        </Card>
        <Card titulo="Repetição" color=" #de4138">
          <ListaAlunos />
        </Card>
        <Card titulo="Desafio tabela produtos" color="#ff7003">
          <TabelaProdutos />
        </Card>
        <Card  titulo="Desafio produtos resolução professor" color="#e0a9ae">
          <TabelaProProfessor />
        </Card>
      </div>
    </div>
  )
};

export default App;