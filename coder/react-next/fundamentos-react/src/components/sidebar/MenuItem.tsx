import Link from "next/link";
import React from "react";

interface MenuItemProps {
    icone: React.ReactElement;
    texto: string
    url: string;
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.url} >
            <div className="
            flex items-center gap-2 
            py-2 px-3 rounded-md 
            text-zinc-300 hover:bg-black 
        " >
                <span>
                    {React.cloneElement(props.icone, {
                        stroke: 1
                    })}
                </span>
                <span className="text-sm">{props.texto}</span>
            </div>
        </Link>

    )
}