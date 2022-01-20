import { useState, Component } from "react";
import { FaRegMoon, FaSun } from "react-icons/fa";

// const EstadoBkp = () => {
// const [ligado, setLigado] = useState(false);
//   return (
//     <div>
//       <div>
//         {ligado ? <FaSun /> : <FaRegMoon />}
//         <h2>Light mode está {ligado ? "ligado" : "desligado"} </h2>
//         <button onClick={() => setLigado((l) => !l)}>{ligado ? "desligar" : "ligar"}</button>
//       </div>
//     </div>
//   );
// };

export default class Estado extends Component {
  state = {
    ligado: false,
    mensagem: "Estado dentro de um componente de classe",
  };

  handleClick = () => {
    this.setState({ ligado: !this.state.ligado, outraMensagem: "Não existe no componente ainda" });
  };

  render() {
    const { ligado, mensagem } = this.state;
    // setState

    return (
      <div>
        <div>
          {ligado ? <FaSun /> : <FaRegMoon />}
          <h2>Light mode está {ligado ? "ligado" : "desligado"} </h2>
          <p>{mensagem}</p>
          <button onClick={this.handleClick}>{ligado ? "desligar" : "ligar"}</button>
          <p>{this.state.outraMensagem && this.state.outraMensagem}</p>
        </div>
      </div>
    );
  }
}

//  Estado;
