"use client";

import Mostrador from "@/components/comunicacao/Mostrador";
import Area from "@/components/template/Area";
import React, { useState } from "react";

export default function Comunicacao() {
    const [mensagem, setMensagem] = useState("");

    return (
        <div className="p-20">
            {/* <Area titulo="Revisão Comunicação" className="bg-emerald-500"> */}
                <Mostrador />
            {/* </Area> */}
        </div>
    );
}