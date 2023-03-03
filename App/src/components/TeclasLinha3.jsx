import React from "react";
import Tecla from "./Tecla";
import TeclaApagar from "./TeclaApagar"

function TeclasLinha3() {
    return <div className="linha">
        <Tecla tecla="ENTER" />
        <Tecla tecla="Z" />
        <Tecla tecla="X" />
        <Tecla tecla="C" />
        <Tecla tecla="V" />
        <Tecla tecla="B" />
        <Tecla tecla="N" />
        <Tecla tecla="M" />
        <TeclaApagar />
    </div>;
}

export default TeclasLinha3;