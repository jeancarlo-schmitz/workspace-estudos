interface ValorProps{
    texto:string;
}

export default function Valor(props: ValorProps){

    return (
        <div className="text-8xl bg-amber-800 rounded-md">
            <span>{props.texto}</span>
        </div>
    );
}