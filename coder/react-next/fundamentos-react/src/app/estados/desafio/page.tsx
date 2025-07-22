'use client';
import Pagina from "@/components/Pagina_old";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export default function PaginaSemEstado() {
    const [numero, setNumero] = useState(0);
    const [delta, setDelta] = useState(1);

    function incrementarDelta() {
        setDelta(delta + 1);
    }

    function decrementarDelta() {
        setDelta(delta - 1);
    }

    function incrementar() {
        setNumero(numero + delta);
    }

    function decrementar() {
        setNumero(numero - delta);
    }
    return (
        <Pagina
            cabecalho={{
                titulo: "Componente sem estado",
                subtitulo: "Este é um exemplo de componente sem estado."
            }}
        >
            <div className="flex flex-col items-center justify-center h-full w-full gap-4">
                <span className="text-7xl">{numero}</span>
                <div className="flex gap-3">
                    <button onClick={decrementar} className="bg-zinc-900 hover:bg-zinc-700 text-white px-4 py-4 rounded-full">
                        <IconMinus />
                    </button>
                    <button onClick={incrementar} className="bg-zinc-900 hover:bg-zinc-700 text-white px-4 py-4 rounded-full">
                        <IconPlus />
                    </button>
                </div>
                <div className="flex gap-3">
                    <button onClick={decrementarDelta} className="bg-purple-900 hover:bg-purple-700 text-white px-4 py-4 rounded-full">
                        <IconMinus />
                    </button>
                    <span className="text-5xl">{delta}</span>
                    <button onClick={incrementarDelta} className="bg-purple-900 hover:bg-purple-700 text-white px-4 py-4 rounded-full">
                        <IconPlus />
                    </button>
                </div>
            </div>
        </Pagina>
    );
}