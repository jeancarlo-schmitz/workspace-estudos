import { useContext } from "react";
import Area from "../template/Area";
import ContadorContext from "@/context/ContadorContext";

export default function Mais(){
    const {incrementar} = useContext(ContadorContext);

    return (
        <Area titulo="Valor" className="bg-green-500">
            <button 
                className="btn"
                onClick={incrementar}
            >
                +1
            </button>
        </Area>
    )
}