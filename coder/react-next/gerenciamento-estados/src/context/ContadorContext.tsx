import React, { createContext, useState } from "react";

interface ContadorProviderProps{
    children?: React.ReactNode;
}

interface ContadorContextType {
    numero: number;
    incrementar: () => void;
    decrementar: () => void;
}

const ContadorContext = createContext<ContadorContextType>({} as ContadorContextType);

export function ContadorProvider(props: ContadorProviderProps){
    const [numero, setNumero] = useState(30);

    function incrementar(){
        setNumero(numero +1);
    }

    function decrementar(){
        setNumero(numero -1);
    }

    return (
        <ContadorContext.Provider value={{
            numero,
            incrementar,
            decrementar
        }}>
            {props?.children}
        </ContadorContext.Provider>
    )
}

export default ContadorContext;