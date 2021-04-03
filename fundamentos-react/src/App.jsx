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

const App = () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="Primeiro Componente React Aula" color="#B0C4DE">
          <Primeiro />
        </Card>
        <Card titulo="Desafio Aleatório como eu fiz" color="#40E0D0">
          <DescricaoAle />
        </Card>
        <Card titulo="Apenas o componente que gera os números" color="#FFDEAD">
          <Aleatorio min={0} max={60} />
        </Card>
        <Card titulo="Resolução do professor" color="#BC8F8F">
          <AleatorioProfessor min={0} max={60} />
        </Card>
        <Card titulo="Componente recebendo filhos diretamente" color="#FF0000">
          <Familia sobrenome="Ferreira" />
        </Card>
        <Card titulo="Componente recebe filhos como props" color="#00BFFF">
          <Familia2 sobrenome="Silva">
            <MembroFamilia nome="João" />
            <MembroFamilia nome="Paula" />
            <MembroFamilia nome="Marcos" />
          </Familia2>
        </Card>
      </div>
    </div>
  )
};

export default App;