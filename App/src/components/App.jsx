import React from "react";
import ContainerCaixas from "./ContainerCaixas";
import Teclado from "./Teclado";
import Cabecalho from "./Cabecalho";
function App() {
    return <div className="coluna">
        <Cabecalho />
        <ContainerCaixas />
        <Teclado />
    </div>;
}

export default App;
