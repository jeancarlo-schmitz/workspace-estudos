import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import AreaLateral from "./navbar/AreaLateral";
import Rodape from "./Rodape";

interface PaginaProps {
    cabecalho?: {
        titulo?: string;
        subtitulo?: string;
    };
    footer?: {
        texto1?: string;
        texto2?: string;
    };
    children?: React.ReactNode;
}

export default function Pagina(props: PaginaProps) {
    const cabecalho = props.cabecalho || {};
    const conteudo = props.children
    const footer = props.footer || {};
    return (
        <div className={`
            flex h-screen
        `}>
            <AreaLateral />
            <div className={`
              flex flex-col flex-1
              `}>
                <Cabecalho titulo={cabecalho.titulo} subtitulo={cabecalho.subtitulo} />
                <Conteudo >
                    {conteudo}
                </Conteudo>
                <Rodape texto1={footer.texto1} texto2={footer.texto2} />
            </div>
        </div>
    );
}