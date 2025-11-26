import type { FC } from "react"
import Inner from "../../../Inner/Inner"
import { Email, FooterItem, FooterItemWrapper, FooterWrapper, ImgEmailWrapper, Root, Tel, Title, } from "./styled-component"
import SubFooter from "./SubFooter"
import { Box } from "@mui/material"

interface FooterData  {
    id: number
    name: string
    items: Items[]
}

interface Items {
    id: number
    name?: string
    img?: string
    email?: string
    tel?: string
}

interface Props {
    data: FooterData[]
}

const Footer: FC<Props>= ({ data }) => {
    return(
        <Root>
            <Inner>
                <FooterWrapper>
                    {data.map((item) =>
                        <FooterItemWrapper key={item.id}>
                            <Title>{item.name}</Title>

                            {item.items.map((items) => (
                                <Box key={items.id}>
                                    <FooterItem>
                                        {items.name && (
                                            <Box>{items.name}</Box>
                                        )}

                                        <ImgEmailWrapper href={`mailto:${items.email}`}>
                                            {items.img && (
                                                <Box component={'img'} src={items.img} alt={items.name} />
                                            )}

                                            {items.email && (
                                                <Email>
                                                    {items.email}
                                                </Email>
                                            )}
                                        </ImgEmailWrapper>

                                        {items.tel  && (
                                            <Tel href={`tel:${items.tel}`}>
                                                {items.tel}
                                            </Tel>
                                        )}
                                    </FooterItem>
                                </Box>
                            ))}
                        </FooterItemWrapper>
                    )}
               </FooterWrapper>
            </Inner>

            <SubFooter />
        </Root>
    )
}

export default Footer