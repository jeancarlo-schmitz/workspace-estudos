'use client';
import Pagina from "@/components/Pagina_old";
import { useState } from "react";

export default function PaginaSemEstado() {
    const [numero, setNumero] = useState(0);

    function incrementar() {
        setNumero(numero + 1);
    }
    return (
        <Pagina
            cabecalho={{
                titulo: "Componente com estado",
                subtitulo: "Este é um exemplo de componente com estado."
            }}
        >
            <div className="flex flex-col h-full gap-4">
                <span>Valor: {numero}</span>
                <button onClick={incrementar} className="bg-blue-500 text-white px-4 py-2 rounded">Incrementar</button>
            </div>
        </Pagina>
    );
}