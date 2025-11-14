import { Box } from "@mui/material"
import type { FC } from "react"
import { Img, Items, ItemWrapper, Size, Title, Price, PriceWrapper, BtnWrapper, Btn, TotalPrice, DownPanel } from "./styled-component"
import { Item } from "../styled-component"

export interface CartDropData {
    id: number
    img: string
    name: string
    size: string
    price: number
    currency: string
    quantity: number
    color?: string
}

interface Props {
    data: CartDropData[]
}

const CartDrop: FC<Props> = ({ data }) => {

    const total = data.reduce((accumulator, item) => item.price + accumulator * 19.61, 0)

    return(
        <>
            <ItemWrapper>
                {data.map((cart) => (
                    <Item
                        key={cart.id}
                    >

                        <Img src={cart.img} alt={cart.name} />

                        <Items>
                            <Title>{cart.name}</Title>
                            <Size>размер: {cart.size} цвет: {cart.color}</Size>
                            <PriceWrapper>
                                <Price>{cart.price} {cart.currency}</Price>
                                <Box>{`⠀-⠀`}{cart.quantity}</Box>
                            </PriceWrapper>
                        </Items>
                    </Item>
                ))}
            </ItemWrapper>         

            <DownPanel>
                <TotalPrice>
                    <Box sx={{fontWeight: '600', fontSize: '16px',}}>всего:</Box>⠀{total.toLocaleString()}MDL
                </TotalPrice>

                <BtnWrapper>
                    <Btn>В корзину</Btn>
                    <Btn sx={{backgroundColor: '#347853 !important', color: '#FFFFFF !important'}}>Оформить</Btn>
                </BtnWrapper>
            </DownPanel>
        </>
    )
}

export default CartDrop