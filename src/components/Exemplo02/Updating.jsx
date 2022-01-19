import React from "react";
import { FaRegMoon, FaSun } from "react-icons/fa";

export class Updating extends React.Component {
  state = {
    ligado: false,
  };

  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <div>
        <div>
          <h1>Demonstrando o ciclo de vida de atualização </h1>
          <div>
            {this.state.ligado ? <FaSun /> : <FaRegMoon />}
            <h2>Light mode está {this.state.ligado ? "ligado" : "desligado"} </h2>
            <button onClick={() => this.setState({ ligado: !this.state.ligado })}>
              {this.state.ligado ? "desligar" : "ligar"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Updating;
