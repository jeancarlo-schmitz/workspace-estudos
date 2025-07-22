import produtos from "@/data/constants/produtos";
import Produto from "@/data/model/Produto";
import React, { createContext, useState } from "react";

interface CatalogoProviderProps{
    children?: React.ReactNode;
}

interface CatalogoContextType {
    produtos: Produto[];
}

const CatalogoContext = createContext<CatalogoContextType>({} as CatalogoContextType);

export function CatalogoProvider(props: CatalogoProviderProps){
    
    return (
        <CatalogoContext.Provider value={{
            produtos
        }}>
            {props?.children}
        </CatalogoContext.Provider>
    )
}

export default CatalogoContext;