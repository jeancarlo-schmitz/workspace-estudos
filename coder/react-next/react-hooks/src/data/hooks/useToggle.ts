import { useState } from "react";

export default function useToggle(valor?: boolean){
    const [ativo, setAtivo] = useState(valor ?? false);

    function toggleAtivo(value?: boolean){
        if (typeof value === "boolean") {
            setAtivo(value);
        } else {
            setAtivo((prev) => !prev);
        }
    }

    const r: [boolean, (value?: boolean) => void] = [ativo, toggleAtivo];
    return r;
}