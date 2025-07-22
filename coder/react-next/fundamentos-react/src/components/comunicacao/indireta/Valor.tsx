import { useState } from "react";
import Botao from "./Botão";

export default function Valor(){
    const [valor, setValor] = useState('');

    function alterarNome(nome: string){
        setValor(nome);
    }
    return (
        <div className="flex flex-col gap-5">
            <div className="text-8xl bg-amber-800 rounded-md">
                <span>{valor}</span>
            </div>
            <Botao alterarNome={alterarNome} />
        </div>
    );
}