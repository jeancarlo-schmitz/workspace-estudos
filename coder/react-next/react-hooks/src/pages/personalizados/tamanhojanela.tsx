import Display from "@/components/template/Display";
import Pagina from "@/components/template/Pagina";
import useTamanhoJanela from "@/data/hooks/useTamanhoJanela";

export default function (){
    const tamanho = useTamanhoJanela();
    return (
        <Pagina titulo="Qual é o tamanho da página?" subtitulo="Descobrindo tamaho da pagina">
            <Display texto={tamanho} />
            <div className="
                w-40 h-40
                sm:bg-blue-300 md:bg-pink-300 
                lg:bg-green-400 xl:bg-purple-300 
                2xl:bg-orange-400
            ">

            </div>
        </Pagina>
    );
}