import React from "react";
import TeclasLinha1 from "./TeclasLinha1";
import TeclasLinha2 from "./TeclasLinha2";
import TeclasLinha3 from "./TeclasLinha3";


function Teclado() {
    return <div className="teclado coluna">
        <TeclasLinha1 />
        <TeclasLinha2 />
        <TeclasLinha3 />
    </div>;
}

export default Teclado;