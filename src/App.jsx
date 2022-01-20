import React, { useState } from "react";
import CompClasse from "./components/Exemplo01/ComClasse";
import Estado from "./components/Exemplo01/Estado";
import Mounting from "./components/Exemplo02/Mounting";
import Unmounting from "./components/Exemplo02/Unmounting";
import Updating from "./components/Exemplo02/Updating";

export const App = ({}) => {
  const [texto, setTexto] = useState();
  return (
    <div>
      {/* <CompClasse /> */}
      {/* <Estado /> */}
      {/* <Mounting /> */}
      {/* <input name="Texto" label="Texto" onChange={(e) => setTexto(e.target.value)} />
      <Updating hello={texto} /> */}
      <Unmounting />
    </div>
  );
};
