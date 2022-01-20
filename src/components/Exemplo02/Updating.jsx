import React from "react";
import { FaRegMoon, FaSun } from "react-icons/fa";

export class Updating extends React.Component {
  constructor() {
    super();
    console.log("Executou no constructor");
    this.state = {
      ligado: false,
    };
  }

  componentDidMount() {
    console.log("Executou no componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(this.props);
    console.log(prevState);
    console.log(this.state);
    console.log("Executou no componentDidUpdate");
  }

  render() {
    console.log("Executou no render");
    return (
      <div>
        <div>
          <h1>Demonstrando o ciclo de vida de atualização: {this.props.hello} </h1>
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
