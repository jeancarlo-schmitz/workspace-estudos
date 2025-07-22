import { Icon3dCubeSphereOff, IconCode, IconHome } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu (){
    return (
        <div className={`
            flex flex-col gap-2 justify-start w-full p-2
        `}>
            <span className="text-sm text-zinc-500 pl-3 pt-4">Comunicação</span>
            <MenuItem icone={<IconCode />} titulo="Indireta" href="/comunicacao/indireta"/>
            <MenuItem icone={<IconCode />} titulo="Direta" href="/comunicacao/direta"/>

            <span className="text-sm text-zinc-500 pl-3 pt-4">Estado</span>
            <MenuItem icone={<IconCode />} titulo="Desafio Calculadora" href="/estados/desafio-calculadora"/>
            <MenuItem icone={<IconCode />} titulo="campo Texto" href="/estados/campo-texto"/>
            <MenuItem icone={<IconCode />} titulo="Desafio Estado" href="/estados/desafio"/>
            <MenuItem icone={<IconCode />} titulo="Componente com estado" href="/estados/com"/>
            <MenuItem icone={<IconCode />} titulo="Componente sem estado" href="/estados/sem"/>

            <span className="text-sm text-zinc-500 pl-3 pt-4">Menu</span>
            <MenuItem icone={<IconHome />} titulo="home" href="/"/>
            <MenuItem icone={<Icon3dCubeSphereOff />} titulo="Pagina #2" href="/pagina" />
        </div>
    )
}