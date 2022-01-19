import React from "react";

class ComponenteTeste extends React.Component {
  componentWillUnmount() {}

  render() {
    return <p>Componente de teste sendo mostrado na tela!</p>;
  }
}

export class Unmounting extends React.Component {
  state = {
    mostrar: false,
  };

  render() {
    return (
      <div>
        <div>
          <h1>Demonstrando o ciclo de vida de desmontagem </h1>
          <div>
            <h2>Ao sair da tela, o componente abaixo é "desmontado"</h2>
            <button onClick={() => this.setState({ mostrar: !this.state.mostrar })}>
              {this.state.mostrar ? "esconder" : "mostrar"}
            </button>
            {this.state.mostrar ? <ComponenteTeste /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Unmounting;
