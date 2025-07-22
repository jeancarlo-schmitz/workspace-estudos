import Botao from "@/components/template/Botao";
import Display from "@/components/template/Display";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export default function(){
    const [number, setNumber] = useState(0);

    function alterarNumber(number: number){
        setNumber(number);
    }

    return (
        <Pagina titulo="Contador" subtitulo="Entendo o que é um estado">
            <Display texto={number} />
            <Flex gap={5}>
                <Botao 
                    redondo
                    icone={<IconMinus/>}
                    cor="bg-blue-500"
                    onClick={() => alterarNumber(number-1)}
                />
                <Botao 
                    redondo
                    icone="0"
                    cor="bg-red-500"
                    onClick={() => alterarNumber(0)}
                />
                <Botao 
                    redondo
                    icone={<IconPlus />}
                    cor="bg-green-500"
                    onClick={() => alterarNumber(number+1)}
                />
            </Flex>
        </Pagina>
    )
}