'use client';
import Pagina from "@/components/Pagina_old";
import { useState } from "react";

export default function PaginaSemEstado() {
    const [valor, setValor] = useState('')

    function atualizarTexto(){
        setValor(`${Math.random}`)
    }

    function atualizar(e: React.ChangeEvent<HTMLInputElement>) {
        setValor(e.target.value)
    }

    return (
        <Pagina
            cabecalho={{
                titulo: "Componente Texto entrada",
                subtitulo: "Este é um exemplo de componente de texto de entrada"
            }}
        >
            <div className="flex items-start w-52">
                <input 
                    type="text"
                    onChange={atualizar}
                    value={valor}
                />
            </div>
        </Pagina>
    );
}