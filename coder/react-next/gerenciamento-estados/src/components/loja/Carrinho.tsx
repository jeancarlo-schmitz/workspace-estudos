"use client";
import { useContext } from "react";
import Area from "../template/Area";
import CarrinhoVazio from "./CarrinhoVazio";
import CarrinhoContext from "@/context/CarrinhoContext";
import ItemCarrinhoCard from "./ItemCarrinhoCard";
import produtos from "@/data/constants/produtos";
import Real from "@/utils/Real";
import { IconX } from "@tabler/icons-react";

export default function Carrinho(){
    const {itens, valorTotal, limparCarrinho} = useContext(CarrinhoContext);
    return (
        <Area titulo="Carrinho" className="bg-green-500" sumario={Real.format(valorTotal)}>
            <div className="flex flex-col flex-wrap justify-center items-center gap-4">
                <div className="flex flex-wrap justify-center gap-4">
                    {itens.length === 0 ? (
                        <CarrinhoVazio />
                    ) : (
                        itens.map(item => {
                            return (
                                <ItemCarrinhoCard key={item.produto.id} item={item}/>
                            )   
                        }
                        )
                    )}
                </div>
                {itens.length > 0 && (
                    <button className="btn bg-red-500 flex gap-2 justify-center w-28" onClick={limparCarrinho}>
                        <IconX /> Limpar
                    </button>
                )}
            </div>
        </Area>
    );
}