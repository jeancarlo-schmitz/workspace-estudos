import Link from "next/link";

export default function MenuItem(props: any) {
    return (
        <Link href={`${props.href}`} className={`
            px-4 py-2 
            bg-zinc-900 hover:bg-zinc-800 w-full
            text-sm flex items-center gap-2
        `}>
            {props.icone}
            <span>{props.titulo}</span>
        </Link>
    )
}
