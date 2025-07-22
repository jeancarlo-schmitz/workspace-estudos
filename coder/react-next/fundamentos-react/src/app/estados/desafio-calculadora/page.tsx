'use client';
import Pagina from "@/components/Pagina_old";
import { useEffect, useState } from "react";

export default function PaginaDesafioCalculadora() {
    const [valorA, setValorA] = useState(0)
    const [valorB, setValorB] = useState(0)
    const [mostrarResultado, setMostrarResultado] = useState(false);
    const [resultadoSoma, setResultadoSoma] = useState(0);
    const [resultadoSubtracao, setResultadoSubtracao] = useState(0);
    const [resultadoMultiplicacao, setResultadoMultiplicacao] = useState(0);
    const [resultadoDivisao, setResultadoDivisao] = useState(0);


    function atualizarValorA(e: React.ChangeEvent<HTMLInputElement>) {
        setValorA(Number(e.target.value))
    }

    function atualizarValorB(e: React.ChangeEvent<HTMLInputElement>) {
        setValorB(Number(e.target.value))
    }

    useEffect(() => {
        if (valorA && valorB) {
            setMostrarResultado(true);
            setResultadoSoma(valorA + valorB);
            setResultadoSubtracao(valorA - valorB);
            setResultadoMultiplicacao(valorA * valorB);
            setResultadoDivisao(valorA / valorB);
        } else {
            setMostrarResultado(false);
        }
    }, [valorA, valorB]);

    return (
        <Pagina
            cabecalho={{
                titulo: "Desafio Calculadora, 4 operações",
                subtitulo: "Esse é o desafio de calculadora, onde tem 2 campos de input, e embaixo mostra o valor das 4 operações"
            }}
        >
            <div className="flex flex-col gap-5">
                <div className="flex items-start w-52">
                    <input 
                        type="number"
                        onChange={atualizarValorA}
                        value={valorA}
                    />

                    <input 
                        type="number"
                        onChange={atualizarValorB}
                        value={valorB}
                    />
                </div>

                <div className="flex flex-col w-80 h-64">
                    <span>{valorA} + {valorB} = {resultadoSoma}</span>
                    <span>{valorA} - {valorB} = {resultadoSubtracao}</span>
                    <span>{valorA} * {valorB} = {resultadoMultiplicacao}</span>
                    <span>{valorA} / {valorB} = {resultadoDivisao}</span>
                </div>
            </div>
        </Pagina>
    );
}