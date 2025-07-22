import { MenuItem } from "../../data/models/MenuItem";
import { MenuSecao } from "../../data/models/MenuSecao";
import Logo from "./Logo";
import MenuPrincipalItem from "./MenuPrincipalItem";
import MenuPrincipalSecao from "./MenuPrincipalSecao";
import Flex from "./Flex";
import { IconAppWindow, IconArrowLeftRight, IconDimensions, IconLetterCase, IconMathGreater, IconMenu, IconNumbers, IconRefreshAlert, IconSection, IconShoppingCart, IconUsers, IconX } from "@tabler/icons-react";
import useToggle from "@/data/hooks/useToggle";
import useTamanhoJanela from "@/data/hooks/useTamanhoJanela";
import { useEffect } from "react";

export default function MenuPrincipal() {
    const secoes = [
        {
            titulo: "Essenciais",
            aberta: false,
            itens: [
                {
                    icone: <IconNumbers />,
                    titulo: "Contador",
                    tag: "useState",
                    url: "/essenciais/useState/contador"
                },
                {
                    icone: <IconUsers />,
                    titulo: "Votação",
                    tag: "useState",
                    url: "/essenciais/useState/votacao"
                },
                {
                    icone: <IconArrowLeftRight />,
                    titulo: "Consulta API",
                    tag: "useEffect",
                    url: "/essenciais/useEffect/consultaAPI"
                },
                {
                    icone: <IconMathGreater />,
                    titulo: "Maior",
                    tag: "useEffect",
                    url: "/essenciais/useEffect/maior"
                },
                {
                    icone: <IconLetterCase />,
                    titulo: "Contagem caracteres",
                    tag: "useEffect",
                    url: "/essenciais/useEffect/contagemCaracteres"
                },
                {
                    icone: <IconRefreshAlert />,
                    titulo: "useState VS useRef",
                    tag: "useRef",
                    url: "/essenciais/useRef/stateVsRef"
                },
                {
                    icone: <IconSection />,
                    titulo: "referencia de elemento",
                    tag: "useRef",
                    url: "/essenciais/useRef/refElemento"
                }
            ],
        },
        {
            titulo: "Personalizados",
            aberta: false,
            itens: [
                {
                    icone: <IconAppWindow />,
                    titulo: "Modal",
                    tag: "personalizados",
                    url: "/personalizados/modal"
                },
                {
                    icone: <IconDimensions />,
                    titulo: "Tamanho Janela",
                    tag: "personalizados",
                    url: "/personalizados/tamanhojanela"
                }
            ]
        },
        {
            titulo: "Contexto",
            aberta: true,
            itens: [
                {
                    icone: <IconShoppingCart />,
                    titulo: "Loja",
                    tag: "useContext",
                    url: "/contexto/loja"
                }
            ]
        }
    ];

    const [mini, toogleMini] = useToggle();
    const tamanho = useTamanhoJanela();

    useEffect(() => {
        if(tamanho === 'md' || tamanho === "sm"){
            toogleMini(true);
        }else{
            toogleMini(false);
        }
    }, [tamanho])
    function renderizarSecoes() {
        return secoes.map((secao: MenuSecao) => (
            <MenuPrincipalSecao key={secao.titulo} titulo={secao.titulo} mini={mini} aberta={secao.aberta}>
                {renderizarItens(secao)}
            </MenuPrincipalSecao>
        ));
    }

    function renderizarItens(secao: MenuSecao) {
        return secao.itens.map((item: MenuItem) => (
            <MenuPrincipalItem
                key={`${item.titulo}-${item.tag}`}
                icone={item.icone}
                titulo={item.titulo}
                tag={item.tag}
                url={item.url}
                mini={mini}
            />
        ));
    }

    return (
        <aside
            className={`
            flex flex-col overflow-y-scroll overflow-x-hidden
            bg-black shadow-md shadow-zinc-800
            scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 
            scrollbar-thin
            ${mini ? "items-center w-[130px]" : "w-[370px]"}
        `}
        >
            <Flex center className="m-7">
                {!mini && <Logo />}
                <div className="cursor-pointer" onClick={toogleMini}>
                    {mini? <IconMenu /> : <IconX />}
                </div>
            </Flex>
            <nav className="flex flex-col gap-4 m-7">{renderizarSecoes()}</nav>
        </aside>
    );
}
