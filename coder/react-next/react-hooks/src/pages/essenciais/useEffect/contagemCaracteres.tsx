import Display from "@/components/template/Display";
import Pagina from "@/components/template/Pagina";
import { useEffect, useState } from "react";

export default function(){
    const qtdCaracteres = 400;
    const [caracteresRestantes, setCaracteresRestantes] = useState(qtdCaracteres)
    const [texto, setTexto] = useState("")

    useEffect(() => {
        let aux = qtdCaracteres - texto.length
        setCaracteresRestantes(aux)
    }, [texto])
    return (
        <Pagina titulo="" subtitulo="">
            <Display 
                texto={"Digita o texto"} 
                textoComplementar={`${caracteresRestantes} caracteres restantes`}
            />
            <textarea value={texto} onInput={(e) => setTexto(e.currentTarget.value)}
                className="
                    border border-zinc-700 bg-zinc-700
                    text-white text-2xl w-3/5 h-72 
                    rounded p-5"
            >

            </textarea>
        </Pagina>
    );
}