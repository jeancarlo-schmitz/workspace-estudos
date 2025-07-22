interface botaoProps {
    alterarNome: (name: string) => void;
}
export default function Botao(props: botaoProps){

    return (
        <div className="flex flex-col gap-5 bg-green-700 rounded-md">
            <div className="flex gap-3">
                <button className="botao" onClick={() => props.alterarNome("Maria")}>Maria</button>
                <button className="botao" onClick={() => props.alterarNome("João")}>João</button>
                <button className="botao" onClick={() => props.alterarNome("Pedro")}>Pedro</button>
            </div>
        </div>
    )
}