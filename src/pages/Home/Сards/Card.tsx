import { BtnWrapper, CadrWrapper, Desc, DescWrapper, ImgCard, Name, Price } from "./styled-component"
import type { FC } from "react"
import { Btn } from "../Сards/styled-component"
import { Box } from "@mui/material"

interface CardData {
    id: number
    name: string
    watchCase?: string
    color?: string
    weight: string
    material: string
    price: Price
    oldPrice?: Price | number
    isFavorite: Buttons
    inCart: Buttons
    img: string
    memory?: string
}

interface Price {
    quantity: number
    currency: string
}

interface Buttons {
    status: boolean
}

interface Props {
    data: CardData
}

const Card: FC<Props> = ({ data }) => {
    const { name, watchCase, color, weight, material, price, oldPrice, isFavorite, inCart, img, memory } = data
    return(
        <CadrWrapper>
            <BtnWrapper>
                <Btn active={inCart.status}>
                    <Box component='img' src="/img/icons/bag icons min.svg" alt="cart" />
                </Btn>
                <Btn active={isFavorite.status}>
                    <Box component='img' src="/img/icons/heart favorites min.svg" alt="favorite" />
                </Btn>
            </BtnWrapper>

            <ImgCard><Box component='img' src={img} alt={name} /></ImgCard>

            <DescWrapper>
                <Name>{[name, color].filter(Boolean).join(', ')}</Name>
                <Desc>{[watchCase, weight, material, memory].filter(Boolean).join(', ')}</Desc>
                <Price>
                    {oldPrice && typeof oldPrice !== 'number' && (
                        <span style={{ textDecoration: 'line-through', marginRight: 5, color: '#C90D0D' }}>
                        {oldPrice.quantity} {oldPrice.currency}
                        </span>
                    )}
                    {price && (
                        <span>
                        {price.quantity} {price.currency}
                        </span>
                    )}
                </Price>
            </DescWrapper>
        </CadrWrapper>
    )
}

export default Card