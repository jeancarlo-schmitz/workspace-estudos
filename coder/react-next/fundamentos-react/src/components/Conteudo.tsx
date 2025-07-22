export default function Conteudo(props: any) {
    const { children } = props;
    return (
        <div className={`
            bg-zinc-800 text-white
            flex justify-start flex-1 p-2
        `}>
            {children}
        </div>
    )
}