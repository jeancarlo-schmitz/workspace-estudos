export default function Cabecalho(props: any){
    return (
    <div className={`
        h-16 bg-zinc-800 border-b-2 border-zinc-600
        flex flex-col justify-center px-2
    `}>
            <h1 className="text-3xl">{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
        </div>
    )
}