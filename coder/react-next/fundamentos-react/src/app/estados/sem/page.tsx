'use client';
import Pagina from "@/components/Pagina_old";

export default function PaginaSemEstado() {
    let numero = 0;

    function incrementar() {
        numero++;
        console.log("Número incrementado:", numero);
    }
    return (
        <Pagina
            cabecalho={{
                titulo: "Componente sem estado",
                subtitulo: "Este é um exemplo de componente sem estado."
            }}
        >
            <div className="flex flex-col items-center justify-center h-full gap-4">
                <span>Valor: {numero}</span>
                <button onClick={incrementar} className="bg-blue-500 text-white px-4 py-2 rounded">Incrementar</button>
            </div>
        </Pagina>
    );
}