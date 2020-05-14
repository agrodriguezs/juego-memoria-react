import React, { Component } from 'react';
import '../assets/css/Header.css';

export default class Header extends Component {
  render() {
    return (
      <header> 
        
        <div className="titulo">Juego de Memoria</div>
        <div className="intentos">
          Intentos: {this.props.numeroDeIntentos}
        </div>
          <div className="area-boton">
            <button className="boton-reiniciar" onClick={this.props.resetearPartida}>
              Reiniciar
            </button>
        </div>

      </header>
    );
  }
};