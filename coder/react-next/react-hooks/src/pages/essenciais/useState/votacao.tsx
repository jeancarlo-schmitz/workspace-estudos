import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { useState } from "react";

export default function(){
    const [dadosVotacao, setDadosVotacao] = useState({votosRoxo: 0, votosVerde: 0});

    function votoRoxo(){
        //Essa abordagem é falha, pq algum dado pode ser alterado ao mesmo tempo em outra parte do objeto
        //setDadosVotacao({votosRoxo: dadosVotacao.votosRoxo+1, votosVerde: dadosVotacao.votosVerde})
        setDadosVotacao((dadosAtuais) => {
            return {
                votosRoxo: dadosAtuais.votosRoxo+1,
                votosVerde: dadosAtuais.votosVerde
            }
        })
    }

    function votoVerde(){
        setDadosVotacao((dadosAtuais) => {
            return {
                votosRoxo: dadosAtuais.votosRoxo,
                votosVerde: dadosAtuais.votosVerde+1
            }
        })
    }

    function votoZerar(){
        setDadosVotacao({votosRoxo: 0, votosVerde: 0})
    }

    return (
        <Pagina titulo="Votação" subtitulo="Usando estado com Objeto">
            <Flex col center >
                <Display texto={"Qual a melhor cor?"}
                    textoComplementar={`Verde: ${dadosVotacao.votosVerde} | Roxo: ${dadosVotacao.votosRoxo}`}
                />
                <Flex gap={5} >
                    <Botao 
                        cor="bg-green-600"
                        onClick={() => votoVerde()}
                        redondo
                        tamanho="2xl"
                    />
                    <Botao 
                        cor="bg-purple-600"
                        onClick={() => votoRoxo()}
                        redondo
                        tamanho="2xl"
                    />
                </Flex>
                <Botao 
                    texto="Zerar"
                    cor="bg-zinc-600"
                    onClick={() => votoZerar()}
                    tamanho="lg"
                />
            </Flex>
        </Pagina>
    )
}