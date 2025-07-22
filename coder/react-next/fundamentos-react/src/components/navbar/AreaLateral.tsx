import Logo from "./Logo";
import Menu from "./Menu";

export default function AreaLateral() {
    return (
        <div className={`
        w-72 bg-zinc-700 
          flex flex-col gap-3
        `}>
            <Logo />
            <Menu />
        </div>
    )
}