import React from "react";

class ComponenteTeste extends React.Component {
  constructor() {
    super();
    console.log("Executado no constructor");
  }
  componentDidMount() {
    console.log("Executado no componentDidMount");
  }
  componentDidUpdate() {
    console.log("Executado no componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("Executado no componentWillUnmount");
  }

  render() {
    console.log("Executado no render");

    return <p>Componente de teste sendo mostrado na tela!</p>;
  }
}

export class Unmounting extends React.Component {
  state = {
    mostrar: true,
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
