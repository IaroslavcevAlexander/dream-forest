import { Box } from "@mui/material"
import { useState, type FC } from "react"
import { CategoryImg, Item, SubBox, SubItem } from "./styled-component"

interface MenuData {
    id: number
    img: string
    name: string
    subcategories: Subcategories[]
}

interface Subcategories {
    id: number
    name?: string
    title?: string
    subcategories?: Subcategories[]
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

                    {open === category.id && category.subcategories?.length ? (
                            <SubItem>
                                {category.subcategories.map((sub) => (
                                    <SubBox key={sub.id}>
                                        {sub.title}
                                    </SubBox>
                                ))}
                            </SubItem>
                        ) : null}
                </Item>
            ))}
        </Box>
    )
}

export default Menu