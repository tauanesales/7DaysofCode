import React from "react";
import Coluna from "./Coluna";

function ContainerCaixas() {
    return <div className="linha containerCaixas">
        <Coluna />
        <Coluna />
        <Coluna />
        <Coluna />
        <Coluna />
    </div>;
}

export default ContainerCaixas;