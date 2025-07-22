import produtos from "@/data/constants/produtos";
import ItemCarrinho from "@/data/model/ItemCarrinho";
import Produto from "@/data/model/Produto";
import React, { createContext, useState } from "react";

interface CarrinhoProviderProps{
    children?: React.ReactNode;
}

interface CarrinhoContextType {
    itens: ItemCarrinho[];
    adicionarItem: (produto: Produto) => void;
    removerItem: (produto: Produto) => void;
    limparCarrinho: () => void;
    valorTotal: number
}

const CarrinhoContext = createContext<CarrinhoContextType>({} as CarrinhoContextType);

export function CarrinhoProvider(props: CarrinhoProviderProps){
    const [itens, setItens] = useState<ItemCarrinho[]>([])

    function adicionarItem(produto: Produto){
        const item = itens.find(i => i.produto.id === produto.id) ?? {produto, quantidade: 0};
        const novoItem = {...item, quantidade: item.quantidade + 1}
        const outrosItens = itens.filter(i => i.produto.id !== produto.id)
        setItens([...outrosItens, novoItem].sort(ordernarItem));
    }

    function removerItem(produto: Produto){
        const novosItens = itens.map(item => {
            return item.produto.id === produto.id 
                ? {...item, quantidade: item.quantidade -1}
                : item 
        }).filter(item => item.quantidade > 0);

        setItens(novosItens);
    }

    function calcularValorTotal() {
        return itens.reduce((total: number, item: ItemCarrinho) => {
            return total + (item.quantidade * item.produto.preco)
        }, 0)
    }

    function limparCarrinho(){
        setItens([]);
    }

    function ordernarItem(a: ItemCarrinho, b: ItemCarrinho){
        return a.produto.nome > b.produto.nome ? 1 : -1;
    }

    return (
        <CarrinhoContext.Provider value={{
            itens, adicionarItem, removerItem, limparCarrinho, 
            get valorTotal() {
                return calcularValorTotal()
            },
        }}>
            {props?.children}
        </CarrinhoContext.Provider>
    )
}

export default CarrinhoContext;