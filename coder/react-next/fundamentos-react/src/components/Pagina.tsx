import SideBar from "./sidebar/Sidebar";

interface PaginaProps {
    children?: React.ReactNode;
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className="flex h-screen">
            <SideBar />
            
            <div className="p-7">
                {props.children}
            </div>
        </div>
    );
}