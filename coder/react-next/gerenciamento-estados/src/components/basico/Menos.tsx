"use client";

import { useContext } from "react";
import Area from "../template/Area";
import ContadorContext from "@/context/ContadorContext";

export default function Menos(){
    const {decrementar} = useContext(ContadorContext);

    return (
        <Area titulo="Botão menos" className="bg-red-500">
            <button 
                className="btn"
                onClick={decrementar}
            >
                -1
            </button>
        </Area>
    )
}