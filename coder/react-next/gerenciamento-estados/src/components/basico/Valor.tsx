import { useContext } from "react";
import Area from "../template/Area";
import ContadorContext from "@/context/ContadorContext";

export default function Valor(){
    const {numero} = useContext(ContadorContext);

    return (
        <Area titulo="Valor Total" className="bg-blue-500">
            <span className="font-black text-6xl">
                {numero}
            </span>
        </Area>
    )
}