import AdicionarProduto from "@/components/loja/AdicionarProduto";
import Carrinho from "@/components/loja/Carrinho";
import FinalizarCompra from "@/components/loja/FinalizarCompra";
import Flex from "@/components/template/Flex";
import Pagina from "@/components/template/Pagina";
import { createContext, useState } from "react";

export let Contexto = createContext({} as any)

export default function(){
    const [carrinho, setCarrinho] = useState<any>([]);

    const daddosContexto = {carrinho, setCarrinho, 
        total(){
            return carrinho.reduce((acc: number, produto: any) => acc + +produto.preco, 0);
        }};
    return (
        <Contexto.Provider value={daddosContexto}>
            <Pagina titulo="Loja" 
            subtitulo="Compartilhando informações entre multiuplos componentes com contexto">
                <Flex col gap={4}>
                    <Flex gap={4}>
                        <AdicionarProduto />
                        <FinalizarCompra />
                    </Flex>
                    <Carrinho />
                </Flex>
            </Pagina>
        </Contexto.Provider>

    )
}