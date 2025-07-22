import { IconBrandTailwind } from "@tabler/icons-react";

interface LogoProps{
    className?: string
}

export default function Logo(props: LogoProps){
    return (
        <div className={`flex items-center gap-2 ${props.className ?? ''}`}>
            <IconBrandTailwind size={40} stroke={1}/>
            <span className="text-zinc-400">Tailwind com React</span>
        </div>
    )
}