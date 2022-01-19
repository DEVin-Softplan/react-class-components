import React, { useState } from "react";
import { FaRegMoon, FaSun } from "react-icons/fa";

const Estado = () => {
  const [ligado, setLigado] = useState(false);
  return (
    <div>
      <div>
        {ligado ? <FaSun /> : <FaRegMoon />}
        <h2>Light mode está {ligado ? "ligado" : "desligado"} </h2>
        <button onClick={() => setLigado((l) => !l)}>{ligado ? "desligar" : "ligar"}</button>
      </div>
    </div>
  );
};

export default Estado;
