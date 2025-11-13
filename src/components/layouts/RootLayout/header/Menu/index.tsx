import { Box } from "@mui/material"
import { useState, type FC } from "react"
import { Item } from "../styled-component"
import Baner from "../Baner/Baner"
import type { BanerData } from '../Baner/Baner'
import { BanerItem, CategoryImg, NameWrapper, SubBox, SubItem, SubItemWrapper, Сorner } from "./styled-components"

export interface MenuData {
    id: number
    img: string
    name: string 
    baner?: BanerData
    subcategories: Subcategories[]
}

interface Subcategories {
    id: number
    name?: string
    title?: string
    subcategories?: Subcategories[]
    baner?: BanerData
}

interface Props {
    data: MenuData[]
}

const Menu: FC<Props> = ({ data }) => {
    const [ open, setOpen ] = useState<number | null>(null)

    return(
        <Box>
            {data.map((category) => (   
                <Item 
                    key={category.id}
                    onMouseOver={() => setOpen(category.id)}
                    onMouseOut={() => setOpen(null)}
                >
                    <CategoryImg src={category.img} alt={category.name} />
                    {category.name}
                    <Сorner sx={{ backgroundImage: `url(/img/icons/90gradusov.svg)` }} />

                    {open === category.id && category.subcategories?.length ? (
                        <SubItemWrapper>
                            <SubItem>
                                {category.subcategories.map((sub) => (
                                    <SubBox key={sub.id}>
                                        {sub.title} 
                                        {sub.subcategories?.map((item) => (
                                            <NameWrapper key={item.id}>
                                                <Box>{item.name}</Box>
                                            </NameWrapper>
                                        ))}
                                    </SubBox>
                                ))}
                            </SubItem>
                            <BanerItem>
                                {category.baner && 
                                    <Baner data={category.baner} />
                                }
                            </BanerItem>
                        </SubItemWrapper>    
                    ) : null}
                </Item>
            ))}
        </Box>
    )
}

export default Menu