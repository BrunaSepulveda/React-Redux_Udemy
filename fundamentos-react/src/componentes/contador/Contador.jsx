import './Contador.css';
import React, { Component } from 'react';

import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm';

class Contador extends Component {

  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  }

  increment = () => {
    this.setState({
      numero: this.state.numero + this.state.passo
    });
  };

  decrement = () => {
    this.setState({
      numero: this.state.numero - this.state.passo
    });
  };

  setPasso = (novopasso) => {
    this.setState({
      passo: novopasso,
    })
  }

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <PassoForm 
          passo={this.state.passo}
          setPasso={this.setPasso}
        />
        <Botoes
          increment={this.increment}
          decrement={this.decrement}
        />
      </div>
    );
  };
};

export default Contador;
