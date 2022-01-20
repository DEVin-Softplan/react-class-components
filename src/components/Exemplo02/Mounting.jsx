import React from "react";

export class Mounting extends React.Component {
  constructor() {
    super();
    console.log("Executado no constructor");
  }

  componentDidMount() {
    console.log("Executado no componentDidMount");
  }

  render() {
    console.log("Executado no render");
    return (
      <div>
        <div>
          <h1>Demonstrando o ciclo de vida de montagem </h1>
        </div>
      </div>
    );
  }
}

export default Mounting;
