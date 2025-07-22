"use client";

import Area from "@/components/template/Area";
import React, { useState } from "react";

export default function Estado() {
    const [texto, setTexto] = useState("");

    return (
        <div className="p-20 ">
            <Area titulo="Revisão Estado" className="bg-sky-500" >
                <input 
                    className="input" 
                    value={texto} 
                    onChange={(e) => setTexto(e.target.value)}
                    type="text" 
                />
            </Area>
        </div>
    );
}