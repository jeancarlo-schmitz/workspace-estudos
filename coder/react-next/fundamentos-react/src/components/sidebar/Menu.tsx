import {
  IconBook,
  IconPuzzle,
  IconAtom,
  IconBox,
  IconBorderStyle,
  IconRulerMeasure,
  IconLayoutAlignLeft,
  IconLayoutDistributeHorizontal,
  IconArrowsSort,
  IconLayoutGrid,
  IconColumns,
  IconPalette,
  IconDeviceFloppy,
  IconHelpCircle,
  IconRowInsertTop
} from "@tabler/icons-react";
import MenuGrupo from "./MenuGrupo"
import MenuItem from "./MenuItem"

interface MenuProps {
    className?: string
}
export default function Menu (props: MenuProps){
    return (
        <div className={`
            ${props.className ?? ''}
        `}>
            <MenuGrupo texto="Conceitos" />
            <MenuItem icone={<IconBook />} texto="Introdução" url="/conceitos/introducao" />
            <MenuItem icone={<IconPuzzle />} texto="Modularidade" url="/conceitos/modularidade" />
            <MenuItem icone={<IconAtom />} texto="Atomic Design" url="/conceitos/atomic-design" />

            <MenuGrupo texto="Box Model" />
            <MenuItem icone={<IconBox />} texto="Margin & Padding" url="/box/margin-padding" />
            <MenuItem icone={<IconBorderStyle />} texto="Borders" url="/box/borders" />
            <MenuItem icone={<IconRulerMeasure />} texto="Sizing" url="/box/sizing" />

            <MenuGrupo texto="Flex" />
            <MenuItem icone={<IconLayoutAlignLeft />} texto="Flex Container" url="/flex/container" />
            <MenuItem icone={<IconLayoutDistributeHorizontal />} texto="Justify Content" url="/flex/justify" />
            <MenuItem icone={<IconArrowsSort />} texto="Align Items" url="/flex/align" />

            <MenuGrupo texto="Grid" />
            <MenuItem icone={<IconLayoutGrid />} texto="Grid Básico" url="/grid/basico" />
            <MenuItem icone={<IconColumns />} texto="Colunas" url="/grid/colunas" />
            <MenuItem icone={<IconRowInsertTop />} texto="Linhas" url="/grid/linhas" />

            <MenuGrupo texto="Extras" />
            <MenuItem icone={<IconPalette />} texto="Temas" url="/extras/temas" />
            <MenuItem icone={<IconDeviceFloppy />} texto="Salvar Config" url="/extras/salvar" />
            <MenuItem icone={<IconHelpCircle />} texto="Ajuda" url="/extras/ajuda" />

        </div>
    )
}