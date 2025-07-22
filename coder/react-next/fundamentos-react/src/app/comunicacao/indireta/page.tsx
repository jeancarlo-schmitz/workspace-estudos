'use client';
import Valor from "@/components/comunicacao/indireta/Valor";
import Pagina from "@/components/Pagina_old";

export default function PaginaComunicacaoIndireta() {
    return (
        <Pagina
            cabecalho={{
                titulo: "Comunicação Indireta",
                subtitulo: "Este é um exemplo de componente de comunicação indireta"
            }}
        >
            <Valor />
        </Pagina>
    );
}