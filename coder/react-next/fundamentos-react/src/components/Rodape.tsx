export default function Rodape(props: any){
    return (
        <div className={`
            h-12 border-t border-zinc-900 bg-zinc-900
            flex justify-between items-center p-2 text-zinc-500
        `}>
            <p>{props.texto1}</p>
            <p>{props.texto2}</p>
        </div>
    )
}