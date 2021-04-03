import React from 'react';
import './App.css'
import Primeiro from './componentes/basicos/Primeiro'
import DescricaoAle from './componentes/DescricaoAle';
import Aleatorio from './componentes/Aleatorio';
import AleatorioProfessor from './componentes/AleatorioProfessor'
import Card from './componentes/layout/Card'

const App = () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card>
          <Primeiro />
        </Card>
        <Card titulo="Desafio Aleatório como eu fiz">
          <DescricaoAle />
        </Card>
        <Card titulo="Apenas o componente que gera os números">
          <Aleatorio min={0} max={60} />
        </Card>
        <Card titulo="Resolução do professor">
          <AleatorioProfessor min={0} max={60} />
        </Card>
      </div>
    </div>
  )
};

export default App;