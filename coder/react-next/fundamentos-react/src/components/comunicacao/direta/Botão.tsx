import { useState } from "react"
import Valor from "./Valor";

export default function Botao(){
    const [valor, setValor] = useState('');
    return (
        <div className="flex flex-col gap-5 bg-green-700 rounded-md">
            <div className="flex gap-3">
                <button className="botao" onClick={() => setValor("Maria")}>Maria</button>
                <button className="botao" onClick={() => setValor("João")}>João</button>
                <button className="botao" onClick={() => setValor("Pedro")}>Pedro</button>
            </div>
            
            <Valor texto={valor} />
        </div>
    )
}