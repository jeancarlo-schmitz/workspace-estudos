import Logo from "./Logo";
import Menu from "./Menu";
import UsuarioInfo from "./usuario/UsuarioInfo";

export default function SideBar(){
    const dadosUsuario = {
        nome: 'Strolker',
        email: 'strolker@gmail.com',
        imagemUrl: 'https://img.freepik.com/vetores-premium/design-de-avatar-de-pessoa_24877-38131.jpg'
    }
    return (
        <aside className="flex flex-col bg-zinc-900 w-72 h-svh fixed scrollbar-custom">
            <Logo className="pt-7 px-7"/>
            <Menu className="p-7 pt-2 h-[85%] overflow-y-auto"/>
            <hr className=" border-zinc-700" />
            <UsuarioInfo {...dadosUsuario} className="p-7"/>
        </aside>
    );
}