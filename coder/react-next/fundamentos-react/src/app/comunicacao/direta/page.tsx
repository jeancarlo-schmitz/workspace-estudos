'use client';
import Botao from "@/components/comunicacao/direta/Botão";
import Pagina from "@/components/Pagina_old";

export default function PaginaComunicacaoDireta() {
    return (
        <Pagina
            cabecalho={{
                titulo: "Comunicação Direta",
                subtitulo: "Este é um exemplo de componente de comunicação Direta"
            }}
        >
            <div>
                <Botao />
            </div>
        </Pagina>
    );
}